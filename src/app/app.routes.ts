import {Routes} from '@angular/router';
import {ChainStateComponent} from './chain-state/chain-state.component';
import {HomeComponent} from './home/home.component';

export const routes: Routes = [
  { path: 'chain', component: ChainStateComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: 'home' },
];
