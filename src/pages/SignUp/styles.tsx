import styled, {css} from 'styled-components/native';
import {Dimensions} from 'react-native';
import Theme from '../../styles/theme';

const {width, height} = Dimensions.get('screen');

export const ScrollView = styled.ScrollView`
  background-color: ${Theme.colors.primary};
`;

export const Wrapper = styled.View``;

export const LogoWrapper = styled.View`
  align-items: center;
`;

export const Image = styled.Image`
  width: ${width * 0.4}px;
  height: ${width * 0.4}px;
`;

export const WrapperSteps = styled.View`
  flex-direction: row;
  justify-content: space-around;
  border-bottom-width: 2px;
  border-bottom-color: #ffffff1b;
  padding-bottom: 20px;
`;

type StepProps = {active?: boolean};
export const Steps = styled.TouchableOpacity<StepProps>`
  ${({active}) => css`
    background-color: ${active ? '#867AD2' : '#C4C4C4'};
    padding: 10px;
    border-radius: ${height}px;
  `}
`;

export const StepsIcon = styled.Image`
  width: ${(width / width) * 22}px;
  height: ${(width / width) * 22}px;
`;

const stepModifier = {
  step1: () => css`
    align-self: flex-start;
  `,
  step2: () =>
    css`
      align-self: center;
    `,
  step3: () => css`
    align-self: flex-end;
  `,
};
export type StepSelectedProps = {step?: 'step1' | 'step2' | 'step3'};
export const StepsSelected = styled.View<StepSelectedProps>`
  ${({step = 'step1'}) => css`
    background-color: #fff;
    height: 4px;
    width: ${width / 3}px;
    margin-top: -3px;
    ${stepModifier[step]()};
  `}
`;

export const Form = styled.View`
  padding: 0 15px;
`;

export const Footer = styled.View`
  padding: 0 15px;
  margin-top: 20px;
`;

export const Goback = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 5px 0 10px;
`;

export const GobackText = styled.Text`
  color: ${Theme.colors.white};
  font-size: 14px;
`;

export const Label = styled.Text`
  color: ${Theme.colors.white};
  font-size: 24px;
  font-weight: bold;
  align-self: center;
  margin-bottom: 20px;
`;
