import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/observable.model';
import { PersonasService } from '../personas.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  arrPersonas!: Persona[];
  constructor(private personaService: PersonasService) { }

  ngOnInit(): void {
    this.personaService.getPersonas$().subscribe(
      personas=>{
        this.arrPersonas=personas;
      }
    );
    console.log(this.arrPersonas);
  }

}
