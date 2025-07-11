import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickHeroComponent } from './pick-hero.component';

describe('PickHeroComponent', () => {
  let component: PickHeroComponent;
  let fixture: ComponentFixture<PickHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
