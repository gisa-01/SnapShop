import { Pressable, StyleSheet, Text, View, TextStyle } from 'react-native'

type buttonProps = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  style?: TextStyle;
};

const Button = ({ title, onPress, backgroundColor, style }: buttonProps) => {
  return (
    <Pressable style={[
      styles.button, 
      backgroundColor && {backgroundColor}
      ]} 
      onPress={onPress}>
      <Text style={[styles.title, style]}>{title}</Text>
    </Pressable>
    
  )
}

export default Button

const styles = StyleSheet.create({
  button: {
    width: 335,
    height: 61,
    borderRadius:15,
    alignItems: 'center',
    justifyContent:'center'
  },
  title: {
    color: '#F3F3F3',
    fontSize:24
  }
})