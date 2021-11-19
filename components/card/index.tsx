import { FC } from 'react';

import {
  Container, Title, Description, Date,
} from './card.styles';

import { witchColor } from './card.utils';

import { CardProps } from './card.types';

const Card: FC<CardProps> = ({
  title, description, date, relevance,
}) => (
  <Container background={witchColor(relevance)}>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Date>{date}</Date>
  </Container>
);

export default Card;
