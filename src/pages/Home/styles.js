import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const ContainerLogo  = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: ${Platform === 'ios'? 35+'px'  :  15+'px'};
`;

export const Logo = styled.Image`
    width: 150px;
    height: 150px;
`;

export const ContainerContent = styled.View`
    margin-top: ${Platform === 'ios'? 25+'%'  :  15+'%'};
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    font-size: 35px;
    color: #FFF;
    font-weight: bold;
    text-align: center;
`;

export const SubTitle = styled.Text`
    font-size: 20px;
    color: #FFF;
    text-align: center;
    padding-bottom: 12% ;
`;

export const ContainerInput = styled.View`
    align-items: center;
    flex-direction: row;
    width: 100%;
    border-radius: 7px;
    margin: 15px 0;
    padding-right: 15px;
    padding-left: 15px;
`;

export const BoxIcon = styled.View`
    align-items: center;
    justify-content: center;
    padding-left: 10px;
    width: 11%;
    height: 50px;
    background-color: rgba(255,255,255, 0.15);
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
`;

export const Input = styled.TextInput`
    align-items: center;
    justify-content: center;
    width: 89%;
    height: 50px;
    background-color: rgba(255,255,255, 0.15);
    border-top-right-radius: 7px;
    border-bottom-right-radius: 7px;
    font-size: 19px;
    color: #FFF;
`;

export const BtnGerar = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 45px;
    background-color: #FFF;
    width: 92%;
    border-radius: 7px;
    margin-bottom: 45px;
`
export const TextGerar = styled.Text`
    font-size: 18px;
    color: #000;
`