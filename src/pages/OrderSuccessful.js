import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { evoScrollContainer } from './../styles/commonStyles';
import colors from '../styles/colors';

const OrderSuccessful = () => {
    return (
        <ScrollView style={evoScrollContainer}>
            <View style={styles.orderImgWrapper}>
                <Image source={require('./../assets/icons/check.png')} style={styles.orderSuccessImg} />
            </View>
            <Text style={styles.orderPlacedTxt}>Order No. #43689172 </Text>
            <Text style={styles.orderPlacedTxt}>placed successfully </Text>
            <Button icon="directions" mode="text"
                theme={{ colors: { primary: colors.primary } }}
                onPress={() => console.log("Track Order")}>
                Track Order
            </Button>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    orderImgWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        minHeight: 400
    },
    orderSuccessImg: {
        width: 220,
        height: 220,
        alignSelf: 'center'
    },
    orderPlacedTxt: {
        color: colors.secondary,
        fontSize: 20,
        textAlign: 'center'
    }
})

export default OrderSuccessful;