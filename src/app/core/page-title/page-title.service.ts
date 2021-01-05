import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivationStart, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  private readonly prefixTitle = 'Demo';

  constructor(private router: Router, private titleService: Title) {}

  enablePageTitleListener() {
    return this.router.events.subscribe((event) => {
      if (event instanceof ActivationStart) {
        const data = event.snapshot.data;
        const title = this.prefixTitle + (data.title ? ` | ${data.title}` : '');
        this.titleService.setTitle(title);
      }
    });
  }
}
