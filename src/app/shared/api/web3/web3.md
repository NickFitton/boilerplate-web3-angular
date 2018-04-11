# Using Web3 with TypeScript

I have found it very difficult using web3 with TypeScript, mainly the issue was with importing it for use.\
My current solution is to have a file named `web3.generator.ts`. It instantiates web3 like so:
```typescript
declare let Web3: any;
```
This pulls Web3 from a browser plugin such as [MetaMask](https://metamask.io), avoiding the issues with getting web3 from node-modules.

I then retrieve this with the `web3.service.ts` which wraps it as a Web3 object instead of an `any`, this is ensure type.
