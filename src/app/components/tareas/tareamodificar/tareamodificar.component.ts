import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ChargesService } from 'src/app/services/charges.service';
import { ProjectService } from 'src/app/services/project.service';
import { RolesService } from 'src/app/services/roles.service';
import { UserService } from 'src/app/services/user.service';
import { TareasService } from 'src/app/services/tareas.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-tareamodificar',
  templateUrl: './tareamodificar.component.html',
  styleUrls: ['./tareamodificar.component.css']
})
export class TareamodificarComponent implements OnInit {
  IDusuario = localStorage.getItem('ID');
  IDrolLS = Number(localStorage.getItem('CARGO'));
  formulariotareas: FormGroup;
  listausuarios: any = [];
  listaestado: any = [];
  listaproyectos: any = [];
  listatareas: any=[];
  listaroles: any = [];
  listacargos: any = [];
  registro: any = [];
  IDusuario2 = '';
  IDproyecto = '';
  IDtareas: '';
  msg: any = [];
  userdata: any={
    IDrol: "",
    IDcargo: "",
    usuarioestado: "",
    usuariosalario: "",
  };
  projectdata: any={
    tareanombre: "",
    tareadescripcion: "",
    IDusuario: "",
    ID:"",
    IDestado: "",
  };

  constructor(
    private userservice: UserService,
    private router: Router,
    private authservice: AuthService,
    private projectservice: ProjectService,
    private tareaservice: TareasService

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
    this.tareaservice.getTareaEspecific(IDusuario2).subscribe((value) => {
      this.listatareas = value;
    });
  }


  data(){
    this.IDtareas = this.formulariotareas.value.IDtareas;
    this.tareaservice.getTarea(this.IDtareas).subscribe(value=>{
      this.projectdata = value;
      this.projectdata =  this.projectdata.rows;
      console.log(this.projectdata);
    })
  }

  crearform() {
    this.formulariotareas = new FormGroup({
      IDtareas: new FormControl('', Validators.required),
      tareadescripcion: new FormControl(''),
      IDestado: new FormControl(''),
      IDusuario: new FormControl(''),
    });
  }

  enviar() {
    this.registro = this.formulariotareas.value;
    this.IDtareas = this.formulariotareas.value.IDtareas;
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger',
      },
      buttonsStyling: false,
    });
    swalWithBootstrapButtons
      .fire({
        title: '¿Deseas modificar la tarea?',
        text: 'Este cambio no se puede revertir',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si',
        cancelButtonText: 'No',
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          this.tareaservice
            .putdatatarea(this.IDtareas, this.registro)
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
            'La tarea no se modifico',
            'warning'
          );
        }
      });
      console.log(this.registro);
      
  }
}

