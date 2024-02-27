import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelrightComponent } from './panelright.component';

describe('PanelrightComponent', () => {
  let component: PanelrightComponent;
  let fixture: ComponentFixture<PanelrightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PanelrightComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PanelrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
