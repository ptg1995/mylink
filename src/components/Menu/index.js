import React from 'react';
import { Text } from 'react-native';
import {ButtonMenu} from './styles'
import {Feather} from '@expo/vector-icons'
import {useIsFocused, useNavigation} from '@react-navigation/native'

export default function Menu(){
    const navigation = useNavigation();
   return(
    <ButtonMenu onPress = {() => navigation.openDrawer()}>
        <Feather name="menu" size={40} color = "#FFF"/>
    </ButtonMenu>
   )
}