import { createContext } from 'react';

export interface CalcTypeContextInterface {
  calcType: boolean;
  updateCalcType: () => void;
}

const CalcTypeContext = createContext<CalcTypeContextInterface>({
  calcType: true,
  updateCalcType: () => {},
});

export default CalcTypeContext;
