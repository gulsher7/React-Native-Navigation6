//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComp from '../../Components/HeaderComp';

const ProductDetails = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <SafeAreaView>
                <HeaderComp
                    goBack={() => navigation.goBack()}
                />
                <View style={{ margin: 24 }}>
                    <Text>ProductDetails</Text>
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
});

export default ProductDetails;
