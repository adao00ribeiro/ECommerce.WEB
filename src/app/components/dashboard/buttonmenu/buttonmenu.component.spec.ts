import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonmenuComponent } from './buttonmenu.component';

describe('ButtonmenuComponent', () => {
  let component: ButtonmenuComponent;
  let fixture: ComponentFixture<ButtonmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonmenuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ButtonmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
