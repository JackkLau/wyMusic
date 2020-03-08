import { NgModule } from '@angular/core';
import { WyPlayerComponent } from './wy-player.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';



@NgModule({
  declarations: [WyPlayerComponent],
  exports: [
    WyPlayerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class WyPlayerModule { }
