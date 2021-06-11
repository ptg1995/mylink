import styled from 'styled-components/native';
import {Text, Platform} from 'react-native'

export const ModalContainer = styled.View`
    flex: 1;
`
export const Container = styled.View`
    flex: 1;
    background-color: #FFF;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
`
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    padding-top: 25px;
    padding: 20px;
`
export const LinkArea = styled.View`
    flex: 1;
    justify-content: center;
    padding: 0 15px;
`
export const TitleLink = styled.Text`
    color: #1ccbae;
    font-size: 33px;
    font-weight: bold;
`
export const LongUrl = styled.Text`
    font-size: 17px;
    color: #A7A7A7;
    margin-bottom: 30px;
`
export const ShortLinkArea = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: space-between;
    height: 45px;
    width: 100%;
    border-radius: 7px;
    background-color: #172742;
    align-items: center;
    padding: 0 10px;
`
export const ShortLinkUrl = styled.Text`
    width: 90%;
    color: #FFF;
    font-size: 16px;
`
