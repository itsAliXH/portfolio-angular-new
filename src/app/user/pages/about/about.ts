import { Component } from '@angular/core';
import { RevealOnScrollDirective } from '../../../common/directives/reveal-on-scroll.directive';
import { ABOUT } from '../../data/about.data';
import { PROFILE } from '../../data/profile.data';

@Component({
  selector: 'app-about',
  imports: [RevealOnScrollDirective],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  about = ABOUT;
  profile = PROFILE;
}
