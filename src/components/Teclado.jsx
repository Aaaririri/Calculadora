import { Button } from 'native-base';
import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';

const OPERATORS = ['+', '-', '/', 'x', '.'];
const DATA = [
  '+',
  '-',
  '/',
  'x',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '.',
  '=',
  'CLS',
  'DEL',
];

const Tecla = ({ item, updateCalc }) => (
  <Button
    colorScheme={'blue'}
    style={styles.item}
    onPress={() => {
      updateCalc(item);
    }}
  >
    <Text style={styles.title}>{item}</Text>
  </Button>
);

const Teclado = () => {
  const [calc, setCalc] = useState('');
  const [result, setResults] = useState('');

  const updateCalc = (value) => {
    if (
      (OPERATORS.includes(value) && calc === '') ||
      (OPERATORS.includes(value) && OPERATORS.includes(calc.slice(-1)))
    )
      return;
    setCalc(calc + value);
    if (!OPERATORS.includes(value)) {
      setResults(eval(calc + value).toString());
    }
  };

  const calculateResult = () => {
    if (!OPERATORS.includes(calc.slice(-1))) setCalc(eval(calc).toString());
  };

  const clearScreen = () => {
    setCalc('');
    setResults('');
  };

  const deleteLastValue = () => {
    if (calc == '') return;
    const newCalc = calc.slice(0, -1);
    setCalc(newCalc);
  };

  const renderItem = ({ item }) => (
    <Tecla
      item={item}
      updateCalc={
        item === '='
          ? calculateResult
          : item === 'CLS'
          ? clearScreen
          : item === 'DEL'
          ? deleteLastValue
          : updateCalc
      }
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text>{calc}</Text>
      <FlatList data={DATA} numColumns={5} renderItem={renderItem} />
      <Text>{result}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignSelf: 'center',
    borderWidth: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'flex-end',
    padding: 10,
    borderBottomWidth: 0,
    borderColor: '#799dac',
  },
  item: {
    width: 50,
    marginVertical: 8,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 22,
  },
});

export default Teclado;
