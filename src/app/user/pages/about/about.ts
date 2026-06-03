import { Component } from '@angular/core';
import { ABOUT } from '../../data/about.data';
import { PROFILE } from '../../data/profile.data';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  about = ABOUT;
  profile = PROFILE;
}
