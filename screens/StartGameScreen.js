import React, { useState } from 'react';
import { View, Text, Button, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constants/colors';

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [confirmedValue, setConfirmedValue] = useState('');

  const handleInputNumber = text => {
    setEnteredValue(text.replace(/[^0-9]/g, ''));
  }

  const handleResetInput = () => {
    setEnteredValue('');
    setConfirmed(false);
    setConfirmedValue('');
  }

  const handleConfirmInput = () => {
    const inputNumber = parseInt(enteredValue);
    if (inputNumber === NaN || inputNumber <= 0 || inputNumber > 99) return;

    setConfirmed(true);
    setConfirmedValue(inputNumber);
    setEnteredValue('');
  }

  const handleStartGame = () => {
    onStartGame(confirmedValue);
  }

  let confirmedOutput = null;
  if (confirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text>Tu selección</Text>
        <NumberContainer>{confirmedValue}</NumberContainer>
        <Button title="EMPEZAR JUEGO" color={Colors.primary} onPress={handleStartGame} />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <Text style={styles.title}>Comenzar Juego</Text>
        <Card style={styles.inputContainer}>
          <Text>Elija un número</Text>
          <Input style={styles.input}
            blurOnSubmit
            autoCapitalization={false}
            autoCorrect={false}
            keyboardType="numeric"
            maxLength={2}
            value={enteredValue}
            onChangeText={handleInputNumber}
          />
          <View style={styles.buttonContainer}>
            <Button title="Limpiar" onPress={handleResetInput} color={Colors.accent} style={styles.button} />
            <Button title="Confirmar" onPress={handleConfirmInput} color={Colors.primary} style={styles.button} />
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    padding: 20,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  input: {
    width: 100,
  },
  button: {
    flex: 1,
  },
  summaryContainer: {
    marginVertical: 10,
    padding: 10,
  }
});

export default StartGameScreen;