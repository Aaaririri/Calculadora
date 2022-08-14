import React from 'react';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';
import { RecoilRoot } from 'recoil';
import Footer from './src/components/Footer';
import Teclado from './src/components/Teclado';
import Display from './src/components/Display';

export default function App() {
  return (
    <RecoilRoot>
      <NativeBaseProvider>
        <LinearGradient
          colors={['rgba(79,152,213,0.8)', 'transparent']}
          style={styles.container}
        >
          <Display />
          <Teclado />
        </LinearGradient>
        <Footer />
      </NativeBaseProvider>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
