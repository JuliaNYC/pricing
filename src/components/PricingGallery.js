import React, {useState} from 'react';
import {content} from '../mockdata/pricingContent';
import PricingBox from './PricingBox';

const PricingGallery = () => {
    const [featuresToShow] = useState(5);
    const renderPricingBoxes = content.map(box => {
        return <PricingBox
            key={box.id}
            id={box.id}
            level={box.level}
            CTAText={box.CTAText}
            featuresList={box.featuresList}
            featuresToShow={featuresToShow}
        />
    });

    return (
        <div className="pricing-gallery">{renderPricingBoxes}</div>
    )
};

export default PricingGallery;