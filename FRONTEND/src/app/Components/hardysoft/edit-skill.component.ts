import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/service/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent {
  skill: Skill= null;

  constructor(private skillS: SkillService, private activatedRouter: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.details(id).subscribe(
      data =>{
        this.skill = data;
      }, err =>{
        alert("Error al Modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.skillS.update(id, this.skill).subscribe(
      data => {
        alert("Skill actualizada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Falló al atualizar skill");
        this.router.navigate(['']);
      }
    )
  }
}
