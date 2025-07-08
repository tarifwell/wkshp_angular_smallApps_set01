import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PicHeroComponent } from './pic-hero.component';

describe('PicHeroComponent', () => {
  let component: PicHeroComponent;
  let fixture: ComponentFixture<PicHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PicHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PicHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
