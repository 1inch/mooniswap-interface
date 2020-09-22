import { createAction, createAsyncThunk } from '@reduxjs/toolkit';
import { ChainId, Token } from '@uniswap/sdk';
import { getCrowdsaleContract } from '../../utils';
import { Contract } from '@ethersproject/contracts';
import { Web3Provider } from '@ethersproject/providers';

export enum Field {
  INPUT = 'INPUT',
  OUTPUT = 'OUTPUT',
}

export const selectCurrency = createAction<{ field: Field; currencyId: string }>('selectCurrency');
export const switchCurrencies = createAction<void>('switchCurrencies');
export const typeInput = createAction<{ field: Field; typedValue: string }>('typeInput');
export const receiveOutput = createAction<{ outputValue: string }>('receiveOutput');
export const replaceInvestState = createAction<{
  field: Field;
  typedValue: string;
  inputCurrencyId?: string;
  outputCurrencyId?: string;
}>('replaceInvestState');

async function useCoinList(
  chainId: ChainId,
  account: string,
  library: Web3Provider,
): Promise<Token[]> {
  const contract: Contract | null = getCrowdsaleContract(library, account);

  const counter = await contract.coinCounter();
  let coins: Token[] = [];
  for (let i = 1; i < counter; i++) {
    const coin = await contract.coin(i);
    const coinData = await contract.coinData(i);
    coins[i - 1] = new Token(chainId, coinData.coinAddress, coin.decimals, coin.symbol, coin.name);
  }
  return coins;
}

export const getCoinList = createAsyncThunk<Token[], any>(
  'invest/receiveCoinList',
  ({ chainId, account, library }) => {
    return useCoinList(chainId, account, library);
  },
);
