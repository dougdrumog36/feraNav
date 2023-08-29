import React,{Fragment} from 'react';
import { Image,Text, View } from 'react-native';
import styles from './style';


export default function BannerProdutos(){
    const imagem = Math.floor(Math.random() * 4 +1);
    return(
        <>
            <Text style = {styles.textBanner}> Mais Vendidos </Text>
            <Image style = {styles.imagemBanner} source = {require(`../../Img/${imagem}.jpg`)} />
        </>
    );  
}