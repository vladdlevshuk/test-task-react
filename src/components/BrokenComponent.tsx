import React from 'react';

export const BrokenComponent: React.FC = () => {
  throw new Error('test error');

  return <div>Этот текст никогда не будет отображен</div>;
};
