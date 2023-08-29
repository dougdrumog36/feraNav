import { StyleSheet, View, FlatList, ScrollView } from 'react-native';
import BannerProdutos from '../../components/bannerProdutos';
import Filmes from '../../data/produtos';
import Header from '../../components/header';
import SearchBar from '../../components/searchbar';
import CardProdutos from '../../components/cardProdutos';

export default function Home() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Header></Header>
      <SearchBar></SearchBar>
      <BannerProdutos></BannerProdutos>
      
      <View style={styles.card}>
        <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Filmes}
            keyExtractor={(item) => item.id}
            renderItem = { ({item}) => (

          <CardProdutos
              titulo = {item.nome}
              marca = {item.marca}
              cor = {item.cor}
              quantidade = {item.quantidade}
              tamanho = {item.tamanho}
              preco = {item.preco}
              imagem = {item.imagem}
          />
        )} 
        />
    </View>
  </View>
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#751010',
    alignItems:"center"
  },

  card: {
    width:"95%", 
    backgroundColor:'#000000', 
    borderRadius:'10px', 
    marginTop:'5%',
  }
});
