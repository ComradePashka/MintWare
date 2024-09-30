'use client';

import React, { useEffect } from 'react';

import { useWallet } from '@solana/wallet-adapter-react'; // Or @jup-ag/wallet-adapter;

const JupiterTerminalWidget = () => {
    const walletContextState = useWallet()

    useEffect(() => {
        window.Jupiter.init({ 
            displayMode: 'integrated',
            integratedTargetId: 'integrated-terminal',
            endpoint: 'https://api.mainnet-beta.solana.com',
            enableWalletPassthrough: true 
        });
        // init({
        // displayMode: 'integrated',
        // integratedTargetId: 'integrated-terminal',
        // endpoint: 'https://api.mainnet-beta.solana.com',
        // });
    }, []);
    
    useEffect(() => {
        if (!window.Jupiter.syncProps) return;
        window.Jupiter.syncProps({ passthroughWalletContextState: walletContextState });
//        syncProps({ passthroughWalletContextState: walletContextState })
    }, [walletContextState.connected]);

    return <div id="integrated-terminal"></div>;
};

export default JupiterTerminalWidget;