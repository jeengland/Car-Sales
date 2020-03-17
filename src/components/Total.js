import React from 'react';
import { connect } from 'react-redux';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.featureCost}</h4>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    car: state.car,
    featureCost: state.featureCost
  }
}

export default connect(mapStateToProps)(Total);
