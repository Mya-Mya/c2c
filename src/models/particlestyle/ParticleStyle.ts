export default abstract class {
  abstract set(
    minLevel: number,
    level: number,
    maxLevel: number,
    age: number
  ): void;
  abstract r(): number;
  abstract g(): number;
  abstract b(): number;
  abstract a(): number;
  abstract weight(): number;
}
