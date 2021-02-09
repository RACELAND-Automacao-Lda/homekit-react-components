import React from 'react';
import styled from '@emotion/styled';

import LightIconSvg from '../resources/icons/light-bulb.svg';
import { Card } from './Card';


const LightIconContainer = styled.div`
  color: ${props => props.isActive ? props.theme.card.light.colorActive : props.theme.card.light.colorInactive};
  font-size: 24px;
`;

export function LightCard(props) {
  return (
    <Card
      logo={
        props.logo ?
          props.logo :
          <LightIconContainer isActive={props.isActive ? 1 : 0}>
            <img src={LightIconSvg} alt="Light Icon" />
          </LightIconContainer>
      }
      name={props.name}
      state={props.state}
      isActive={props.isActive}
      handlePress={props.handlePress}
      handleLongPress={props.handleLongPress}
    />
  );
}
