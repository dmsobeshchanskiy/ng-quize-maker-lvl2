import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpentdbQuizeProviderService } from './services/opentdb-quize-provider.service';
import { QUIZE_PROVIDER_TOKEN } from './services/quize-provider-token';
import { QuizeComponent } from './quize/quize.component';
import { ResultsComponent } from './results/results.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';



@NgModule({
  declarations: [
    AppComponent,
    QuizeComponent,
    ResultsComponent,
    SearchCriteriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    { provide: QUIZE_PROVIDER_TOKEN, useClass: OpentdbQuizeProviderService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
