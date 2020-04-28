import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FranchiseeComponent } from './franchisee.component';

describe('FranchiseeComponent', () => {
  let component: FranchiseeComponent;
  let fixture: ComponentFixture<FranchiseeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FranchiseeComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FranchiseeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
