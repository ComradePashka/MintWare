'use client';

import { ReactNode } from 'react';
import './../../app/global.css';

export function DevWrapper({
    children
    } : {
    children: ReactNode
}
) {
    //TODO: remove after tests
    // const EV = process.env.NEXT_PUBLIC_NODE_ENV ?? process.env.NODE_ENV
    // console.log('NODE_ENV', process.env.NODE_ENV)
    // console.log('NODE + _ENV', process.env['NODE' + '_ENV'])
    // console.log('NEXT_PUBLIC_NODE_ENV', process.env.NEXT_PUBLIC_NODE_ENV)
    // console.log('EV', EV)
    return (process.env.NEXT_PUBLIC_NODE_ENV ?? process.env.NODE_ENV) == 'development' ? (
    <div className='dev-wrapper'>
        {children}
    </div>
    ) : <></>
}

