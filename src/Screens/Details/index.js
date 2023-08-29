import React from "react";
import {View,Image, Text} from 'react-native'
import { useRoute } from "@react-navigation/native";
import estilo from './style'

export default function Details(){

    const route = useRoute();
    const dados = route.params
    return(
        <View style = {estilo.fundo}>
           <Image style = {estilo.imagemFilme} source = {require(`../../Img/${dados.imagem}`)}/> 
            <Text style = {estilo.tituloFilme} >{dados.titulo}</Text>
            <Text>{dados.marca}</Text>
            <Text>{dados.cor}</Text>
            <Text>{dados.quantidade}</Text>
            <Text>{dados.tamahno}</Text>
        </View>
    );
}