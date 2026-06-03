import { Component, inject } from '@angular/core';
import { HOME } from '../../data/home.data';
import { PROFILE } from '../../data/profile.data';
import { SectionNavService } from '../../services/section-nav.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  private sectionNav = inject(SectionNavService);

  home = HOME;
  profile = PROFILE;
  experienceYears = PROFILE.yearsExperience + '+';

  goToProjects() {
    void this.sectionNav.goTo('projects');
  }

  goToContact() {
    void this.sectionNav.goTo('contact');
  }
}
