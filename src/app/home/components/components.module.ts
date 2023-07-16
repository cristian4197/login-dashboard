import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MoviesComponent } from './movies/movies.component';
import { SeriesComponent } from './series/series.component';
import { AnimesComponent } from './animes/animes.component';
import { HeaderDashboardComponent } from './header-dashboard/header-dashboard.component';
import { RouterModule } from '@angular/router';
import { InfoHomeComponent } from './info-home/info-home.component';

const COMPONENTS = [
  HomeComponent,
  MoviesComponent,
  SeriesComponent,
  AnimesComponent,
  InfoHomeComponent,
  HeaderDashboardComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS  
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
