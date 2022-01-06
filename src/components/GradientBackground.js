import React, { useContext, useEffect } from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientContext } from '../context/GradientContext';
import useFade from '../hooks/useFade'
const GradientBackground = ({children}) => {

    const {colors, prevColors, setLastColors} = useContext(GradientContext)

    const { animatedValue, fade }= useFade(0)

    useEffect(() => {
        fade(1, 300, () => {
            setLastColors(colors)
            fade(0, 1)
        })
    }, [colors]);

    return (
        <View style={{flex: 1}}>
            <LinearGradient 
                colors={[prevColors?.primary, prevColors?.secondary, 'white']}
                style={StyleSheet.absoluteFillObject}
                start={{x: 0.1, y: 0.1}}
                end={{x: 0, y: 0.75}}
            />
            <Animated.View style={{...StyleSheet.absoluteFillObject, opacity: animatedValue}}>
                <LinearGradient 
                    colors={[colors?.primary, colors?.secondary, 'white']}
                    style={StyleSheet.absoluteFillObject}
                    start={{x: 0.1, y: 0.1}}
                    end={{x: 0, y: 0.75}}
                />
            </Animated.View>
            {children}
        </View>
    );
};

export default GradientBackground;