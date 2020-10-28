import React from 'react';

const PricingBox = ({id, level, CTAText, featuresList}) => {
  const renderFeaturesList = featuresList.map((feature, index) => <li key={id+index} className="feature-item">{feature}</li>)
    return (
        <div className="pricing-box">
            <h1 className="level">{level}</h1>
            <button className="cta-text-button">{CTAText}</button>
            <ul className="features-list">{renderFeaturesList}</ul>
        </div>
    )
};

export default PricingBox;

