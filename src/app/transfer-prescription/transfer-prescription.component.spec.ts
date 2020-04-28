import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TransferPrescriptionComponent } from './transfer-prescription.component';

describe('TransferPrescriptionComponent', () => {
  let component: TransferPrescriptionComponent;
  let fixture: ComponentFixture<TransferPrescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferPrescriptionComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TransferPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
