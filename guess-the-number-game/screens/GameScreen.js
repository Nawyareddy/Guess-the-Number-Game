import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert, FlatList } from 'react-native';
import Title from '../components/ui/Title';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import GuessLogItem from '../components/game/GuessLogItem';

const handleGenerateRandom = (min, max, exclude) => {
  const randomNum = Math.floor(Math.random() * (max - min) + min);

  if (randomNum === exclude) {
    handleGenerateRandom(min, max, exclude);
  } else {
    return randomNum;
  }
};

let minBoundary = 1;
let maxBoundary = 100;

const GameScreen = ({ userNumber, onGameOver }) => {
  const initialGuess = handleGenerateRandom(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  const handleGuessNext = (direction) => {
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'higher' && currentGuess > userNumber)
    ) {
      Alert.alert('You Know that is wrong guess', [
        { text: 'sorry', style: 'cancel' },
      ]);
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRandomNum = handleGenerateRandom(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNum);
    setGuessRounds((prevGuessRnds) => [newRandomNum, ...prevGuessRnds]);
  };

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.gameScreen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text style={styles.guessText}>Higher or Lower ?</Text>
        <View>
          <PrimaryButton onPress={handleGuessNext.bind(this, 'lower')}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={handleGuessNext.bind(this, 'higher')}>
            +
          </PrimaryButton>
        </View>
      </View>
      <View>
        <View style={styles.listContainer}>
          <FlatList
            data={guessRounds}
            renderItem={(itemData) => (
              <GuessLogItem
                roundNumber={guessRoundsListLength - itemData.index}
                guess={itemData.item}
              />
            )}
            keyExtractor={(item) => item}></FlatList>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    padding: 20,
  },
  guessText: {
    color: '45CFDD',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  listContainer: {
    flex: 1,
    padding: 15,
  },
});

export default GameScreen;
