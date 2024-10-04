import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; 


const Navigator: React.FC = () => {
    return (
        <View className="flex flex-row items-center justify-between p-3 bg-black ">
            <Image 
            className='h-6 w-10 px-1 bg-black'
                source={require('../../../assets/RideHub_logo (2).png')} 
            />
            <TouchableOpacity className='  ' >
                <Icon className=' cursor-pointer' name="menu" size={20} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

export default Navigator;
