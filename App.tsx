import * as React from 'react';
import { NavigationContainer, useNavigation,DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/Pages/Home/Home';
import BikesScreen from './src/Pages/OurBilke/OurBike';
import ShopScreen from './src/Pages/Shop/Shop';
import './global.css';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import Icon  from 'react-native-vector-icons/Icon';
import Icon from "react-native-vector-icons/Entypo";
import DrawerContent from './src/Pages/DrawerContent/DrawerContant';
import { Image } from 'react-native';




const StackNav = () => {
  const Stack = createStackNavigator();
const Navigation = useNavigation();

  return (
    <Stack.Navigator screenOptions={{
      
      headerRight:()=>{
        return(
          <Icon onPress={()=> Navigation.dispatch(DrawerActions.openDrawer)}  name='menu' size={30} color={'#fff'}></Icon>
        )
      }
    }} initialRouteName="Home">

      <Stack.Screen name="Home" component={HomeScreen}
       options={{
        headerStyle: {
          backgroundColor: '#020202',
        },
        headerTitle: () => (
          <Image 
          className='w-20 h-10'
          source={require('./assets/png/RideHub_logo (2).png')} />
        ),
        headerTitleAlign: 'left', 
      }}
      />
      <Stack.Screen name="OurBike" component={BikesScreen} />
      <Stack.Screen name="Shop" component={ShopScreen} />

    </Stack.Navigator>

  )
}
const DrawerNav = () => {

  const Drawer = createDrawerNavigator();

  return (

    <Drawer.Navigator 
    drawerContent={props=><DrawerContent></DrawerContent>}
    screenOptions={{
      headerShown:false
    }}>
      <Drawer.Screen name='Home' component={StackNav}  ></Drawer.Screen>
    </Drawer.Navigator>

  )
}



export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav></DrawerNav>
    </NavigationContainer>
  );
}
