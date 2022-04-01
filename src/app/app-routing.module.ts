import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EliminarusuarioComponent } from './components/user/eliminarusuario/eliminarusuario.component';
import { ModificarcontrasenyaComponent } from './components/user/modificarcontrasenya/modificarcontrasenya.component'
import { ModificarusuarioComponent } from './components/user/modificarusuario/modificarusuario.component';
import { NavbarComponent } from 'src/app/components/header/navbar/navbar.component';
import { ModificarcargorolComponent } from 'src/app/components/user/modificarcargorol/modificarcargorol.component';
import { AltausuarioComponent } from 'src/app/components/user/altausuario/altausuario.component'
import { ProjectComponent } from './components/proyectos/project/project.component';
import { ProjectusuarioComponent } from './components/proyectos/projectusuario/projectusuario.component';
import { ModificarprojectComponent } from './components/proyectos/modificarproject/modificarproject.component';
import { ProjectnuevoComponent } from './components/proyectos/projectnuevo/projectnuevo.component';
import { TareasallComponent } from './components/tareas/tareasall/tareasall.component';
import { TareausuarioComponent } from './components/tareas/tareausuario/tareausuario.component';
import { TareanuevaComponent } from './components/tareas/tareanueva/tareanueva.component';
import { TareamodificarComponent } from './components/tareas/tareamodificar/tareamodificar.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'auth', loadChildren: () => import ('./auth/auth.module').then(x => x.AuthModule) },
  { path: 'navbar',component: NavbarComponent,pathMatch: 'full' },
  { path: 'deleteuser',component: EliminarusuarioComponent,pathMatch: 'full' },
  { path: 'changepass',component: ModificarcontrasenyaComponent,pathMatch:'full' },
  { path: 'changeuserdata',component: ModificarusuarioComponent,pathMatch: 'full' },
  { path: 'changerole',component: ModificarcargorolComponent,pathMatch: 'full' },
  { path: 'register',component: AltausuarioComponent,pathMatch: 'full'},
  {path: 'proyectoview', component: ProjectComponent, pathMatch:'full'},
  {path: 'proyectoespecifico', component: ProjectusuarioComponent, pathMatch:'full'},
  {path: 'proyectomodificar', component:   ModificarprojectComponent, pathMatch:'full'},
  {path: 'proyectonuevo', component:   ProjectnuevoComponent, pathMatch:'full'},
  {path: 'tareaall', component:   TareasallComponent, pathMatch:'full'},
  {path: 'tareausuario', component:   TareausuarioComponent, pathMatch:'full'},
  {path: 'tareanueva', component:   TareanuevaComponent, pathMatch:'full'},
  {path: 'tareamodificar', component:   TareamodificarComponent, pathMatch:'full'},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
