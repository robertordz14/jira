import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProyectoPost } from '../models/proyectopost';
import { ProyectoPut } from '../models/proyectoput';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  url = 'http://localhost:5000/api/proyectos';

  constructor(private http: HttpClient) { }

  getProyectoAll(){
    return this.http.get(this.url)
  }

  getProyectoEstado(){
    return this.http.get(`${this.url}/estados`) 
  }
  
  getProyecto(IDproyecto: any){
    return this.http.get(`${this.url}/proyecto?IDproyecto=${IDproyecto}`)
  }

  getProjectEspecific(IDusuario: any){
    return this.http.get(`${this.url}/especific?IDusuario=${IDusuario}`);
  }

  postproject(project: ProyectoPost){
    return this.http.post(`${this.url}`,project);
  }

  putdataproject(IDproyecto: any,project: ProyectoPut){
    return this.http.put(`${this.url}?IDproyecto=${IDproyecto}`,project);
  }
  
}