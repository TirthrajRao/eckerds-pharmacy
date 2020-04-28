import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RefillRequestComponent } from './refill-request.component';

describe('RefillRequestComponent', () => {
  let component: RefillRequestComponent;
  let fixture: ComponentFixture<RefillRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefillRequestComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RefillRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
