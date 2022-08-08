import { Button } from 'native-base';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Tecla(props) {
  return (
    <Button color="light.800" style={styles.button}>
      {props.text}
    </Button>
  );
}

const styles = StyleSheet.create({
  button: {},
});
