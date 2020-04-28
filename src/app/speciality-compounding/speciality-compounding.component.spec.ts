import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecialityCompoundingComponent } from './speciality-compounding.component';

describe('SpecialityCompoundingComponent', () => {
  let component: SpecialityCompoundingComponent;
  let fixture: ComponentFixture<SpecialityCompoundingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialityCompoundingComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialityCompoundingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
