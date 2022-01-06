import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import currencyFormatter from 'currency-formatter';
import CastItem from './CastItem';

const MovieDetails = ({movieFull, cast}) => {
    return (
        <>
            <View style={styles.container}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon 
                        name="star-outline"
                        color="gray"
                        size={16}
                        />
                    <Text style={{color: 'black'}}> {movieFull.vote_average} - </Text>
                    <Text style={{color: 'black'}}>{movieFull.genres.map( g => g.name).join(', ')}</Text>
                </View>

                {/* Historia */}
                <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 16, marginBottom: 4, color: 'black'}}>Historia</Text>
                <Text style={styles.overview}>{movieFull.overview}</Text>
                {/* Presupuesto */}
                <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 16, marginBottom: 4, color: 'black'}}>Presupuesto</Text>
                <Text style={styles.overview}>{currencyFormatter.format(movieFull.budget, {code: 'USD'})}</Text>
                {/* Cast */}
                <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 16, marginBottom: 4, color: 'black'}}>Cast</Text>
            </View>
            <FlatList 
                data={cast}
                renderItem={( {item} ) => <CastItem actor={item}/>}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{paddingTop: 3, paddingHorizontal: 15}}
            />
        </>
    );
};

export default MovieDetails;

const styles = StyleSheet.create({
    container: {
        marginTop: 6,
        marginHorizontal: 15,
    },
    overview: {
        color: 'black',
        textAlign: 'justify'
    },
    
})