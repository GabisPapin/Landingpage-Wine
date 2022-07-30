import React from 'react';
import LandingPageContext from './LandingPageContext';

export default function LandingPageProvider(props) {
    const { children } = props;

    const context = {};

    return (
        <LandingPageContext.Provider value={ context } >
            { children }
        </LandingPageContext.Provider>
    )
}