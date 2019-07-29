import React, { useState, ReactNode } from 'react';
import CalcTypeContext from './CalcTypeContext';

const CalcTypeProvider = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const [calcType, setCalcType] = useState<boolean>(true);

  const updateCalcType = (): void => {
    if (calcType) {
      setCalcType(false);
    } else {
      setCalcType(true);
    }
  };

  return (
    <CalcTypeContext.Provider value={{ calcType, updateCalcType }}>
      {children}
    </CalcTypeContext.Provider>
  );
};

export default CalcTypeProvider;
