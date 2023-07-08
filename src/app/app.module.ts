import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpentdbQuizeProviderService } from './services/quize/opentdb-quize-provider.service';
import { QUIZE_PROVIDER_TOKEN } from './services/quize-provider-token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: QUIZE_PROVIDER_TOKEN, useClass: OpentdbQuizeProviderService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
