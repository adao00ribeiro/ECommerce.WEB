import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderdashboardComponent } from './headerdashboard.component';

describe('HeaderdashboardComponent', () => {
  let component: HeaderdashboardComponent;
  let fixture: ComponentFixture<HeaderdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderdashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
