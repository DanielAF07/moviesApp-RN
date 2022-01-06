import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const MoviePoster = ({movie, width = 300, height = 420, marginHorizontal = 0}) => {

    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('DetailScreen', movie)}
            activeOpacity={0.8}
            style={{
                width: width,
                height: height,
                marginHorizontal,
                paddingTop: 8,
            }}
        >
            <View style={styles.imageContainer}>     
                <Image 
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                    }}
                    style={styles.image}
                />
            </View>
        </TouchableOpacity>
    );
};

export default MoviePoster;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        borderRadius: 20,
    },
    imageContainer: {
        flex: 1,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        elevation: 6
    }
})