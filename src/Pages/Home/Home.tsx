
import { Button, Text, View } from 'react-native';

const HomeScreen =(props )=> {
    console.log(props);
  return (
    <View>
     
      <Text className='text-4xl'>Home Screen</Text>
      <Button
        title="Go to shop"
        onPress={()=>props.navigation.navigate('Shop',{id:1234567})}
      />
    </View>
  );
}


export default HomeScreen

