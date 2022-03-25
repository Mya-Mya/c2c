export default interface ParticleStyle {
  set(minLevel: number, level: number, maxLevel: number, age: number): void;
  r(): number;
  g(): number;
  b(): number;
  a(): number;
  weight(): number;
}
