import React from 'react';
import { useSelector } from 'react-redux';

const Total = props => {
  const car = useSelector((state) => state.car);
  const featureCost = useSelector((state) => state.featureCost)
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + featureCost}</h4>
    </div>
  );
};

export default Total;
