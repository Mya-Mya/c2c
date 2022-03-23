var c2csamples = {
  sin: function (z) {
    return complexoperations.sin.n(z);
  },
  cos: function (z) {
    return complexoperations.cos.n(z);
  },
  exp: function (z) {
    return complexoperations.exp.n(z);
  },
  tan: function (z) {
    var res = complexoperations.sin.n(z);
    var cosz = complexoperations.cos.n(z);
    complexoperations.div.d(res, cosz);
    return res;
  },
};
Object.entries(c2csamples).forEach(function (entry) {
  var name = entry[0];
  var f = entry[1];
  doms.c2csamples.addC2csample(name, function () {
    trailfunctions.setComplexFunc(f);
  });
});
