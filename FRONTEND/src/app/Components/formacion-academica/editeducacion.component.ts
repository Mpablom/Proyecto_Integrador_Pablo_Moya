import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editeducacion',
  templateUrl: './editeducacion.component.html',
  styleUrls: ['./editeducacion.component.css']
})
export class EditeducacionComponent implements OnInit{
  educacion: Educacion = null;

  constructor(private educacions: EducacionService, private activatedRoute : ActivatedRoute, private router: Router ){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacions.details(id).subscribe(
      data =>{
        this.educacion = data;
      }, err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate():void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.educacions.update(id, this.educacion).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert("Error al Modificar la educación");
        this.router.navigate(['']);
      }
    )
  }
}
