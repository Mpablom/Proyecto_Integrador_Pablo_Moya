import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-formacion-academica',
  templateUrl: './formacion-academica.component.html',
  styleUrls: ['./formacion-academica.component.css']
})
export class FormacionAcademicaComponent implements OnInit {
  educacion: Educacion[] = [];
  constructor(private educacions : EducacionService, private tokenService : TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }
  cargarEducacion(): void{
    this.educacions.lista().subscribe(
      data =>{
        this.educacion = data;
      }
    )
  }
  delete(id?: number){
    if(id != undefined){
      this.educacions.delete(id).subscribe(
        data =>{
          this.cargarEducacion();
        },err =>{
          alert("No se pudo eliminar");
        }
      )
    }
  }
}
