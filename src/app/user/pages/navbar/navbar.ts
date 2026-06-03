import { Component, HostListener, OnInit, inject } from '@angular/core';
import { SectionNavService, SectionId } from '../../services/section-nav.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css'],
})
export class Navbar implements OnInit {
  private sectionNav = inject(SectionNavService);

  isMenuOpen = false;
  isScrolled = false;
  activeSection: SectionId = 'home';

  ngOnInit() {
    this.activeSection = this.sectionNav.sectionFromUrl(this.sectionNav.currentPath());
  }

  @HostListener('window:scroll')
  onScroll() {
    this.isScrolled = window.scrollY > 40;
    this.setActiveSectionFromScroll();
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    document.body.style.overflow = this.isMenuOpen ? 'hidden' : '';
  }

  closeMenu() {
    this.isMenuOpen = false;
    document.body.style.overflow = '';
  }

  scrollTo(sectionId: SectionId) {
    this.sectionNav.goTo(sectionId);
    this.activeSection = sectionId;
    this.closeMenu();
  }

  isActive(sectionId: string) {
    return this.activeSection === sectionId;
  }

  private setActiveSectionFromScroll() {
    if (this.sectionNav.isProgrammaticScroll()) {
      return;
    }

    const sectionIds: SectionId[] = ['home', 'about', 'projects', 'contact'];
    let current: SectionId = 'home';
    const scrollY = window.scrollY + 100;

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= scrollY) {
        current = id;
      }
    }

    if (current !== this.activeSection) {
      this.activeSection = current;
      void this.sectionNav.syncUrlFromScroll(current);
    }
  }
}
