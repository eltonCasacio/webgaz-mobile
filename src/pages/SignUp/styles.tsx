import styled, {css} from 'styled-components/native';
import Theme from '../../styles/theme';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: ${Theme.colors.primary};
`;

export const ScrollView = styled.ScrollView``;

export const LogoWrapper = styled.View`
  align-items: center;
  margin-bottom: 20px;
`;

export const Image = styled.Image`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  margin: 0 -10px;
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
    padding: 15px;
    border-radius: 200px;
  `}
`;
export const StepsIcon = styled.Image``;

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
    width: 33.333%;
    margin-top: -3.5px;
    ${stepModifier[step]()};
  `}
`;

export const Label = styled.Text`
  align-self: center;
  color: ${Theme.colors.white};
  font-size: 30px;
  font-weight: bold;
  margin-top: 20%;
`;

export const Container = styled.View`
  padding: 0 15px;
`;

export const Footer = styled.View`
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  padding: 0 15px;
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
