import { View, StyleSheet, Text } from "react-native"

const styling = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    fontSize: '20px',
    color: 'white'
  }
})

const Header = () => {
  return (
    <View style={styling.container}>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis autem facilis dolorum consequatur saepe accusamus reprehenderit, deserunt aliquam ex, quos quam ullam error. Doloremque ad odio officia. Eveniet, ut rerum!
      </Text>
    </View>
  )
}

export default Header;