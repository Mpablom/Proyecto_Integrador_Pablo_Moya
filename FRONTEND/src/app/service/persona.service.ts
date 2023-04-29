import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environment } from '../../environments/environment.prod'

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = `${environment.apiURL}persona/`;
  constructor(private https: HttpClient) { }
  public getPersona(): Observable<persona>{
    return this.https.get<persona>(`${this.URL}traer/perfil`);
  }
}
