import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ChargesService } from 'src/app/services/charges.service';
import { RolesService } from 'src/app/services/roles.service';
import { UserService } from 'src/app/services/user.service';
import { ProjectService } from 'src/app/services/project.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
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
    private proyectoService: ProjectService
    
  ) {}

  proyectoData: any={
    proyectonombre: "",
    proyectodescripcion: "",
    nombreestatus: "",
    nombre: "",
  };

  ngOnInit() {
    this.verProyectos();
  }


  verProyectos(){
    this.proyectoService.getProyectoAll().subscribe(value=> {
      this.proyectoData = value;
      this.proyectoData = this.proyectoData.rows;
    })
  }
}

