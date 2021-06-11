import React, {useState, useEffect} from 'react';

import {Modal} from 'react-native';
import {Container, TitleMyLinks, ListLinks} from './styles'
import Menu from '../../components/Menu'
import ListItem from '../../components/ListItems'
import {useIsFocused} from '@react-navigation/native';
import {getLinkSaves} from '../../comands/storeLinks'
import ModalLink from '../../components/ModalLink'

import StatusBarPage  from '../../components/StatusBarPage';
import { func } from 'prop-types';

export default function MyLinks(){
    const isFocused = useIsFocused();

    const[links, setLinks] = useState([]);
    const[data, setData] = useState({})
    const[modalVisible, setModalVisible] = useState(false)

    useEffect(()=>{
        async function getlinks(){
            const result = await getLinkSaves('Meulink');
            setLinks(result);
        };
        getlinks();
    }, [isFocused])

    function handleItem(item){
        setData(item);
        setModalVisible(true);
    }
    return(
        <Container
        >
            <StatusBarPage 
                barStyle = "light-content"
                backgroundColor = '#132742'
            />
          
            <Menu/>
            
            {/* <Menu/> */}
            <TitleMyLinks>Pagina MyLinks</TitleMyLinks>
            <ListLinks
                data = {links}
                keyExtractor = {(item)=> String(item.id)}
                renderItem = {({item})=> <ListItem data = {item} selectItem = {handleItem}/>}
                contentContainerStyle = {{paddingBottom: 20}}
                showsVerticalScrollIndicator = {false}
                
            />

            <Modal visible={modalVisible} transparent animationType = "slide">
                <ModalLink onClose = { () => setModalVisible(false)} data={data} />
            </Modal>
        </Container>
    )
}