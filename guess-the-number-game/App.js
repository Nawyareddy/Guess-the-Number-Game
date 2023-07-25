import { useState } from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOver from './screens/GameOver';

const App = () => {
  const [userNumber, setUserNumber] = useState();

  const [gameIsOver,setGameIsOver] = useState(true);

  const [guessRounds,setGuessRounds] = useState(0)

  const handlePickNum = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false)
  };

  const handleGameOver = (numberOfRounds) => {
    setGameIsOver(true)
    setGuessRounds(numberOfRounds)
  }

  const handleStartNewGame = () => {
    setUserNumber(null)
    setGuessRounds(0)
  }

  let screen = <StartGameScreen onPickNumber={handlePickNum} />;

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={handleGameOver}/>;
  }

  if(gameIsOver && userNumber){
    screen = <GameOver userNumber={userNumber} roundsNumber={guessRounds} onStartNewGame={handleStartNewGame}/>
  }

  return (
    <LinearGradient colors={['#FF6666', '#FF8989']} style={styles.rootScreen}>
      <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});

export default App;
