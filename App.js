import React from 'react';
import Home from './src/screens';

import {
  useFonts,
  Barlow_500Medium,
  Barlow_600SemiBold,
  Barlow_700Bold,
} from "@expo-google-fonts/barlow"

import  { 
  Roboto_500Medium,
} from "@expo-google-fonts/roboto"

import AppLoading from 'expo-app-loading';

export default function App() {
  const [fontsLoaded] = useFonts({
    Barlow_500Medium,
    Barlow_600SemiBold,
    Barlow_700Bold,
    Roboto_500Medium,
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  }


  return (
    <Home />
  );
}

