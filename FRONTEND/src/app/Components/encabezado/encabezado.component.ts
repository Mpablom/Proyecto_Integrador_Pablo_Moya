import { Component, OnInit } from '@angular/core';
import { persona } from '../../model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css'],
})
export class EncabezadoComponent implements OnInit {

  persona: persona = null;
  constructor(public personaService: PersonaService, private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else{
      this.isLogged = false;
    }
  }
  cargarPersona(){
    this.personaService.details(1).subscribe(
      data =>{
        this.persona=data
      }
    )
  }
}
