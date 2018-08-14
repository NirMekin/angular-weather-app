import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { HistoryComponent } from './history/history.component';


import { WeatherService } from './services/weather.service';
import { WeatherComponent } from './weather/weather.component';
import { ModalComponent } from './modal/modal.component';
import { HistoryTileComponent } from './history/history-tile/history-tile.component';



const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'history', component: HistoryComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SearchComponent,
    HistoryComponent,
    WeatherComponent,
    ModalComponent,
    HistoryTileComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
    )
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
