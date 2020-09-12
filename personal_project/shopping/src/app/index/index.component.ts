import { Component, OnInit, HostListener } from '@angular/core';
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  public isShow:boolean
  topPosToStartShowing = 100



  //using host listner
  @HostListener('window:scroll')
  checkScroll() {

    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    // console.log('[scroll]', scrollPosition);
    
    if (scrollPosition >= this.topPosToStartShowing) {
      this.isShow = true;
    } else {
      this.isShow = false;
    }
  }
  
  navtab(){
    let header = document.getElementById("myDiv");
    let btns = header.getElementsByClassName("btn");
    for (var i =0; i < btns.length; i++){
      btns[i].addEventListener("click", function(){
        var current= document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active","");
        this.className += "active";
      });
    }
  }
  


  public configTop: SwiperConfigInterface = {
    a11y: true,
    direction: 'vertical',
    slidesPerView: 1,
    initialSlide: 1,
    speed: 300,
    centeredSlides:true,
    autoHeight: true,
    // height: 70,
    scrollbar:{
      // el:'swiper',
      hide: true,
      draggable: false,
    },
    // keyboard: true,
    autoplay: true,
  };
  public index;

  gotoTop(){
    window.scroll({
      top: 0,
      left:0,
      behavior: 'smooth'
    })
  }
  
  constructor() {

   }

  ngOnInit() {
  }

  // window.onscroll = function (){
  //   {scrollFunction()};
  // }

  

}
