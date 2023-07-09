import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpentdbQuizProviderService } from './services/opentdb-quiz-provider.service';
import { QUIZ_PROVIDER_TOKEN } from './services/quiz-provider-token';
import { QuizComponent } from './quiz/quiz.component';
import { ResultsComponent } from './results/results.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { FormsModule } from '@angular/forms';
import { QuestionComponent } from './question/question.component';
import { BeautifyTextPipe } from './tools/beautify-text.pipe';
import { HotTrackingDirective } from './tools/hot-tracking.directive';



@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    ResultsComponent,
    SearchCriteriaComponent,
    QuestionComponent,
    BeautifyTextPipe,
    HotTrackingDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: QUIZ_PROVIDER_TOKEN, useClass: OpentdbQuizProviderService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
