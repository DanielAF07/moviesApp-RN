import React from 'react';
import { Animated, Button, View } from 'react-native';
import useFade from '../hooks/useFade';

const FadeScreen = () => {
    const { animatedValue, fade } = useFade(1)

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'gray'}}>
            <Animated.View 
                style={{
                    width: 150,
                    height: 150,
                    borderWidth: 10,
                    backgroundColor: '#3cb99b',
                    borderColor: 'white',
                    marginBottom: 10,
                    opacity: animatedValue
                }}
            />

            <Button 
                title='Fade In'
                onPress={() => fade(1, 300)}
            />
            <Button 
                title='Fade Out'
                onPress={() => fade(0, 300)}
            />

        </View>
    );
};

export default FadeScreen;