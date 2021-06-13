import React from 'react'
import {View, Text} from 'react-native'
import {Feather} from '@expo/vector-icons'
import {ContainerLinks, TextLink, ActionRight} from './styles'
import Swipeable from 'react-native-gesture-handler/Swipeable'
import styled from 'styled-components'

export default function ListItem({data, selectItem, delItem}) {
    function rightActions() {
        return(
            <ActionRight onPress = {() =>{delItem(data)}}>
                <Feather
                    name="trash"
                    color = "#FFF"
                    size = {24}
                >
                </Feather>
            </ActionRight>
        )
    }
    return(
        <View>
            <Swipeable renderRightActions = {rightActions}>
                <ContainerLinks activeOpacity = {0.8} onPress = {() => {selectItem(data)}} >
                    <Feather
                        name = "link"
                        color = "#FFF"
                        size = {21}
                    />
                    <TextLink numberOfLines = {1}>
                        {data.long_url} 
                    </TextLink>
                </ContainerLinks>
            </Swipeable>
        </View>
    )
} 