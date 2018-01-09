import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaybeYouKnowComponent } from './maybe-you-know.component';

describe('MaybeYouKnowComponent', () => {
  let component: MaybeYouKnowComponent;
  let fixture: ComponentFixture<MaybeYouKnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaybeYouKnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaybeYouKnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
