import { Component, OnInit, inject } from '@angular/core';
import { Navbar } from '../navbar/navbar';
import { Home } from '../home/home';
import { About } from '../about/about';
import { Projects } from '../projects/projects';
import { Contact } from '../contact/contact';
import { Footer } from '../../../common/footer/footer';
import { IntroSplash } from '../../../common/intro-splash/intro-splash';
import { SectionNavService } from '../../services/section-nav.service';

@Component({
  selector: 'app-portfolio-shell',
  standalone: true,
  imports: [IntroSplash, Navbar, Home, About, Projects, Contact, Footer],
  templateUrl: './portfolio-shell.html',
  styleUrl: './portfolio-shell.css',
  host: {
    '[class.page-ready]': 'pageReady',
  },
})
export class PortfolioShell implements OnInit {
  private sectionNav = inject(SectionNavService);

  pageReady = false;

  onIntroFinished(): void {
    this.pageReady = true;
  }

  ngOnInit(): void {
    this.sectionNav.migrateHashUrl();

    requestAnimationFrame(() => {
      const section = this.sectionNav.sectionFromUrl(this.sectionNav.currentPath());
      if (section !== 'home') {
        this.sectionNav.scrollTo(section);
      }
    });
  }
}
