import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'back-to-top',
  standalone: true,
  imports: [],
  templateUrl: './back-to-top.component.html',
  styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent implements OnInit {

  
  constructor() { }

  ngOnInit(): void {
  }

  gotoTop() {
    window.scroll({ 
      top: 0, 
      left: 0, 
      behavior: 'smooth' 
    });
  }
}
