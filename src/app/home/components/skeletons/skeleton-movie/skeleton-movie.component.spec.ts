import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeletonMovieComponent } from './skeleton-movie.component';

describe('SkeletonMovieComponent', () => {
  let component: SkeletonMovieComponent;
  let fixture: ComponentFixture<SkeletonMovieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkeletonMovieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeletonMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
