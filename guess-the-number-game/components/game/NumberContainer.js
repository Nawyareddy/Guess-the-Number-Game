import { View, Text, StyleSheet } from 'react-native';

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: '2',
    borderColor: '#461959',
    borderRadius: 10,
    margin:20,
    padding: 15,
    alignItems:'center',
    justifyContent:'center'
  },
  numberText:{
    color:'#071952',
    fontSize:35,
    fontWeight:'bold'
  }
});

export default NumberContainer;
