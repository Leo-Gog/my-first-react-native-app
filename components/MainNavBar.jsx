import {  Image, StyleSheet, Text, View} from 'react-native';

export default function MainNavBar() {
    return(
        <View style={styles.navOptionsWrapper}>
            <View style={styles.navOptionWrapper}>
                <Image source={require('../assets/icons/home.png')} style={styles.img} />
                <Text style={styles.btnTitle}>Home</Text>
            </View>
            <View style={styles.navOptionWrapper}>
                <Image source={require('../assets/icons/shorts.png')} style={styles.img} />
                <Text style={styles.btnTitle}>Shorts</Text>
            </View>
            <View style={[styles.plusBTN]}>
                <Text style={styles.plus}>+</Text>
            </View>
            <View style={styles.navOptionWrapper}>
                <Image source={require('../assets/icons/subscription.png')} style={styles.img} />
                <Text style={styles.btnTitle}>Subscriptions</Text>
            </View>
            <View style={styles.navOptionWrapper}>
                <Image source={require('../assets/icons/library.png')} style={styles.img} />
                <Text style={styles.btnTitle}>Library</Text>
            </View>
        </View>
    )

}

const styles = StyleSheet.create({
    navOptionsWrapper:{
        // position: 'absolute',
        // bottom:0,
        // // right:0,
        zIndex:1,
        height: 20, 
        flexDirection: 'row', 
        justifyContent:'space-around',
        // alignSelf:'flex-end'
    },
    navOptionWrapper:{
        alignItems: 'center'
    },
    img:{
        height: 18,
        width: 18
    },
    plusBTN: {
        height: 35,
        width: 35,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 17.5,
        alignItems: 'center',
    },
    plus:{
        fontSize: 24

    },
    btnTitle:{
        marginTop:5,
        fontSize: 10,
    }
});  