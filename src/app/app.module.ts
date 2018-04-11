import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Web3Service } from './shared/api/web3/web3.service';
import { Web3Generator } from './shared/api/web3/web3.generator';
import { ChainStateComponent } from './chain-state/chain-state.component';
import { HomeComponent } from './home/home.component';
import { routes } from './app.routes';
import { MaterialModule } from './shared/material.module';


@NgModule({
  declarations: [
    AppComponent,
    ChainStateComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true
    }),
    MaterialModule,
    BrowserModule,
  ],
  providers: [Web3Service, Web3Generator],
  bootstrap: [AppComponent]
})
export class AppModule {
}
