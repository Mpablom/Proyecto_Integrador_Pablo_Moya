import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { NewExperienciaComponent } from './Components/experiencia-laboral/new-experiencia.component';
import { EditExperienciaComponent } from './Components/experiencia-laboral/edit-experiencia.component';
import { NeweducacionComponent } from './Components/formacion-academica/neweducacion.component';
import { EditeducacionComponent } from './Components/formacion-academica/editeducacion.component';
import { NewSkillComponent } from './Components/hardysoft/new-skill.component';
import { EditSkillComponent } from './Components/hardysoft/edit-skill.component';
import { EditAcercaDeComponent } from './Components/encabezado/edit-acerca-de.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'login', component: LoginComponent},
  { path:'newexp', component: NewExperienciaComponent},
  { path:'editexp/:id', component: EditExperienciaComponent},
  { path:'nuevaedu', component:NeweducacionComponent},
  { path:'editedu/:id', component:EditeducacionComponent},
  { path:'newskill', component:NewSkillComponent},
  { path:'editskill/:id', component: EditSkillComponent},
  { path:'editaracercade/:id', component: EditAcercaDeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
