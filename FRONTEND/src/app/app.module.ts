import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './Components/banner/banner.component';
import { DatosInteresComponent } from './Components/datos-interes/datos-interes.component';
import { DatosPersonalesComponent } from './Components/datos-personales/datos-personales.component';
import { EncabezadoComponent } from './Components/encabezado/encabezado.component';
import { ExperienciaLaboralComponent } from './Components/experiencia-laboral/experiencia-laboral.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FormacionAcademicaComponent } from './Components/formacion-academica/formacion-academica.component';
import { HardysoftComponent } from './Components/hardysoft/hardysoft.component';
import { LogosComponent } from './Components/logos/logos.component';
import { ProyectosComponent } from './Components/proyectos/proyectos.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { FormsModule }   from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './Components/experiencia-laboral/new-experiencia.component';
import { EditExperienciaComponent } from './Components/experiencia-laboral/edit-experiencia.component';
import { NeweducacionComponent } from './Components/formacion-academica/neweducacion.component';
import { EditeducacionComponent } from './Components/formacion-academica/editeducacion.component';
import { initializeApp } from 'firebase/app';
import { provideFirebaseApp, getApp } from '@angular/fire/app';
import { environment } from '../environments/environment.prod';
import { EditSkillComponent } from './Components/hardysoft/edit-skill.component';
import { NewSkillComponent } from './Components/hardysoft/new-skill.component';
import { EditAcercaDeComponent } from './Components/encabezado/edit-acerca-de.component';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    BannerComponent,
    DatosInteresComponent,
    DatosPersonalesComponent,
    EncabezadoComponent,
    ExperienciaLaboralComponent,
    FooterComponent,
    FormacionAcademicaComponent,
    HardysoftComponent,
    LogosComponent,
    ProyectosComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent,
    EditAcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({}),
    BrowserAnimationsModule,
    MdbCheckboxModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideStorage(() => getStorage()),
  ],
  providers: [
    interceptorProvider,
    { provide: 'firebase', useFactory: () => getApp() },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
