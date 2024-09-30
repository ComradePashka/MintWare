'use client';


import React, { useEffect } from 'react';

import { useWallet } from '@solana/wallet-adapter-react'; // Or @jup-ag/wallet-adapter;
import { init, syncProps } from '@jup-ag/terminal';
import "@jup-ag/terminal/css";

//import { Terminal } from '@jupyterlab/services';  // Example terminal service

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


    // const terminalRef = useRef(null);

    // useEffect(() => {
    //     const startTerminal = async () => {
    //     const session = await Terminal.startNew(); // Starting Jupyter terminal
    //     const widget = new Terminal(session);      // Create terminal widget

    //     // Attach the widget to the DOM
    //     terminalRef.current.appendChild(widget.node);

    //     return () => {
    //         widget.dispose();
    //         session.shutdown();
    //     };
    //     };
    //     startTerminal();
    // }, []);

    return <div id="integrated-terminal"></div>;
};

export default JupiterTerminalWidget;