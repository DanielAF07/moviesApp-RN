import { useNavigation, useRoute } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View, ScrollView, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import MovieDetails from '../components/MovieDetails';
import useMovieDetails from '../hooks/useMovieDetails'

const screenHeight = Dimensions.get('screen').height

const DetailScreen = () => {
    const { bottom } = useSafeAreaInsets()
    const { params: movie} = useRoute()
    const { isLoading, cast, movieFull } = useMovieDetails(movie.id)
    const navigation = useNavigation()
    const { top: safeAreaTop } = useSafeAreaInsets()
    return (
        <>
            <TouchableOpacity 
                style={{...styles.backButton, top: safeAreaTop + 10}}
                onPress={() => navigation.pop()}
            >
                <Icon 
                    name="arrow-back-outline"
                    size={30}
                    style={styles.backButtonIcon}
                    color="black"
                />
            </TouchableOpacity>
            <ScrollView contentContainerStyle={{paddingBottom: bottom}} showsVerticalScrollIndicator={false}>
                <View style={styles.imageBorder}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{
                                uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                            }}
                            style={styles.image}
                            />
                    </View>
                </View>
                <View style={styles.marginContainer}>
                    <Text style={styles.subTitle}>{movie.original_title}</Text>
                    <Text style={styles.title}>{movie.title}</Text>
                </View>
                {isLoading 
                    ? <ActivityIndicator size={30} style={{marginTop: 20}}/>
                    : <MovieDetails movieFull={movieFull} cast={cast} />
                }
            </ScrollView>
        </>
    );
};

export default DetailScreen;

const styles = StyleSheet.create({
    imageContainer: {
        width: '100%',
        height: screenHeight * 0.7,
        
        borderBottomEndRadius: 18,
        borderBottomStartRadius: 18,
        overflow: 'hidden',
    },
    imageBorder: {
        flex: 1,
        borderBottomEndRadius: 18,
        borderBottomStartRadius: 18,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.28,
        shadowRadius: 3,
        elevation: 7,
    },
    image: {
        flex: 1,
    },
    marginContainer: {
        marginHorizontal: 15,
        marginTop: 20
    },
    subTitle: {
        fontSize: 16,
        color: 'black',
        opacity: 0.8
    },
    title: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },
    backButton: {
        width: 35,
        height: 35,
        borderRadius: 100,
        justifyContent: 'center',
        position: 'absolute',
        // top: safeAreaTop + 20,
        left: 20,
        backgroundColor: 'white',
        zIndex: 999
    },
    backButtonIcon: {
        alignSelf: 'center',
        left: 1
    }
})