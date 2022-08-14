import { atom, selector } from 'recoil';

import { OPERATORS } from '../../utils/constants';

export const calculatorState = atom({
  key: 'calculatorState',
  default: '',
});

export const resultState = selector({
  key: 'resultState',
  get: ({ get }) => {
    const result = get(calculatorState);
    if (result)
      if (!OPERATORS.includes(result.slice(-1))) return eval(result).toString();
      else {
        const newResult = result.slice(0, -1);
        return eval(newResult).toString();
      }
  },
});
