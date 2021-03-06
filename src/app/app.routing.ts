import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'usuarios',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'usuarios',
        loadChildren: './views/user/user.module#UserModule'
      },
      {
        path: 'habilidades',
        loadChildren: './views/skill/skill.module#SkillModule'
      },
      {
        path: 'atendimento',
        loadChildren: './views/atendimento/atendimento.module#AtendimentoModule'
      },
      {
        path: 'projetos',
        loadChildren: './views/projetos/projeto.module#ProjetoModule'
      },
     
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Usuarios'
    },
    children: [
      {
        path: 'usuarios',
        loadChildren: './views/user/user.module#UserModule'
      },
      {
        path: 'usuario-edicao',
        loadChildren: './views/user/user.module#UserModule'
      },
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
