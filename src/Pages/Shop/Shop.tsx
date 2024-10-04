import { Button, Text, View } from 'react-native';

const Shop = (props) => {
    console.log(props);
    return (
        <View>
     
        <Text className='text-4xl'>Shop Screen</Text>
        <Button
        title="Go to home"
        onPress={()=>props.navigation.navigate('Home')}
      />
      </View>
    );
};

export default Shop;