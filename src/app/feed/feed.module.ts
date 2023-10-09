import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { HeaderModule } from '../header/header.module';



@NgModule({
  declarations: [
    FeedComponent
  ],
  imports: [
    CommonModule,
    HeaderModule
  ]
})
export class FeedModule { }
