const base = {
  id: 8453,
  name: 'Base Mainnet',
  network: 'Base Mainnet',
  nativeCurrency: {
    decimals: 18,
    name: 'ETH',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://mainnet.base.org'] },
    default: { http: ['https://mainnet.base.org'] },
  },
  blockExplorers: {
    etherscan: { name: 'basescan', url: 'https://basescan.org' },
    default: { name: 'basescan', url: 'https://basescan.org' },
  },
  
};

export default base;
