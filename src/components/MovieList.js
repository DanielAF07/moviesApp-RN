import React from 'react';
import { FlatList, Text, View } from 'react-native';
import MoviePoster from './MoviePoster';

const MovieList = ({data, title}) => {
    return (
        <View style={{
            height: 260,
        }}>
            <Text style={{fontSize: 30, fontWeight: 'bold', color: 'black', marginLeft: 10}}>{title}</Text>
            <FlatList 
                data={data}
                renderItem={( {item} ) => <MoviePoster movie={item} width={140} height={200} marginHorizontal={8}/>}
                keyExtractor={(item) => item.id.toString()}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{paddingTop: 8}}
            />
        </View>
    );
};

export default MovieList;