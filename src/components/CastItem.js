import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const CastItem = ({actor}) => {
    return (
        <View style={styles.container}>
            {actor.profile_path && (
                <Image 
                    source={{
                        uri: `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                    }}
                    style={styles.image}
                />
            )}
            <View style={{marginHorizontal: 8}}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>{actor.name}</Text>
                <Text style={{fontSize: 14, opacity: 0.8, color: 'black'}}>{actor.character}</Text>
            </View>
        </View>
    );
};

export default CastItem;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 10,
        // overflow: 'hidden',
        marginBottom: 100,
        backgroundColor: 'white',
        // alignSelf: 'flex-start',
        // borderWidth: 0.5,
        // borderColor: 'rgba(0,0,0,0.2)'
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginRight: 8
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
})