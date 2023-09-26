import { USE_MARKETS } from './markets';

export const findTVMarketFromAddress = (marketAddressString: string) => {
  const foundMarket = USE_MARKETS.find((market) => market.address.toBase58() === marketAddressString);
  return foundMarket ? foundMarket.name : 'SRM/USDC';
};
