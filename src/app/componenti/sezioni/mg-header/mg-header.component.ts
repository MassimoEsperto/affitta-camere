import { Component, HostListener } from '@angular/core';
import { BackToTopComponent } from '../../elementi/back-to-top/back-to-top.component';
import { MenuLateraleComponent } from '../menu-laterale/menu-laterale.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mg-header',
  standalone: true,
  imports: [
    BackToTopComponent,
    MenuLateraleComponent,
    CommonModule
  ],
  templateUrl: './mg-header.component.html',
  styleUrl: './mg-header.component.scss'
})
export class MgHeaderComponent {

  posizione: number = 0
  lastScroll: number = 0
  product: string = ""

  @HostListener("window:scroll", []) onWindowScroll() {

    let scroll = window.pageYOffset;


    if (scroll > 45 && scroll < 800) {

      this.posizione = window.innerWidth > 992 ? 1 : 2

    } else if (scroll > 45 && scroll < this.lastScroll) {

      this.posizione = window.innerWidth > 992 ? 1 : 2

    } else if (scroll > 45 && scroll > this.lastScroll) {

      this.posizione = 3

    } else {

      this.posizione = 0

    }

    this.lastScroll = scroll;
  }


  constructor() { }


}

