import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import PropTypes from 'prop-types';


const GameOverScreen = ({ numberOfRounds, userNumber, onRestart }) => {
    return (
        <View style={styles.container}>
            <Text>Game Over!</Text>
            <Text>Number of rounds: {numberOfRounds}</Text>
            <Text>Number was: {userNumber}</Text>
            <Button title='NEW GAME' onPress={onRestart} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});


GameOverScreen.propTypes = {
    numberOfRounds: PropTypes.number.isRequired,
    userNumber: PropTypes.number.isRequired,
    onRestart: PropTypes.func.isRequired
}

export default GameOverScreen;