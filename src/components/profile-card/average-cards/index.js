import React from 'react';
import NumberFormat from 'react-number-format';

import { CardContainer, CardsContainer } from './cardStyles.js';

const Card = ({ value, text }) => (
    <CardContainer>
        <h3>{text}</h3>
        <h2><NumberFormat value={value || 0} displayType={'text'} thousandSeparator={true}/></h2>
    </CardContainer>
)

const AverageCards = ({
    average_likes,
    average_comments,
    average_views    
}) => (
    <CardsContainer>
        <Card value={average_likes} text="Average Likes"/>
        <Card value={average_comments} text="Average Comments"/>
        <Card value={average_views} text="Average Views"/>
    </CardsContainer>
)

export default AverageCards;