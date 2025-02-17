import React from 'react';
import "./Investments.scss"
import cube from "./imgs/Rectangle 25.svg"
import preview from "./imgs/Rectangle 72.png"
import Button from "../../atoms/Button/Button";
import {investment_cards} from "../../constants";
import InvestmentCard from "../../organisms/investmentCard/investmentCard";

const Investments = () => {
    return (
        <div className="investments-page">
            <div className="investments-page-title">
                <div className="investments-page-title-content">
                    <h1 className="investments-page-title-content__main">Инвестиции</h1>
                    <h1 className="investments-page-title-content__secondary">в инновационные
                        технологии</h1>
                </div>
                <div className="investments-page-title-cubes">
                    <img className="investments-page-title-cubes__item" src={cube} alt=""/>
                    <img className="investments-page-title-cubes__item" src={cube} alt=""/>
                    <img className="investments-page-title-cubes__item" src={cube} alt=""/>
                </div>
            </div>
            {investment_cards.map(card =>
                <InvestmentCard title={card.title} content={card.content} img={card.img}/>
            )}
        </div>
    );
};

export default Investments;