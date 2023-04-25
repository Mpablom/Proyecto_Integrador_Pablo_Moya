import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  URL = environment.apiURL;
  constructor(private http: HttpClient) { }
  public findPersona(){
    return this.http.get(`${this.URL}/persona/traer/perfil`);
  }
}
