import { TareasService } from 'src/app/services/tareas.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tareasall',
  templateUrl: './tareasall.component.html',
  styleUrls: ['./tareasall.component.css']
})
export class TareasallComponent implements OnInit {
  IDusuario = localStorage.getItem('ID');
  IDrolLS = Number(localStorage.getItem('CARGO'));
  formulariouser: FormGroup;
  registro: any = [];
  listaroles: any = [];
  listacargos: any = [];
  msg: any = '';

  constructor(
    private router: Router,
    private authservice: AuthService,
    private tareaService: TareasService
    
  ) {}

  tareaData: any={
    proyectonombre: "",
    usuario: "",
    tareanombre: "",
    tareadescripcion: "",
    nombreestatus: "",
  };

  ngOnInit() {
    this.verTareas();
  }


  verTareas(){
    this.tareaService.getTareasAll().subscribe(value=> {
      this.tareaData = value;
      this.tareaData = this.tareaData.rows;
    })
  }
}

