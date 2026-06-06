import {
  Directive,
  ElementRef,
  inject,
  input,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({
  selector: '[reveal]',
  standalone: true,
  host: {
    class: 'reveal',
    '[class.is-visible]': 'visible',
    '[class.reveal--left]': 'direction() === "left"',
    '[class.reveal--right]': 'direction() === "right"',
    '[class.reveal--scale]': 'direction() === "scale"',
    '[style.--reveal-delay]': 'delay() + "ms"',
  },
})
export class RevealOnScrollDirective implements OnInit, OnDestroy {
  delay = input(0, { alias: 'revealDelay', transform: Number });
  direction = input<'up' | 'left' | 'right' | 'scale'>('up', { alias: 'revealDirection' });

  visible = false;

  private observer?: IntersectionObserver;
  private el = inject(ElementRef<HTMLElement>);
  private platformId = inject(PLATFORM_ID);

  ngOnInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      this.visible = true;
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.visible = true;
      return;
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.visible = true;
          this.observer?.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    this.observer.observe(this.el.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
