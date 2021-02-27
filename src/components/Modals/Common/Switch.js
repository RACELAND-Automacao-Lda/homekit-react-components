import React from 'react';
import styled from '@emotion/styled';

const Slider = styled.div`
  -webkit-transition: .4s;
  transition: .4s;

  &:before {
    position: absolute;
    content: "";
    margin: 5px 0 0 5px;
    height: 125px;
    width: 80px;
    left: 0px;
    top: 125px;
    -webkit-transition: .4s;
    transition: .4s;
    border-radius: 18px;
    background-color: ${props => props.isActive ? props.theme.colors.defaultLight : props.theme.colors.textMedium};
  }
`

const SwitchContainer = styled.label`
  background: #F0F0F0;
  height: 260px;
  width: 90px;
  border-radius: 20px;
  cursor: pointer;
  position: relative;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  input:checked + ${Slider}:before  {
    -webkit-transform: translateY(-125px);
    -ms-transform: translateY(-125px);
    transform: translateY(-125px);
  }
`;

export function Switch(props) {
  return (
    <SwitchContainer>
      <input type="checkbox" defaultChecked={props.isActive} onChange={props.handlePress} />
      <Slider isActive={props.isActive} />
    </SwitchContainer>
  );
}
