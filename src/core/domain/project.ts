export class Project {
  constructor(
    public readonly name: string,
    public readonly description: string,
    public readonly href: string,
    public readonly tags: readonly string[],
    public readonly stars: number,
    public readonly source: 'curated' | 'github',
    public readonly featured = true,
  ) {}

  get badge() {
    return this.source === 'github' ? 'GitHub' : 'Curado';
  }
}
