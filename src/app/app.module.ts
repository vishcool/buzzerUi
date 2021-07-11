import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SettingComponent } from './setting/setting.component';
import { PlayzoneComponent } from './playzone/playzone.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DescriptionComponent } from './setting/description/description.component';
import { ChartComponent } from './setting/chart/chart.component';
import { ProjectserviceService } from './_services/projectservice.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SettingComponent,
    PlayzoneComponent,
    DescriptionComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDatatableModule,
    HttpClientModule
  ],
  providers: [ProjectserviceService],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

  bootstrap: [AppComponent]
})
export class AppModule { }
