import { StyleSheet, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <view style={styles.estiloA}>
        <text>A</text>
      </view>
      <view style={styles.estiloB}>
        <text>B</text>
      </view>
      <view>
        <view style={styles.estiloC}>
          <text>C</text>
        </view>
        <view>
          <text>D</text>
        </view>
        <view>
          <text>E</text>
        </view>
      </view>
      <view style={styles.estiloF}>
        <text>F</text>
      </view>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  estiloA: {
    backgroundColor: '#aaa',
    width: '90%',
    height: 100,
  },
  estiloB: {
    backgroundColor: '#aaa',
    width: '90%',
    height: 300,
    marginTop: 20,
  },
  estiloC: {
    backgroundColor: '#aaa',
    width: '90%',
    height: 100,
  },
  estiloF: {
    backgroundColor: '#aaa',
    width: '90%',
    height: 100,
  },
});
