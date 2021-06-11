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

export async function deleteLink(links, id){

}
