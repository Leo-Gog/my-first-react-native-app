import { useEffect, useState } from 'react';
import {  Alert, FlatList, StyleSheet } from 'react-native';
import VideoItem from './VideoItem';

export default function VideoList() {
    const [data, setData] = useState()
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/photos/')
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch(err => Alert(err))
    },[])
    
    return(
        <FlatList
            data={data}
            renderItem={({item}) => 
                <VideoItem 
                    videoImg={item.url}
                    userImg={item.thumbnailUrl}
                    id={item.id}
                    title={item.title}
                />
            }
            keyExtractor={(item) => item.id}
        />
    )
}

const styles = StyleSheet.create({
    
});  