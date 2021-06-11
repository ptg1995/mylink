import React from 'react';
import { Text, TouchableOpacity, View, TouchableWithoutFeedback, Alert, Share} from 'react-native';
import {ModalContainer, Container, Header, LinkArea, LongUrl, TitleLink, ShortLinkArea, ShortLinkUrl} from './style';
import {Feather} from '@expo/vector-icons';
import { Title } from '../../pages/Home/styles';
import ClipBoard from 'expo-clipboard';

export default function ModalLink({onClose, data}){
    function copyUrl() {
        ClipBoard.setString(data["link"])
        alert('Link copiado!')
    }
    async function handleShare() {
        try {
            const result = await Share.share(
                {
                    message: `Link: ${data["link"]}`
                }
            );
            if(result.action === Share.sharedAction){
                if(result.activityType){
                    console.log('ActivityShared')
                } else {
                    console.log('Compartilhado com sucesso!!')
                }
            } else if(result.action === Share.dismissedAction){
                console.log('Modal fechado!')
            }
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <ModalContainer>
            <TouchableWithoutFeedback onPress = {onClose}>
            <View style = {{flex:1}}></View>
            </TouchableWithoutFeedback>
            <Container>
                <Header>
                    <TouchableOpacity onPress = {onClose}>
                        <Feather
                            name="x"
                            color = "#212746"
                            size = {30}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {handleShare}>
                        <Feather
                            name="share"
                            color = "#212746"
                            size = {30}
                        />
                    </TouchableOpacity>
                </Header>
                <LinkArea>
                    <TitleLink>Link Encurtado:</TitleLink>
                    <LongUrl numberOfLines={1}>{data["long_url"]}</LongUrl>

                    <ShortLinkArea
                        activeOpacity= {0.89}
                    >
                        <ShortLinkUrl numberOfLines = {1}
                            onPress = {copyUrl}
                        >
                            {data["link"]}
                        </ShortLinkUrl>
                        <TouchableOpacity onPress = {copyUrl}>
                            <Feather
                                name="copy"
                                color = "#FFF"
                                size = {25}
                            />
                        </TouchableOpacity>
                    </ShortLinkArea>
                </LinkArea>
            </Container>
        </ModalContainer>
    )
}