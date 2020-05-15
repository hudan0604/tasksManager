import { Component, OnInit, Input, AfterViewInit, ViewChild, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'tm-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  navbarPosition: any;
  @ViewChild('nav', {static: false}) navBar: ElementRef<HTMLElement>;

  isScrolled = false;
  constructor() {}

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
    handleScroll() {
      const windowScroll = window.pageYOffset;
      this.isScrolled = windowScroll > 80 ? true : false;
    }
}
