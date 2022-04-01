import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProyectoPost } from '../models/proyectopost';
import { Tarea } from '../models/tarea';


@Injectable({
  providedIn: 'root'
})
export class TareasService {


  url = 'http://localhost:5000/api/tareas';

  constructor(private http: HttpClient) { }

  getTareasAll(){
    return this.http.get(this.url)
  }

  getTareaEspecific(IDusuario: any){
    return this.http.get(`${this.url}/especific?IDusuario=${IDusuario}`);
  }

  posttarea(tarea: Tarea){
    return this.http.post(`${this.url}`,tarea);
  }


/*   getProyectoEstado(){
    return this.http.get(`${this.url}/estados`) 
  }
  
  getProyecto(IDproyecto: any){
    return this.http.get(`${this.url}/proyecto?IDproyecto=${IDproyecto}`)
  }

  getProjectEspecific(IDusuario: any){
    return this.http.get(`${this.url}/especific?IDusuario=${IDusuario}`);
  }

  postproject(project: Tarea){
    return this.http.post(`${this.url}`,project);
  }

  putdataproject(IDproyecto: any,project: Tarea){
    return this.http.put(`${this.url}?IDproyecto=${IDproyecto}`,project);
  } */
  
}