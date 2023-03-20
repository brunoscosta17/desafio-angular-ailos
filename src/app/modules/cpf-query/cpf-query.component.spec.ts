import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpfQueryComponent } from './cpf-query.component';

describe('CpfQueryComponent', () => {
  let component: CpfQueryComponent;
  let fixture: ComponentFixture<CpfQueryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpfQueryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpfQueryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
