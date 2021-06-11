import React,{useState} from 'react';
import {TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal, ActivityIndicator} from 'react-native'
import { Text, View } from 'react-native';

import {LinearGradient} from 'expo-linear-gradient'
import StatusBarPage  from '../../components/StatusBarPage';
import Menu from '../../components/Menu'
import ModalLink from '../../components/ModalLink'
import {ContainerLogo, Logo, ContainerContent, Title, SubTitle, ContainerInput, BoxIcon, Input, BtnGerar, TextGerar} from './styles'
import {Feather} from '@expo/vector-icons'
import api from './../../services/api'
import {getLinkSaves, saveLink} from '../../comands/storeLinks'

export default function Home(){
    const [input, setInput] = useState('');
    const [modalState, setModalState] = useState(false);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({});
    async function handleModalState(){
        setLoading(true);
        try {
            const response = await api.post('/shorten',
            {
                long_url: input
            })
            setData(response.data);
            setLoading(false);
            setInput('');
            setModalState(true);
            saveLink('Meulink', response.data);
            Keyboard.dismiss();

        } catch (error) {
            alert('Algo deu errado');
            Keyboard.dismiss();
            setLoading(false);
            setInput('')
        }
        // const request = await api.request()
        // console.log(JSON.stringify(request))
    }
    return(
         <TouchableWithoutFeedback onPressIn = { () =>{Keyboard.dismiss()}}>
            <LinearGradient
                colors = {['#1ddbb9', '#132742']}
                style={{flex: 1, justifyContent: 'center',}}
            >
                <StatusBarPage
                    barStyle = "light-content"
                    backgroundColor = '#1ddbb9'
                />
                <Menu/>

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'android' ? 'padding': 'position'}
                >
                <ContainerLogo>
                    <Logo source = {require('../../assets/Logo.png')} resizeMode ="contain"/>
                </ContainerLogo>
                <ContainerContent>
                    <Title> Sujeito Link </Title>
                    <SubTitle>Cole o link para encurtar</SubTitle>
                    
                    <ContainerInput>
                        <BoxIcon>
                            <Feather name="link" size = {22} color="#FFF"/>
                        </BoxIcon>
                        <Input 
                            autoCapitalize = 'none'
                            autoCorrect = {false}
                            placeholder = "Cole seu link aqui..."
                            placeholderTextColor="#FFF"
                            KeyboardType = 'url'
                            value = {input}
                            onChangeText = {(text)=> setInput(text)}
                        />
                    </ContainerInput>
                    <BtnGerar onPress = {handleModalState}>
                        {
                            loading ? (<ActivityIndicator color = '#121212' size = {24}/>):
                            <TextGerar> Gerar Link </TextGerar>
                        }
                    </BtnGerar>
                </ContainerContent>
                </KeyboardAvoidingView>
                <Modal visible={modalState} transparent animationType = "slide">
                    <ModalLink onClose = { () => setModalState(false)} data={data} />
                </Modal>
            </LinearGradient>
        </TouchableWithoutFeedback>    
    )
}