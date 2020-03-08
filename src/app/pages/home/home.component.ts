import {Component, OnInit, ViewChild} from '@angular/core';
import {HomeService} from '../../service/home.service';
import {Banner} from '../../service/data-types/common.types';
import {NzCarouselComponent, NzCarouselComponentAsSource} from 'ng-zorro-antd';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {


  banners: Banner[];
  carouselActiveIndex: number;
  @ViewChild(NzCarouselComponent, {static: true}) private nzCarousel: NzCarouselComponent;


  constructor(private homeService: HomeService) {
    this.getBanners();
  }

  getBanners() {
    this.homeService.getBanners().subscribe(banners => {
      console.log(banners);
      this.banners = banners;
    });
  }

  ngOnInit() {
  }

  onBeforeChange({to}) {
    this.carouselActiveIndex = to;
  }

  onChangSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }
}
