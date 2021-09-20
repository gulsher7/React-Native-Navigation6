
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ButtonComp = ({
    btnText,
    onPress
}) => {
    return (
        <TouchableOpacity
         style={styles.btnStyle}
         onPress={onPress}
         >
            <Text style={{ fontSize: 16, color: 'blue' }}>{btnText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btnStyle: {
        backgroundColor: '#ADD8E6',
        height: 42,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    }
});
export default ButtonComp;
