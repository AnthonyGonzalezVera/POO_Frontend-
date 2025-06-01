import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationForm1Component } from './notification-form1.component';

describe('NotificationForm1Component', () => {
  let component: NotificationForm1Component;
  let fixture: ComponentFixture<NotificationForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotificationForm1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotificationForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
