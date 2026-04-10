import type { ContactChannel } from './contact-channel';

export class Profile {
  constructor(
    public readonly name: string,
    public readonly role: string,
    public readonly headline: string,
    public readonly summary: string,
    public readonly location: string,
    public readonly links: readonly ContactChannel[],
  ) {}

  get initials() {
    return this.name
      .split(' ')
      .slice(0, 2)
      .map((part) => part[0]?.toUpperCase())
      .join('');
  }
}
