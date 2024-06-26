import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClientiComponent } from './lista-clienti.component';

describe('ListaClientiComponent', () => {
  let component: ListaClientiComponent;
  let fixture: ComponentFixture<ListaClientiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaClientiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaClientiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
