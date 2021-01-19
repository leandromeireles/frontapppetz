import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCadastrarEditarComponent } from './pet-cadastrar-editar.component';

describe('ItemCadastrarEditarComponent', () => {
  let component: PetCadastrarEditarComponent;
  let fixture: ComponentFixture<PetCadastrarEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetCadastrarEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetCadastrarEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
