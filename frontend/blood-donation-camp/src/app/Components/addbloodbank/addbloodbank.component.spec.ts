import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbloodbankComponent } from './addbloodbank.component';

describe('AddbloodbankComponent', () => {
  let component: AddbloodbankComponent;
  let fixture: ComponentFixture<AddbloodbankComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbloodbankComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbloodbankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
