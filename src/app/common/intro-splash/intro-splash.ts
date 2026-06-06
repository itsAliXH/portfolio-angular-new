import { isPlatformBrowser } from '@angular/common';
import {
  Component,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  inject,
  output,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-intro-splash',
  standalone: true,
  templateUrl: './intro-splash.html',
  styleUrl: './intro-splash.css',
})
export class IntroSplash implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);

  finished = output<void>();

  showIntro = signal(isPlatformBrowser(this.platformId));
  exiting = signal(false);

  private exitTimer?: ReturnType<typeof setTimeout>;
  private hideTimer?: ReturnType<typeof setTimeout>;

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.showIntro.set(false);
      this.finished.emit();
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.showIntro.set(false);
      this.finished.emit();
      return;
    }

    document.body.style.overflow = 'hidden';

    this.exitTimer = setTimeout(() => {
      this.exiting.set(true);
    }, 2000);

    this.hideTimer = setTimeout(() => {
      this.showIntro.set(false);
      document.body.style.overflow = '';
      this.finished.emit();
    }, 3000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.exitTimer);
    clearTimeout(this.hideTimer);
    if (isPlatformBrowser(this.platformId)) {
      document.body.style.overflow = '';
    }
  }
}
