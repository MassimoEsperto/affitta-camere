import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MgFooterComponent } from '../componenti/sezioni/mg-footer/mg-footer.component';
import { MgHeaderComponent } from '../componenti/sezioni/mg-header/mg-header.component';
import { MgMobileNavComponent } from '../componenti/sezioni/mg-mobile-nav/mg-mobile-nav.component';
import { HomePageComponent } from '../pagine/home-page/home-page.component';
import { NgwWowService } from 'ngx-wow';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MgFooterComponent,
    MgHeaderComponent,
    MgMobileNavComponent,
    HomePageComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
}
