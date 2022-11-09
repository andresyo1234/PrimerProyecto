import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button,
  Image,
  Switch,
} from 'react-native';
import { useState } from 'react';






export default function App(){
  

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);














  return(
    
    <View style={{marginLeft:45,justifyContent:"flex-start" }}>
      <View style={styles.dato}>
        <Text style={{marginRight:20,fontSize:20,}}>Nombre:</Text>
        <TextInput        
          style={styles.TextInput1}
        />
      </View>
      <View style={styles.dato}>
        <Text style={{marginRight:20,fontSize:20,}}>Apellido:</Text>
        <TextInput        
          style={styles.TextInput1}
        />
      </View> 
      <View style={styles.dato}>
        <Text style={{marginRight:47,fontSize:20,}}>Edad:</Text>
        <TextInput
          style={styles.TextInput2}
        />
      </View>
      <View style={styles.dato}>
        <Text style={{marginRight:54,fontSize:20,}}>Mail:</Text>
        <TextInput
          style={styles.TextInput3}
        />
      </View>
      <View style={styles.dato}>  
        <Text style={{marginRight:54,fontSize:20,}}>Sexo:</Text>
        <Switch
          onValueChange={toggleSwitch}
          value={isEnabled}
          style={{transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }]}}
        />
        <Text style={{marginLeft:10,fontSize:16,color:"grey"}}>{isEnabled?"Mujer":"Hombre"}</Text>
      </View>




    </View>



    
  );
  
}

const styles = StyleSheet.create({
  TextInput1: {
    borderColor: "gray",
    height:"80%",
    width:"40%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize:20
  },
  TextInput2: {
    borderColor: "gray",
    height:"80%",
    width:"20%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize:20
  },
  TextInput3: {
    borderColor: "gray",
    height:"80%",
    width:"65%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    fontSize:15
  },
  dato: {
    flexDirection:"row",
    alignItems:'center',
    marginTop:10
  },
  red: {
    color: 'red',
  },
});

