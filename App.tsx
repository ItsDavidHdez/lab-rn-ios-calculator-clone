import React from 'react';
import {CalculatorScreen} from './src/screens/CalculatorScreen';
import {SafeAreaView, StatusBar} from 'react-native';
import {styles} from './src/theme/Global/App.styles';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor={'black'} barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
