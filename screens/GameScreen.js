import React, { useState } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import Colors from '../constants/colors';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  const random = Math.floor(Math.random() * (max - min) + min)

  if (random === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return random;
  }
}

const GameScreen = ({ onEndGame, userOption }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userOption));
  const handleEndGame = () => {
    onEndGame(0)
  }

  return (
    <View style={styles.screen}>
      <Text>La suposición del oponente</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="MAYOR" onPress={() => { }} />
        <Button title="MENOR" onPress={() => { }} />
      </Card>
      <Button title="TERMINAR" onPress={handleEndGame} color={Colors.accent} />
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    padding: 20,
    width: 300,
    maxWidth: '80%',
    marginBottom: 10,
  }
});

export default GameScreen;