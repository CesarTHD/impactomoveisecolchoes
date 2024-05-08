'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

const CoordinatesContext = createContext<any>(undefined);

export const CoordinatesProvider = ({ children }: any) => {
  const [coordinates, setCoordinates] = useState([{x:0, y:0}]);
  return (
    <CoordinatesContext.Provider value={{ coordinates, setCoordinates }}>
      {children}
    </CoordinatesContext.Provider>
  );
};


export const useCoordinatesContext = () => {
  const context = useContext(CoordinatesContext);
  if (!context) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
