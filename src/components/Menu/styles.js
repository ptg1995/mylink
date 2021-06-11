import styled from 'styled-components';
import {StatusBar, Platform} from 'react-native'

export const ButtonMenu = styled.TouchableOpacity`
    top: ${StatusBar.currentHeight = Platform === 'ios' ? 60 + 'px' : 15 + 'px' };
    position:  absolute ;
    margin: 0 10px;
    justify-content: space-around;
`;