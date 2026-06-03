import { Location } from '@angular/common';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

export type SectionId = 'home' | 'about' | 'projects' | 'contact';

const VALID_SECTIONS: SectionId[] = ['home', 'about', 'projects', 'contact'];

@Injectable({ providedIn: 'root' })
export class SectionNavService {
  private router = inject(Router);
  private location = inject(Location);
  private programmaticScrollUntil = 0;

  sectionToCommands(section: SectionId): string[] {
    return section === 'home' ? ['/portfolio'] : ['/portfolio', section];
  }

  sectionToPath(section: SectionId): string {
    return section === 'home' ? '/portfolio' : `/portfolio/${section}`;
  }

  sectionFromUrl(url: string): SectionId {
    if (url.includes('/contact')) return 'contact';
    if (url.includes('/projects')) return 'projects';
    if (url.includes('/about')) return 'about';
    return 'home';
  }

  currentPath(): string {
    return this.location.path();
  }

  isProgrammaticScroll(): boolean {
    return Date.now() < this.programmaticScrollUntil;
  }

  scrollTo(section: SectionId): void {
    this.programmaticScrollUntil = Date.now() + 900;
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  /** Update the address bar while scrolling — does not trigger router navigation. */
  syncUrlFromScroll(section: SectionId): void {
    const target = this.sectionToPath(section);
    if (this.currentPath() === target) {
      return;
    }
    this.location.replaceState(target);
  }

  async goTo(section: SectionId): Promise<void> {
    const target = this.sectionToPath(section);
    if (this.currentPath() === target) {
      this.scrollTo(section);
      return;
    }
    await this.router.navigate(this.sectionToCommands(section));
    this.scrollTo(section);
  }

  /** Replace legacy hash URLs (e.g. /portfolio#contact) with path routes. */
  migrateHashUrl(): void {
    const hash = window.location.hash.replace('#', '');
    if (!hash || !VALID_SECTIONS.includes(hash as SectionId)) {
      return;
    }
    const section = hash as SectionId;
    void this.router.navigate(this.sectionToCommands(section), { replaceUrl: true });
  }
}
