import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPublicationsComponent } from './add-publications.component';

describe('AddPublicationsComponent', () => {
  let component: AddPublicationsComponent;
  let fixture: ComponentFixture<AddPublicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPublicationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPublicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
