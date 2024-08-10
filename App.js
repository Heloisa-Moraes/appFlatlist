import React, { useState } from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import { List } from 'react-native-paper';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    titulo: 'Primeiro Item',
    descricao: 'Descrição do Primeiro Item'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    titulo: 'Segundo Item',
    descricao: 'Descrição do Segundo Item'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    titulo: 'Terceiro Item',
    descricao: 'Descrição do Terceiro Item'
  },
];

const Item = ({elemento: item }) => {
  return(
  <List.Item
    title={ item.titulo }
    description={ item.descricao }
    // left={props => <List.Icon {...props} icon="folder" />}
    left={props => 
    <Image {...props} style={styles.tinyLogo} source={{uri:'https://cdn.pixabay.com/photo/2023/05/12/19/02/mountains-7989160_1280.jpg'}}/>
}
/>
)};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={ DATA }
        renderItem={({ item }) =><Item elemento={item} />}
        keyExtractor={ item => item.id }
      />
    </SafeAreaView>
  );
};

// APP 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default App;