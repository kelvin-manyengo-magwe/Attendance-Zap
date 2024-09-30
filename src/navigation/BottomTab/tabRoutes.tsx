import React from 'react';
import { Scanner } from '../../screens/Scanner/Scanner';
import Settings from '../../screens/Settings/Settings';
import { HomePage } from '../../screens/HomePage/HomePage';



export type TabParamList = {
    HomePage: undefined,
    Scanner: undefined,
    Settings: undefined,

};


export const tabRoutes = [
    {
      name: 'HomePage',
      component: HomePage
    },
    {
      name: 'Scanner',
      component: Scanner
    },
    {
      name: 'Settings',
      component: Settings
    }
];
