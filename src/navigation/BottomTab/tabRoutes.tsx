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
      component: HomePage,
      label: 'Home',
      icon: 'home'
    },
    {
      name: 'Scanner',
      component: Scanner,
      label: 'Scanner',
      icon: 'scanner'
    },
    {
      name: 'Settings',
      component: Settings,
      label: 'Settings',
      icon: 'settings'
    }
];
