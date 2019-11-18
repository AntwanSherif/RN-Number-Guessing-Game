import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const startGameHandler = selectedNumber => setUserNumber(selectedNumber);
  const gameOverHandler = numberOfRounds => setGuessRounds(numberOfRounds);

  const restartGameHandler = () => {
    setGuessRounds(0);
    setUserNumber(null);
  }

  let content;

  if (userNumber && guessRounds <= 0) {
    content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
  } else if (guessRounds) {
    content = <GameOverScreen numberOfRounds={guessRounds} userNumber={userNumber} onRestart={restartGameHandler} />;
  } else {
    content = <StartGameScreen onStartGame={startGameHandler} />;
  }


  return (
    <View style={styles.container}>
      <Header title='Guess a Number' />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
