import React from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


type RootStackParamList = {
    Home: undefined;
    OurBike: undefined;
    Shop: undefined;
};


const DrawerList = [
    { icon: 'home-outline', label: 'Home', navigateTo: 'Home' },
    { icon: 'bicycle-outline', label: 'Our Bike', navigateTo: 'OurBike' },
    { icon: 'cart-outline', label: 'Shop', navigateTo: 'Shop' },
];


const DrawerLayOut = ({ icon, label, navigateTo }) => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>(); // Add type for navigation

    return (
        <DrawerItem
            icon={({ color, size }) => (
                <Icon name={icon} color={color} size={size} />
            )}
            label={label}
            onPress={() => {
                navigation.navigate(navigateTo as keyof RootStackParamList); // Cast the route name properly
            }}
        />
    );
};


const DrawerItems = () => {
    return (
        <View>
            {DrawerList.map((item, i) => (
                <DrawerLayOut
                    key={i}
                    icon={item.icon}
                    label={item.label}
                    navigateTo={item.navigateTo}
                />
            ))}
        </View>
    );
};

const DrawerContent = (props) => {
    return (
        <View className='py-6 flex flex-col justify-between h-full'>
            <ScrollView className='flex-grow'>
                <View className='flex flex-row items-center gap-3 px-3 pb-2 border-b-2'>
                    <Image
                        className='rounded-full border h-10 w-10'
                        source={{
                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                        }}
                    />
                    <Text>UserName</Text>
                </View>

                {/* Drawer items */}
                <DrawerItems />
            </ScrollView>

            {/* Press Here button, stays at the bottom */}
            <View className='flex flex-row items-center gap-3 px-3 pb-2 border-t-2'>
                <TouchableOpacity>
                    <Text>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default DrawerContent;
