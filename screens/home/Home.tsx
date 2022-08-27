import React, {useEffect} from 'react';
import {useNavigation} from "@react-navigation/native";
import {Image, SafeAreaView, Text, View} from "react-native";
import {ChevronDownIcon} from "react-native-heroicons/solid";

const logo = require('../../assets/images/swift-eats-logo.png')

const Home = () => {
    const navigation = useNavigation()

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);


    return (
        <SafeAreaView>
            {/* Header */}
            <View>
                <Image source={logo} className={'w-9 h-9 rounded-full'}/>

                <View>
                    <Text>Deliver now!</Text>
                    <Text>Current Location</Text>
                </View>
                <View>
                    <ChevronDownIcon/>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Home;
