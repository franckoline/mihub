import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ProgramsComponent } from './pages/programs/programs.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  
  { path: '', component: WelcomeComponent },
  { path: 'programs', component: ProgramsComponent },
    
  // otherwise redirect to home
  {path: '', redirectTo: '', pathMatch: 'full'},

    // page not found
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
