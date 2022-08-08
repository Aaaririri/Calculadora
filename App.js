import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Box, Button } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import Footer from './src/components/Footer';
import Tecla from './src/components/Tecla';
export default function App() {
  return (
    <NativeBaseProvider>
      <LinearGradient
        colors={['rgba(79,152,213,0.8)', 'transparent']}
        style={styles.container}
      >
        <Tecla text={'a'} />
      </LinearGradient>
      <Footer />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
