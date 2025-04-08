import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionsFetcherComponent } from './questions-fetcher/questions-fetcher.component';
import { InterviewParamsComponent } from './interview-params/interview-params.component';
import { SummaryComponent } from './summary/summary.component';

export const appRoutes: Routes = [
  { path: 'questions', component: QuestionsFetcherComponent },
  { path: '', component: InterviewParamsComponent },
  { path: 'summary', component: SummaryComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
