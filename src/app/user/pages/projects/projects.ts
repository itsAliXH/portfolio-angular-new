import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../../common/directives/reveal-on-scroll.directive';
import { PROJECTS } from '../../data/projects.data';

@Component({
  selector: 'app-projects',
  imports: [RevealOnScrollDirective],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = PROJECTS;

  // Shows 01, 02, 03... in the project list
  getProjectNumber(index: number): string {
    const num = index + 1;
    return num < 10 ? '0' + num : String(num);
  }
}
