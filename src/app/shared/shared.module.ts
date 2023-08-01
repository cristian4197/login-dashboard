import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './components/loader/loader.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { SearchContentComponent } from './components/search-content/search-content.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonScrollTopComponent } from './components/button-scroll-top/button-scroll-top.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SkeletonCardListComponent } from './components/skeletons/skeleton-card-list/skeleton-card-list.component';
import { SkeletonCarouselComponent } from './components/skeletons/skeleton-carousel/skeleton-carousel.component';
import { SkeletonModule } from 'primeng/skeleton';

const COMPONENTS = [
  LoaderComponent,
  CardListComponent,
  SearchContentComponent,
  ButtonScrollTopComponent,
  CarouselComponent,
  SkeletonCardListComponent,
  SkeletonCarouselComponent
]


@NgModule({
  declarations: [
    ...COMPONENTS    
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SkeletonModule
  ],
  exports: [
    ...COMPONENTS
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
