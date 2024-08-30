import { useState } from 'react';
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [suma, setSuma] = useState(0);
  const [data, setData] = useState([]);
  const urlBase = 'https://rickandmortyapi.com/api/character';
  // const urlBase = 'https://jsonplaceholder.typicode.com/';

  const getBooks = () => {
    fetch(urlBase + '/1,2,3,4,5,6,7,8,9,10')
      .then((response) => response.json())
      .then((dataApi) => setData(dataApi))
      .catch((error) => console.log(error));
  };

  const sumarCuenta = () => {
    setSuma(suma + 1);
  };

  const restarCuenta = () => {
    setSuma(suma - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.estiloA}>
        <Text>{suma}</Text>
        <Button onPress={sumarCuenta} title='Contador + 1'></Button>
        <Button onPress={restarCuenta} title='Contador - 1'></Button>
      </View>
      <View style={styles.estiloB}>
        <Button onPress={getBooks} title='Llamar API'></Button>
        <ScrollView>
          <View style={styles.containerApi}>
            {data.map((item) => (
              <View style={styles.containerBooks}>
                <Text>{item.id}</Text>
                <Text>{item.name}</Text>
                <Image source={item.image} style={styles.containerImage} />
              </View>
            ))}

            {/* <FlatList
            data={data}
            keyExtactor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.containerBooks}>
                <Text>{item.id}</Text>
                <Text>{item.name}</Text>
              </View>
            )}
          /> */}
          </View>
        </ScrollView>
      </View>
      <View style={styles.estiloX}>
        <View style={styles.estiloC}>
          <Text>C</Text>
        </View>
        <View style={styles.estiloD}>
          <Text>D</Text>
        </View>
        <View style={styles.estiloE}>
          <Text>E</Text>
        </View>
      </View>
      <View style={styles.estiloF}>
        <Text>F</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerBooks: {
    width: '35%',
    height: 150,
    backgroundColor: 'coral',
    margin: 10,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 10,
  },
  containerApi: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  containerImage: {
    height: 50,
    width: 50,
  },
  estiloA: {
    backgroundColor: '#aaa',
    width: '90%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  estiloB: {
    padding: 10,
    backgroundColor: '#aaa',
    width: '90%',
    height: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  estiloX: {
    width: '90%',
    height: '15%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  estiloC: {
    backgroundColor: '#aaa',
    width: '30%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  estiloD: {
    backgroundColor: '#aaa',
    width: '30%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  estiloE: {
    backgroundColor: '#aaa',
    width: '30%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  estiloF: {
    backgroundColor: '#aaa',
    width: '90%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
