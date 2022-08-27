import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { QuestionsFetcherComponent } from './questions-fetcher/questions-fetcher.component';
import { InterviewParamsComponent } from './interview-params/interview-params.component';

const routes: Routes = [
  { path: 'questions', component: QuestionsFetcherComponent },
  { path: '', component: InterviewParamsComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
