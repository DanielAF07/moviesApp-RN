import ImageColors from "react-native-image-colors"

export const getImageColors = async (uri, key) => {
    const colors = await ImageColors.getColors(uri, {
        cache: true,
        key
    })

    let primary
    let secondary

    if(colors.platform === 'android'){
        primary = colors.average
        secondary = colors.vibrant
    } else {
        primary = colors.background
        secondary = colors.detail
    }

    return [primary, secondary]
}