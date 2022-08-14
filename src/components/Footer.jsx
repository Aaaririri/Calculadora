import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.text}>2022 © Calculadora Ex Machina</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(64,102,139, 0.1)',
  },
  text: {
    fontStyle: 'normal',
    color: '#40668b',
  },
});
