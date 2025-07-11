import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHerosComponent } from './show-heros.component';

describe('ShowHerosComponent', () => {
  let component: ShowHerosComponent;
  let fixture: ComponentFixture<ShowHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowHerosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
