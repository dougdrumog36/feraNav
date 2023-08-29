import React from 'react';
import {Image, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

export default function CardProdutos({titulo, marca,tamanho, preco, cor, quantidade, imagem}){


    const navigation = useNavigation()

    function navegar(){
        navigation.navigate('details',{imagem:imagem,titulo:titulo,marca:marca,cor:cor,quantidade:quantidade,tamanho:tamanho,preco:preco})
    }

    return(
        <TouchableOpacity onPress={navegar} style ={styles.containerProdutos}>

            <Image style ={styles.imagemProdutos} source = {require(`../../Img/${imagem}`)}/>
            <Text style ={styles.tituloProdutos}> {titulo} </Text>
            <Text style ={styles.marcaProdutos}> {marca} </Text>
            <Text style ={styles.corProdutos}> {cor} </Text>
            <Text style ={styles.quantidadeProdutos}> {quantidade} </Text>
            <Text style ={styles.tamanhoProdutos}> {tamanho} </Text>
            <Text style ={styles.precoProdutos}> {preco} </Text>

        </TouchableOpacity>
    );  
}