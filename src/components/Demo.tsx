import React from 'react';

export interface DemoProps {
  propsA: string;
  propsB: boolean;
}

export const Demo: React.FC<DemoProps> = props => {
  const { propsA, propsB } = props;
  return <div>
      <div>propsA = {propsA}</div>
      <div>propsB = {propsB}</div>
  </div>
};
