   import React from 'react';

   import { View, Text, Image } from 'react-native'
   import { Card, ListItem, Button, Icon } from 'react-native-elements'
   
   export default class Home extends React.Component {
   // implemented with Text and Button as children

   render(){
    return(
   <Card
     title='GORILLAZ EN CORRIENTES'
     image={{uri: "https://ep01.epimg.net/elpais/imagenes/2017/03/27/tentaciones/1490603139_309528_1490603385_noticia_normal.jpg"}}>
     <Text style={{marginBottom: 10}}>
       The idea with React Native Elements is more about component structure than actual design. jaja
     </Text>
   </Card>
    )
}
}
