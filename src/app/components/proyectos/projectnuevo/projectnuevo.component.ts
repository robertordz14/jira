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
  selector: 'app-projectnuevo',
  templateUrl: './projectnuevo.component.html',
  styleUrls: ['./projectnuevo.component.css']
})
export class ProjectnuevoComponent implements OnInit {

  IDusuario = localStorage.getItem('ID');
  IDrolLS = Number(localStorage.getItem('CARGO'));
  formularioproject: FormGroup;
  registro: any = [];
  listaroles: any = [];
  listacargos: any = [];
  listaestado: any = [];
  listausuarios: any = [];
  msg: any = '';


  constructor(
    private userservice: UserService,
    private roleservices: RolesService,
    private chargesservie: ChargesService,
    private router: Router,
    private authservice: AuthService,
    private projectservice: ProjectService
    
  ) {}

  ngOnInit(): void {
    this.validardatos();
    this.createform();
    this.getusers();
    this.getrole();
    this.getcharge();
  }

  validardatos() {
    if (this.IDusuario == null || this.IDrolLS != 1) {
      this.authservice.logout();
      this.router.navigate(['/auth/login']);
    }
  }

  getusers() {
    this.userservice.getuserACT().subscribe((value) => {
      this.listausuarios = value;
    });
  }

  getrole() {
    this.roleservices.getrolesACT().subscribe((value) => {
      this.listaroles = value;
    });
  }

  getcharge() {
    this.chargesservie.getcargosACT().subscribe((value) => {
      this.listacargos = value;
    });
  }
 
  createform() {
    this.formularioproject = new FormGroup({
      IDusuario: new FormControl('', Validators.required),
      proyectonombre: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
      proyectodescripcion: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z ]*$'),
      ]),
    });
  }

  enviar() {
    this.registro = this.formularioproject.value;
    this.projectservice.postproject(this.registro).subscribe((value) => {
      this.msg = value;
      if (this.msg.err == true) {
        Swal.fire({
          title: 'Error',
          text: this.msg.msg,
          icon: 'error',
          timer: 4000,
        });
      } else {
        Swal.fire({
          title: 'Exito',
          text: this.msg.msg,
          icon: 'success',
          timer: 4000,
        });
        this.ngOnInit();
      }
    });
  }
}
