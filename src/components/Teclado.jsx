import { Button } from 'native-base';
import React from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text } from 'react-native';
import { OPERATORS, OPE1, OPE2, NUMBERS } from '../utils/constants';
import { calculatorState, resultState } from '../recoil/atoms/Calculadora';
import { useRecoilState, useRecoilValue } from 'recoil';

const Tecla = ({ item, updateValues }) => (
  <Button
    colorScheme={!NUMBERS.includes(item) ? 'blueGray' : 'blue'}
    style={!NUMBERS.includes(item) ? styles.itemGray : styles.itemBlue}
    onPress={() => {
      updateValues(item);
    }}
  >
    <Text style={styles.title}>{item}</Text>
  </Button>
);

const Teclado = () => {
  const [calc, setCalc] = useRecoilState(calculatorState);
  const result = useRecoilValue(resultState);

  const updateCalc = (value) => {
    if (
      (OPERATORS.includes(value) && calc === '') ||
      (OPERATORS.includes(value) && OPERATORS.includes(calc.slice(-1)))
    )
      return;
    setCalc(calc + value);
  };

  const accumulatedCalc = () => {
    setCalc(result);
  };

  const allClear = () => {
    const newValue = '';
    setCalc(newValue);
  };

  const deleteValue = () => {
    const newValue = calc.slice(0, -1);
    setCalc(newValue);
  };

  const renderItem = ({ item }) => (
    <Tecla
      item={item}
      updateValues={
        item === '='
          ? accumulatedCalc
          : item === 'AC'
          ? allClear
          : item === 'DEL'
          ? deleteValue
          : updateCalc
      }
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={OPE1} numColumns={4} renderItem={renderItem} />
      <FlatList data={NUMBERS} numColumns={5} renderItem={renderItem} />
      <FlatList data={OPE2} numColumns={4} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignSelf: 'center',
    width: '90%',
    borderWidth: 10,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 0,
    borderColor: '#799dac',
  },
  itemBlue: {
    minWidth: 40,
    marginVertical: 8,
    marginHorizontal: 4,
  },
  itemGray: {
    minWidth: 50,
    marginVertical: 8,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 22,
  },
});

export default Teclado;
