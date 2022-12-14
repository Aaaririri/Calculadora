import { Row } from 'native-base';
import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from 'react-native';
import { useRecoilValue } from 'recoil';
import { calculatorState, resultState } from '../recoil/atoms/Calculadora';

const Display = () => {
  const calc = useRecoilValue(calculatorState);
  const result = useRecoilValue(resultState);

  return (
    <SafeAreaView style={styles.display}>
      <ScrollView>
        <Text style={styles.operation}>{calc ? calc : '(0)'}</Text>
      </ScrollView>
      <Text style={styles.result}>{result ? '= ' + result : '= 0'}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  operation: {
    fontSize: 24,
    margin: 10,
    marginVertical: 40,
  },
  result: {
    fontSize: 36,
    margin: 20,
  },
  display: {
    flex: 2,
    width: '90%',
    marginVertical: '10%',
    alignItems: 'flex-end',
    alignSelf: 'center',
    backgroundColor: '#d0d0d0',
    borderColor: '#799dac',
    borderWidth: 10,
    borderRadius: 50,
  },
});

export default Display;
