import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './parent-comp/child-comp/child-comp.component';
import { LoginComponent } from './main-layout/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent, pathMatch:'full'},
  {path: '', component: LoginComponent},
  {path: 'parentComp', component: ParentCompComponent},
  {path: 'childComp', component: ChildCompComponent},
  {path: '**', component: LoginComponent, pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
