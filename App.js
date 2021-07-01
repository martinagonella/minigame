import React, { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  const handleGameOver = (rounds) => {
    setGuessRounds(rounds);
  }

  const handleRestart = () => {
    setUserNumber(null);
    setGuessRounds(0)
  }

  const handleStartGame = (selectedNumber) => {
    setUserNumber(selectedNumber);
    setGuessRounds(0);
  }

  let content = <StartGameScreen onStartGame={handleStartGame} onGameOver={() => { }} />;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen onEndGame={handleRestart} userOption={userNumber} onGameOver={handleGameOver} />
  } else if (guessRounds > 0) {
    content = <GameOverScreen rounds={guessRounds} choice={userNumber} onRestart={handleRestart} />
  }

  if (!dataLoaded) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Adivina el número" />
      {content}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
});