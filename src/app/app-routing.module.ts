import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReposComponent } from './repos/repos.component';
import { HomeComponent } from './home/home.component';
import { ErrComponent } from './err/err.component';

const routes: Routes = [
  // { path: "", component: HomeComponent },
  { path: "", redirectTo: "Home", pathMatch: 'full' },
  { path: 'Images', component: ReposComponent },
  { path: 'Home', component: HomeComponent },
  { path: '**', component: ErrComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
