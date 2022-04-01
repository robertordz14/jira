import { Component, OnInit } from '@angular/core';
import { TareasService } from 'src/app/services/tareas.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tareausuario',
  templateUrl: './tareausuario.component.html',
  styleUrls: ['./tareausuario.component.css']
})
export class TareausuarioComponent implements OnInit {
  IDusuario = Number(localStorage.getItem('ID'));
  SA: any = '';
  constructor(
    private tareaService: TareasService,
    private activateroute: ActivatedRoute,
    private router: Router
  ) { }

  tareaData: any={
    proyectonombre: "",
    usuario: "",
    tareanombre: "",
    tareadescripcion: "",
    nombreestatus: "",
  };

  ngOnInit() {
    this.verTareas(this.IDusuario);
  }

  verTareas(IDusuario: any){
    this.tareaService.getTareaEspecific(IDusuario).subscribe(value=> {
      this.tareaData = value;
      this.tareaData = this.tareaData.rows;
      this.SA = this.tareaData.SA;

    })
  }
}