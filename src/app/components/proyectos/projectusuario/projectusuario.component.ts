import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-projectusuario',
  templateUrl: './projectusuario.component.html',
  styleUrls: ['./projectusuario.component.css']
})

// @Injectable({
//   providedIn: 'root',
// })

export class ProjectusuarioComponent implements OnInit {
  IDusuario = Number(localStorage.getItem('ID'));
  SA: any = '';
  constructor(
    private proyectoService: ProjectService,
    private activateroute: ActivatedRoute,
    private router: Router
  ) { }

  proyectoData: any={
    proyectonombre: "",
    proyectodescripcion: "",
    nombreestatus: "",
    nombre: "",
  };

  ngOnInit() {
    this.verProyectoss(this.IDusuario);
  }

  verProyectoss(IDusuario: any){
    this.proyectoService.getProjectEspecific(IDusuario).subscribe(value=> {
      this.proyectoData = value;
      this.proyectoData = this.proyectoData.rows;
      this.SA = this.proyectoData.SA;

    })
  }
}