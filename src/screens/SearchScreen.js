import React , {useState}from "react";
import {View,Text,StyleSheet,ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";
const SearchScreen = () =>{
    const [term,setTerm]=useState('')
    const [searchApi,results,errorMessage]=useResults()

    //Filter result by price

    const filterResultByPrice = (price) =>{

        //price === '$'||'$$'||'$$$'
        return results.filter(results =>{
            return results.price===price
        })

    }
    
    
    return (
        <>
            <SearchBar 
            term={term} 
            onTermChange={setTerm}
            onTermSubmit={()=>searchApi(term)}
            />
            {errorMessage? <Text>{errorMessage}</Text>:null}
            
            <ScrollView>
            <ResultsList 
            results={filterResultByPrice('$')} 
            title = "Cost Effective"
            
            />
            <ResultsList 
            results={filterResultByPrice('$$')} 
            title = "Bit Pricier"
            
            />
            <ResultsList 
            results={filterResultByPrice('$$$')} 
            title = "Big Spender"
            
            />
            </ScrollView>
        </>
    )

}

const styles = StyleSheet.create({});

export default SearchScreen;