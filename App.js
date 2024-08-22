import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.estiloA}>
        <Text>A</Text>
      </View>
      <View style={styles.estiloB}>
        <Text>B</Text>
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
  estiloA: {
    backgroundColor: '#aaa',
    width: '90%',
    height: '15%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  estiloB: {
    backgroundColor: '#aaa',
    width: '90%',
    height: '40%',
    marginTop: 20,
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
