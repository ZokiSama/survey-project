// SurveyField innehåller logik för att rendera
// en label och text input
import React from 'react';

export default ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
