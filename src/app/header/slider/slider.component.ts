import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      
      var sliderContainer = document.getElementById('slider');
      var sliderCounter = 0;
      setInterval(function() {
        for (var i = 0; i <= 2; i++) {
          sliderContainer.getElementsByTagName('img')[i].style.opacity = "0";
        }
        sliderContainer.getElementsByTagName('img')[sliderCounter].style.opacity = "1";
        sliderCounter = sliderCounter + 1;
        if (sliderCounter > 2) {
          sliderCounter = 0;
        }
      }, 3000);
    
  }

}
