import { Component, OnInit } from '@angular/core';

declare var $ :any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.navbar-nav li a').on('click', function(event) {
        const target = $(this).attr('href').replace('#','');
        const topVal = document.getElementById(target).offsetTop;
        event.preventDefault();
        $('html, body').animate({
            scrollTop: topVal - 80
        }, 500);
    });
  }

}
