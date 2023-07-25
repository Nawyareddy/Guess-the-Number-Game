import { View, Image, StyleSheet, Text } from 'react-native';
import Title from '../components/ui/Title';
import PrimaryButton from '../components/ui/PrimaryButton';

const GameOver = ({ userNumber, roundsNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/images.jpg')}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed{' '}
        <Text style={styles.highlightedText}>{roundsNumber}</Text> rounds to
        guess the Number{' '}
        <Text style={styles.highlightedText}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    borderRadius: 150,
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: '#176B87',
    overflow: 'hidden',
    margin: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 20,
  },
  highlightedText: {
    fontFamily: 'open-sans-bold',
    color: '#164B60',
  },
});

export default GameOver;
