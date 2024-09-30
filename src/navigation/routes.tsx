import { SplashScreen } from '../screens/SplashScreen/SplashScreen';
import { LandingPage } from '../screens/LandingPage/LandingPage';
import { BottomTab } from './BottomTab/BottomTab';
import React from 'react';


export type AppStackParamList = {
    SplashScreen: undefined,
    LandingPage: undefined,
    Tabs: undefined,
};

export const routes = [
  {
    name: 'SplashScreen',
    component: SplashScreen
  },
  {
    name: 'LandingPage',
    component: LandingPage
  },
  {
    name: 'Tabs',
    component: BottomTab
  }
];
