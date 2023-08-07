import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header() {
    return (
        <View style={styles.header} >
            <View style={styles.logo}>
                <Image 
                source={{uri: 'https://logowik.com/content/uploads/images/899_youtube_2017logo.jpg'}} 
                style={styles.logoIMG}
                />
            </View>
            <View style={styles.options} >
                <Image source={require('../assets/icons/stream.png')} style={styles.option} />
                <Image source={require('../assets/icons/bell.png')} style={styles.option} />
                <Image source={require('../assets/icons/search.png')} style={styles.option} />
                <View style={styles.account}><Text>L</Text></View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        padding: 6,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
    logo:{
        flex: 1,
    },
    logoIMG:{
        height: 25,
        width: 105,
    },
    options:{  
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginRight: 10,
    },
    option:{
        height: 25,
        width: 25,
        marginRight: 20,
    },
    account:{
        backgroundColor: 'orange',
        height: 25,
        width: 25,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });