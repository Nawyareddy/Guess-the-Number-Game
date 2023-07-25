import { View, Text, Pressable, StyleSheet } from 'react-native';

const PrimaryButton = ({ children,onPress }) => {

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: '#4A55A2' }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonInnerContainer: {
    backgroundColor: '#75C2F6',
    paddingHorizontal: 16,
    paddingVertical: 10,
    elevation: 3,
  },
  buttonOuterContainer: {
    borderRadius: 25,
    margin: 4,
    overflow: 'hidden',
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.7,
  },
});

export default PrimaryButton;
