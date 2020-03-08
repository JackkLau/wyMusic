import {Component, OnInit, ViewChild} from '@angular/core';
import {HomeService} from '../../service/home.service';
import {Banner, HotTag, Singer, SongSheet} from '../../service/data-types/common.types';
import {NzCarouselComponent, NzCarouselComponentAsSource} from 'ng-zorro-antd';
import {SingerService} from '../../service/singer.service';
import {HomeResolveService} from './home-resolve.service';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  banners: Banner[];
  hotTags: HotTag[];
  songSheet: SongSheet[];
  singers: Singer[];
  carouselActiveIndex: number;
  @ViewChild(NzCarouselComponent, {static: true}) private nzCarousel: NzCarouselComponent;


  constructor(
              private homeResolveService: HomeResolveService,
              private route: ActivatedRoute) {
    this.route.data
      .pipe(
        map((res => res.homeData))
      )
      .subscribe(([banners, hotTags, songSheetList, singers]) => {
        this.banners = banners;
        this.hotTags = hotTags;
        this.songSheet = songSheetList;
        this.singers = singers;
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
