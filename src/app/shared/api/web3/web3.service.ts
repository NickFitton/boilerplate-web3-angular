import {Injectable} from '@angular/core';
import Web3 from 'web3';
import {Web3Generator} from './web3.generator';
import {Callback} from 'web3/types';

@Injectable()
export class Web3Service {
  web3: Web3;

  constructor(private web3Generator: Web3Generator) {
    this.web3 = web3Generator.getWeb3();
  }

  getBlockNumber(callback?: Callback<number>): Promise<number> {
    return this.web3.eth.getBlockNumber(callback);
  }
}
