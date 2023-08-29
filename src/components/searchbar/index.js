import React from "react";
import { TextInput, View,} from "react-native";
import styles from './style'

export default function Search(){

    return(

        <View style= {styles.containerSearch}> 

                <TextInput style= {styles.inputSearch} placeholder="Digite o produto que deseja comprar"></TextInput>

        </View>

    );

}