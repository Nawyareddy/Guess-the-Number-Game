import {Text,StyleSheet} from 'react-native';

const Title = ({children}) => {
  return(
 <Text style={styles.title}>{children}</Text>
  )
}
const styles = StyleSheet.create({
  title:{
    fontSize:30,
    fontWeight:'bold',
    color:'#000000',
    textAlign:'center',
    borderColor:'#000000',
    borderWidth:2,
    padding:10
  }
})
export default Title;