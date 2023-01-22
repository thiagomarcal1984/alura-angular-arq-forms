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
    loadChildren: () => import('./home/home.module') // from home.module
      .then((m) => m.HomeModule), // import HomeModule
  },
  {
    path: 'animais',
    loadChildren: () => import('./animais/animais.module') // pack sem default.
      .then((m)=> m.AnimaisModule), // o then importa o módulo de fato.
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
