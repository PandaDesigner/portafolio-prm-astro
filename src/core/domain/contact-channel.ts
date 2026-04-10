export class ContactChannel {
  constructor(
    public readonly label: string,
    public readonly href: string,
    public readonly kind: 'email' | 'linkedin' | 'github' | 'calendar' | 'other',
  ) {}

  get isPrimary() {
    return this.kind === 'email' || this.kind === 'linkedin';
  }
}
