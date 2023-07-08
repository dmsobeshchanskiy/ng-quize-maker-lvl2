import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuizeComponent } from './quize/quize.component';
import { ResultsComponent } from './results/results.component';

const routes: Routes = [
  { path: 'quize', component: QuizeComponent },
  { path: 'results', component: ResultsComponent },
  { path: '**', redirectTo: 'quize' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
