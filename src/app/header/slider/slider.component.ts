import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        
        var slides = document.querySelectorAll('#slides li');
        var currentSlide = 0;
        var slideInterval = setInterval(nextSlide,2000);

        function nextSlide(){
            slides[currentSlide].className = '';
            currentSlide = (currentSlide+1)%slides.length;
            slides[currentSlide].className = 'showing';
        }
       
    }

}
