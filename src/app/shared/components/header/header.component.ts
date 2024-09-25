import { Component, NgZone, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BannerComponent } from '../banner/banner.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    BannerComponent,
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, OnDestroy {

  animationTimeline: gsap.core.Timeline | null = null;
  seeMore = true;

  constructor(
    private ngZone: NgZone,
  ) { }

  ngOnInit(): void {
    this.ngZone.runOutsideAngular(() => {
      gsap.registerPlugin(ScrollTrigger);

        this.destroyTimelineAnimation();
        this.registerTimelineAnimation();
    });
  }

  registerTimelineAnimation(): void {
    this.animationTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: "body",
        start: "350px top",
        toggleActions: "play none none reverse",
        toggleClass: { targets: "app-header app-banner", className: "show" },
      }
    });
  }

  destroyTimelineAnimation(): void {
    if (this.animationTimeline) {
      this.animationTimeline.scrollTrigger?.kill(true);
      this.animationTimeline.kill();
      this.animationTimeline = null;
    }
  }

  ngOnDestroy(): void {
    this.destroyTimelineAnimation();
  }
}
