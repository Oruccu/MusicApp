import { StyleSheet } from 'react-native'
export default StyleSheet.create({
    container: {
        margin: 5,
        padding: 5,
       //backgroundColor:'red',
       flexDirection:'row'
        

    },
    image: {
        height: 100,
        width: 100,
        borderRadius: 50,
    },
    inner_container: {
        margin: 10,
        //flexDirection:'row',
        //backgroundColor:'yellow',
    },
    about_container: {
        flexDirection: 'row',
        //backgroundColor: 'blue',
        //flex:1,
        alignItems:'center',

    },
    artist: {
        paddingTop:5,

    },
    year: {
        padding: 5,
        fontSize: 13,
        fontStyle: 'italic',
    },
    body_container: {
        flexDirection: 'row',
    },
    stock: {
        borderWidth: 2,
        borderColor: 'red',
        padding:5,
        borderRadius:5,
    },
    stock_title:{
        color:'red',
    }


});