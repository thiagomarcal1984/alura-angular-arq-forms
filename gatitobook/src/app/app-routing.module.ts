import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    // pathMatch = full significa que a rota deve ser igual;
    // pathMatch = prefix significa que a rota pode ser só o prefixo.
    // Se for prefix, rotas em branco ("") podem causar loops infinitos.
    redirectTo: 'home', // Redireciona para a rota home
  },
  {
    path: 'home',
    loadChildren: ()=>import('./home/home.module').then((m) => m.HomeModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
