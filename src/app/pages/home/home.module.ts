import { NgModule } from '@angular/core';
import { HomePage } from './home.component';
import { CommonModule } from '@angular/common';
import { AdvertisingModule } from 'src/app/components/advertising/advertising.module';
import { SearchBarModule } from 'src/app/components/search-bar/search-bar.module';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, AdvertisingModule, SearchBarModule],
})
export class HomeModule {}
