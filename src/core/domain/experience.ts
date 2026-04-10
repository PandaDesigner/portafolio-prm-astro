export class Experience {
  constructor(
    public readonly company: string,
    public readonly role: string,
    public readonly period: string,
    public readonly summary: string,
    public readonly impact: readonly string[],
  ) {}
}
