import React , {useState,useEffect} from "react";
import { Text,View,Image,StyleSheet,FlatList } from "react-native";
import yelp from '../api/yelp'
const ResultsShowScreen = ({navigation}) =>{
    const[result,setResult]=useState(null)
    const id = navigation.getParam('id')

    const getResult = async(id) =>{
        const respone = await yelp.get(`/${id}`)
        setResult(respone.data)
    }
    useEffect (()=>{
        getResult(id)
    },[])

    if(!result){
        return null;
    }
    
    return <View>
        <Text style={styles.text}>{result.name}</Text>
        <FlatList
            data={result.photos}
            keyExtractor={(photo)=>photo}
            renderItem={({item})=>{
                return <Image style={styles.image} source={{uri:item}}/>
            }}
        
        />
    </View>
}

const styles = StyleSheet.create({
    image: {
        height : 200,
        width:300,
        borderRadius:4,
        marginBottom:5,
        marginLeft:15
    },

    text : {
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:5,
        fontWeight:'bold',
        

    }

})

export default ResultsShowScreen;