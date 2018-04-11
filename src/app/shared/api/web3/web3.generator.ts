import {Injectable} from '@angular/core';

declare let Web3: any;

@Injectable()
export class Web3Generator {
  web3: any;

  getWeb3() {
    if (this.web3 == null) {
      this.web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8540'));
    }
    return this.web3;
  }
}
