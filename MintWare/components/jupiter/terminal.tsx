'use client';

import React, { useEffect } from 'react';

import { useWallet } from '@solana/wallet-adapter-react'; // Or @jup-ag/wallet-adapter;
import { init, syncProps } from '@jup-ag/terminal';
import "@jup-ag/terminal/css";

const JupiterTerminalWidget = () => {
    const walletContextState = useWallet()

    useEffect(() => {
        init({
        displayMode: 'integrated',
        integratedTargetId: 'integrated-terminal',
        endpoint: 'https://api.mainnet-beta.solana.com',
        });
    }, []);
    
    useEffect(() => {
        syncProps({ passthroughWalletContextState: walletContextState })
    }, [walletContextState]);

    return <div id="integrated-terminal"></div>;
};

export default JupiterTerminalWidget;