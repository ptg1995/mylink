import AsyncStorage from "@react-native-async-storage/async-storage";
import { func } from "prop-types";

export async function getLinkSaves(key) {
    const myLinks = await AsyncStorage.getItem(key)
    let parseMyLinks = JSON.parse(myLinks) || [];
    return parseMyLinks;
};

export async function saveLink(key, newLink){
   const listLinks = await getLinkSaves(key);
   const linksExistentes = listLinks.some(x => x.id === newLink.id);
   if(linksExistentes){
       console.log('Link já existe');
       return;
   }
   listLinks.push(newLink);
   await AsyncStorage.setItem(key, JSON.stringify(listLinks))
   console.log('Link salvo com sucesso!')
};

export async function deleteLink(key, item){
    const link = await getLinkSaves(key);
    link.forEach(element => {
        if(element.long_url === item.long_url){
            link.splice(link.indexOf(element), 1);
        }
    });
    await AsyncStorage.setItem(key, JSON.stringify(link));
    console.log('Link deletado com sucesso!');
    return link;
}

//if(element.long_url === item.long_url){
//  links.splice(links.indexOf(item),1);
//}