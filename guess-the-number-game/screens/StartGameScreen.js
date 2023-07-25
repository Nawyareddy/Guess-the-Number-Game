import { useState } from 'react';
import { View, TextInput, StyleSheet, Alert, Text } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';

const StartGameScreen = ({ onPickNumber }) => {
  const [enteredNum, setEnteredNum] = useState('');

  const handleInputNumber = (enteredText) => {
    setEnteredNum(enteredText);
  };

  const handleResetInput = () => {
    setEnteredNum('');
  };

  const handleConfirmInput = () => {
    const choosenNum = parseInt(enteredNum);
    if (isNaN(choosenNum) || choosenNum <= 0 || choosenNum > 99) {
      Alert.alert('Invalid Number', 'Number has to be from 1 to 99', [
        { text: 'okay', style: 'destructive', onPress: handleResetInput },
      ]);
      return;
    }
    onPickNumber(choosenNum);
  };
  return (
    <View style={styles.mainTitle}>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <Text style={styles.textPlaceholder}>Enter a Number</Text>
        <TextInput
          style={styles.textInputContainer}
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredNum}
          onChangeText={handleInputNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={handleResetInput}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={handleConfirmInput}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainTitle: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
  textPlaceholder: {
    color: '#78C1F3',
    fontSize:18
  },
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    marginTop: 30,
    backgroundColor: '#071952',
    marginHorizontal: 20,
    borderRadius: 10,
    elevation: 4,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
  textInputContainer: {
    height: 50,
    width: 50,
    fontSize: 35,
    borderBottomColor: '#FF9B9B',
    borderBottomWidth: 2,
    color: '#FF9B9B',
    fontWeight: 'bold',
    marginVertical: 8,
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
  },
});

export default StartGameScreen;
