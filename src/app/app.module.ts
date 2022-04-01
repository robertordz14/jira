import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { EliminarusuarioComponent } from './components/user/eliminarusuario/eliminarusuario.component';
import { ModificarcontrasenyaComponent } from './components/user/modificarcontrasenya/modificarcontrasenya.component';
import { ModificarusuarioComponent } from './components/user/modificarusuario/modificarusuario.component';
import { AuthService } from './services/auth.service';
import { ModificarcargorolComponent } from './components/user/modificarcargorol/modificarcargorol.component';
import { AltausuarioComponent } from './components/user/altausuario/altausuario.component';
import { ProjectComponent } from './components/proyectos/project/project.component';
import { ModificarprojectComponent } from './components/proyectos/modificarproject/modificarproject.component';
import { EliminarprojectComponent } from './components/proyectos/eliminarproject/eliminarproject.component';
import { ProjectusuarioComponent } from './components/proyectos/projectusuario/projectusuario.component';
import { ProjectnuevoComponent } from './components/proyectos/projectnuevo/projectnuevo.component';
import { TareasallComponent } from './components/tareas/tareasall/tareasall.component';
import { TareausuarioComponent } from './components/tareas/tareausuario/tareausuario.component';
import { TareanuevaComponent } from './components/tareas/tareanueva/tareanueva.component';
import { TareamodificarComponent } from './components/tareas/tareamodificar/tareamodificar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    EliminarusuarioComponent,
    ModificarcontrasenyaComponent,
    ModificarusuarioComponent,
    ModificarcargorolComponent,
    AltausuarioComponent,
    ProjectComponent,
    ModificarprojectComponent,
    EliminarprojectComponent,
    ProjectusuarioComponent,
    ProjectnuevoComponent,
    TareasallComponent,
    TareausuarioComponent,
    TareanuevaComponent,
    TareamodificarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
