import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.details}>
        My name is <Text style={styles.name}>Aaron Yeboah</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 24,
  },
  details:{
    fontSize: 24
  },
  name:{
    fontWeight: 'bold'
  },

});
