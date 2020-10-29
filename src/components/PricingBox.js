import React, {useState} from 'react';
import { FaAngleDoubleDown, FaAngleDoubleUp, FaRegCheckCircle } from "react-icons/fa";

const PricingBox = ({id, level, CTAText, featuresList, featuresToShow}) => {
    const [readMore, setReadMore] = useState(false);

    const renderFeaturesList = (readMore ? featuresList
        : featuresList.slice(0, featuresToShow)).map((feature, index) => <li key={id + index} className="feature-item"><FaRegCheckCircle />{feature}</li>);

    const showMoreFeatures = () => {
        if (featuresList.length > featuresToShow) {
            let span;
            if (readMore) span = <span>Show less features <FaAngleDoubleUp /></span>;
            else span = <span>Show all features <FaAngleDoubleDown /></span>;
            return <button className="read-more-button" onClick={() => setReadMore(!readMore)}>{span}</button>;
        }
    };

    return (
        <div className="pricing-box">
            <h1 className="level">{level}</h1>
            <button className="cta-text-button">{CTAText}</button>
            <ul className="features-list">{renderFeaturesList}</ul>
            {showMoreFeatures()}
        </div>
    )
};

export default PricingBox;