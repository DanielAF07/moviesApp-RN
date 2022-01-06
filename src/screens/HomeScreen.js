import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel'
import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, ScrollView, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import MoviePoster from '../components/MoviePoster';
import useMovies from '../hooks/useMovies';
import MovieList from '../components/MovieList';
import GradientBackground from '../components/GradientBackground';
import ImageColors from 'react-native-image-colors'
import { getImageColors } from '../helpers/getColors';
import { GradientContext } from '../context/GradientContext';


const HomeScreen = () => {
    const navigation = useNavigation()
    const { top, bottom } = useSafeAreaInsets()
    const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies()
    const { width: windowWidth, height: windowHeight } = useWindowDimensions()
    const { setMainColors } = useContext(GradientContext)

    const getPosterColors = async (index) => {
        const uri = `https://image.tmdb.org/t/p/w500${nowPlaying[index].poster_path}`
        const [primary = 'black', secondary = "black"] = await getImageColors(uri, nowPlaying[index].id)
        setMainColors({primary, secondary})
    }

    useEffect(() => {
        if(nowPlaying?.length){
            getPosterColors(0)
        }
    }, [nowPlaying]);

    if(isLoading){
        return (
            <GradientBackground>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                    <ActivityIndicator size={50} color="gray" />
                </View>
            </GradientBackground>
        )
    }

    return (
        <GradientBackground>
            <ScrollView
                contentContainerStyle={{paddingTop: top + 12, paddingBottom: bottom}}
                showsVerticalScrollIndicator={false}
            >
                {/* Carousel */}
                <View style={{
                    height: 450
                }}>
                    <Carousel 
                        data={nowPlaying}
                        renderItem={( {item} ) => <MoviePoster movie={item} />}
                        sliderWidth={windowWidth}
                        itemWidth={300}
                        inactiveSlideOpacity={Platform.OS === 'ios' ? 0.6 : 0.9}
                        onSnapToItem={(index) => getPosterColors(index)}
                    />
                </View>

                {/* Popular */}
                <MovieList 
                    data={popular}
                    title='Popular'
                />
                <MovieList 
                    data={topRated}
                    title='Top Rated'
                />
                <MovieList 
                    data={upcoming}
                    title='Upcoming'
                />
            </ScrollView>
        </GradientBackground>
    );
};

export default HomeScreen;