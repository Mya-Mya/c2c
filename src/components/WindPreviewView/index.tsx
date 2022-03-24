import React from "react";
import _ from "./globals";
import { setupTrails, drawTrails, addTrail } from "./trails";

import ParticleStyle1 from "../../models/particlestyle/ParticleStyle1";
import { P5Instance, ReactP5Wrapper } from "react-p5-wrapper";
import Transformer from "../../models/Transformer";
import drawAxis from "./drawAxis";
import { Complex } from "complex.js";
import { useDispatch } from "react-redux";

const sketch = (p: P5Instance) => {
  _.p = p;
  _.transformer = new Transformer(0, 0, 300, 200, 10);
  _.particleStyle = new ParticleStyle1();
  _.func = (z: Complex) => {
    return z.sin();
  };
  let grabbing = false;
  let grabbingU = 0;
  let grabbingV = 0;
  p.setup = () => {
    p.createCanvas(800, 400);
    p.frameRate(10);
    setupTrails();
  };
  p.updateWithProps = (props) => {
    _.dispatch = props.dispatch;
  };
  p.draw = () => {
    //Update globals
    _.leftU = _.transformer.u(0);
    _.rightU = _.transformer.u(p.width);
    _.topV = _.transformer.v(0);
    _.bottomV = _.transformer.v(p.height);
    if (grabbing) _.transformer.shift(grabbingU, grabbingV, p.mouseX, p.mouseY);
    p.background(240);
    drawAxis();
    drawTrails();
  };
  const isMouseInScreen = () => {
    return (
      p.mouseX >= 0 &&
      p.mouseX < p.width &&
      p.mouseY >= 0 &&
      p.mouseY < p.height
    );
  };
  p.mousePressed = () => {
    if (isMouseInScreen()) {
      grabbing = true;
      grabbingU = _.transformer.u(p.mouseX);
      grabbingV = _.transformer.v(p.mouseY);
    }
  };
  p.mouseReleased = () => {
    grabbing = false;
  };
  p.mouseWheel = (event: { delta: number }) => {
    if (isMouseInScreen()) {
      _.transformer.multA(1 - event.delta / 1000, p.mouseX, p.mouseY);
    }
  };
  p.keyPressed = () => {
    addTrail(_.transformer.u(p.mouseX), _.transformer.v(p.mouseY));
  };
};

export default () => {
  return <ReactP5Wrapper sketch={sketch} dispatch={useDispatch()} />;
};
