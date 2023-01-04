import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// Component
import Header from './src/components/header';

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Text>Wassup Bruv</Text>
      <Text>Everybody</Text>
      <Text>Come take my hand</Text>
      <Text>We walk this together</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
