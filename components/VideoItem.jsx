import { Image, StyleSheet, Text, View} from 'react-native';

export default function VideoItem({videoImg, userImg, title, id}) {
    return(
        <View style={styles.videoWrapper}>
            <Image 
                source={{uri: videoImg}}
                style={styles.videoImg}
            />
            <View style={styles.videInfo}>
                <View>
                    <Image
                        source={{uri: userImg}} 
                        style={styles.userImg}
                    />
                </View>
                <View>
                    <Text>{title}</Text>
                    <Text style={styles.infoDetails}>{`user${id} · ${'1,5k views'} · ${'x days ago'}`}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    videoWrapper:{
        marginBottom: 15
    },
    videoImg:{
        height:250,
    },
    videInfo:{
        padding: 10,
        flexDirection: 'row'
    },
    userImg:{
        height: 34,
        width: 34,
        borderRadius: 17,
        marginRight: 10
    },
    infoDetails:{
        color: 'gray',
        fontSize: 13
    }
});  