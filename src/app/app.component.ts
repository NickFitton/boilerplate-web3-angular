import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {Web3Service} from './shared/api/web3/web3.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  blockNumber: number;

  constructor(web3Service: Web3Service, public router: Router) {
    web3Service.getBlockNumber((err, res) => {
      if (err) {
        console.error(err);
      }
      console.log(res);
      if (!err) {
        this.blockNumber = res;
      }
    });
  }
}
