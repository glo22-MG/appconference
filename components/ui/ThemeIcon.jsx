import React from 'react';

const ThemeIcon = ({ Icon, color, bgColor }) => (
  <div className={`${bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}>
    <Icon className={`h-6 w-6 ${color}`} />
  </div>
);

export default ThemeIcon;