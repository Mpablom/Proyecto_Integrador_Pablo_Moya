import { Component, OnInit } from '@angular/core';
import { persona } from '../../model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { trigger,style,transition,animate,state } from '@angular/animations';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent implements OnInit {

  persona: persona = new persona("","","");
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data});
  }
}