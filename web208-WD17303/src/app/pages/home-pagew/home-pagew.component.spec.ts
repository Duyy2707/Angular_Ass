import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagewComponent } from './home-pagew.component';

describe('HomePagewComponent', () => {
  let component: HomePagewComponent;
  let fixture: ComponentFixture<HomePagewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePagewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePagewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
