import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ChargesService } from 'src/app/services/charges.service';
import { ProjectService } from 'src/app/services/project.service';
import { RolesService } from 'src/app/services/roles.service';
import { UserService } from 'src/app/services/user.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-modificarproject',
  templateUrl: './modificarproject.component.html',
  styleUrls: ['./modificarproject.component.css']
})
export class ModificarprojectComponent implements OnInit {
  IDusuario = localStorage.getItem('ID');
  IDrolLS = Number(localStorage.getItem('CARGO'));
  formularioproyecto: FormGroup;
  listausuarios: any = [];
  listaestado: any = [];
  listaproyectos: any = [];
  listaroles: any = [];
  listacargos: any = [];
  registro: any = [];
  IDusuario2 = '';
  IDproyecto = '';
  msg: any = [];
  userdata: any={
    IDrol: "",
    IDcargo: "",
    usuarioestado: "",
    usuariosalario: "",
  };
  projectdata: any={
    proyectonombre: "",
    proyectodescripcion: "",
    IDusuario: "",
    ID:"",
    IDestado: "",
  };

  constructor(
    private userservice: UserService,
    private router: Router,
    private authservice: AuthService,
    private projectservice: ProjectService

  ) {}

  ngOnInit(): void {
    this.getusers();
    this.getproyectos(this.IDusuario);
    this.crearform();
    this.getestado();
  }


  getusers() {
    this.userservice.getuserall().subscribe((value) => {
      this.listausuarios = value;
    });
  }

  getestado() {
    this.projectservice.getProyectoEstado().subscribe((value) => {
      this.listaestado = value;
    });
  }

  getproyectos(IDusuario2: any) {
    this.projectservice.getProjectEspecific(IDusuario2).subscribe((value) => {
      this.listaproyectos = value;
    });
  }


  data(){
    this.IDproyecto = this.formularioproyecto.value.IDproyecto;
    this.projectservice.getProyecto(this.IDproyecto).subscribe(value=>{
      this.projectdata = value;
      this.projectdata =  this.projectdata.rows;
      console.log(this.projectdata);
    })
  }

  crearform() {
    this.formularioproyecto = new FormGroup({
      IDproyecto: new FormControl('', Validators.required),
      proyectodescripcion: new FormControl(''),
      IDestado: new FormControl(''),
      IDusuario: new FormControl(''),
    });
  }

  enviar() {
    this.registro = this.formularioproyecto.value;
    this.IDproyecto = this.formularioproyecto.value.IDproyecto;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: '¿Deseas modificar el proyecto?',
        text: 'Este cambio no se puede revertir',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.projectservice
            .putdataproject(this.IDproyecto, this.registro)
            .subscribe((value) => {
              this.msg = value;
              if (this.msg.err == false) {
                swalWithBootstrapButtons.fire(this.msg.msg, '', 'success');
                window.location.reload();
              }
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'El proyecto no se modifico',
            'warning'
          );
        }
      });
      console.log(this.registro);
      
  }
}
