import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  public formulario !: FormGroup;
  constructor(private personaService:PersonasService) { 
    this.formulario= new FormGroup(
      {
        nombre:new FormControl(),
        apellido:new FormControl(),
        empresa:new FormControl(),
        telefono:new FormControl(),
        email:new FormControl()
      }
    );
  }

  ngOnInit(): void {
  }
  onSubmit(){
    this.personaService.agregarPersona(this.formulario.value);
  }
}
