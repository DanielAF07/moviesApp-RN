import { useRef } from 'react';
import { Animated } from 'react-native';

const useFade = (initValue) => {
    
    const animatedValue = useRef( new Animated.Value(initValue) ).current

    const fade = (toValue, duration = 1000, callback) => {
        Animated.timing(animatedValue, {
            toValue,
            duration,
            useNativeDriver: true
        }).start(() => callback ? callback() : null)
    }
    
    return {
        animatedValue,
        fade
    }
};

export default useFade;