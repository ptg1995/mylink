import styled from 'styled-components/native';
import {Platform} from 'react-native';

export const Container = styled.View`
    flex: 1;
    background-color: #172742;
`
export const TitleMyLinks = styled.Text`
    color: #FFF;
    font-size: 17px;
    margin-top: ${Platform.OS == 'android' ? 20+'%' : 30+'%'};
    margin-left: 20px;
    font-size: 30px;
    font-weight: bold;
`
export const ListLinks = styled.FlatList`
`

