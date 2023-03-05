import { FlatList, Image, Text, useWindowDimensions, View, ViewabilityConfig, ViewToken } from 'react-native'
import React, { Component, useRef, useState } from 'react'
import colors from '../../theme/colors';
import DoublePressable from '../DoublePressable';

interface ICarousel {
    images: string[];
    onDoublePress?: ()=> void;
}

const Carousel = ({images, onDoublePress = ()=> {}}: ICarousel)=>{
    const {width} = useWindowDimensions();
    const [activeImgIndex, setActiveImgIndex] = useState(0);

    const viewabilityConfig: ViewabilityConfig ={
        itemVisiblePercentThreshold: 51,
    }

    const onViewableItemsChanged = useRef(({viewableItems}: {viewableItems: Array<ViewToken>}) =>{
        if(viewableItems.length > 0){
            setActiveImgIndex(viewableItems[0].index || 0)
        }
    })
    return (
        <View>
            <FlatList 
                data={images} 
                renderItem={({item})=> (
                    <DoublePressable onDoublePress={onDoublePress}>
                        <Image source={{uri:item}} style={{width, aspectRatio: 1}}/>
                    </DoublePressable>
                )}
                horizontal
                pagingEnabled={true}
                onViewableItemsChanged={onViewableItemsChanged.current}
                viewabilityConfig={viewabilityConfig}
            />
            <View style={{
                flexDirection: 'row',
                justifyContent: 'center',
                position: 'absolute',
                bottom: 0,
                width: '100%',
            }}>
                {images.map((_, index) => (
                <View 
                    key={index}
                    style={{
                    width: 10,
                    aspectRatio: 1,
                    borderRadius: 5,
                    backgroundColor: activeImgIndex === index ? colors.primary: colors.white,
                    margin: 10,
                    marginHorizontal: 5
                    }}
                />
            ))}
            </View>
        </View>

    )
}

export default Carousel