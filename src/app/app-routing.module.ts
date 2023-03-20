import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full' },
  // { path: '', component: CpfQueryComponent },
  // { path: '', loadChildren: () => import('./modules/cpf-query/cpf-query.module').then(m => m.CpfQueryModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
