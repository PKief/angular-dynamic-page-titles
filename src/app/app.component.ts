import { Component, OnInit } from '@angular/core';
import { PageTitleService } from './core/page-title/page-title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private pageTitleService: PageTitleService) {}

  ngOnInit() {
    this.pageTitleService.enablePageTitleListener();
  }
}
