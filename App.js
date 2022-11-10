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
  Keyboard 
} from 'react-native';
import { useState } from 'react';






export default function App(){
  
  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  var reg2 = /^[0-9\b]+$/
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [nombre,setNombre] =useState("");
  const [apellido,setApellido] =useState("");
  const [edad,setEdad] =useState("");
  const [mail,setMail] =useState("");
  const [textosal,setTextosal]=useState();
  const [enviado,setEnviado]=useState(false);
  













  return(
    <View style={{marginLeft:45,justifyContent:"flex-start" }}>
      <View style={styles.dato}>
        <Text style={{marginRight:20,fontSize:20,}}>Nombre:</Text>
        <TextInput
          style={styles.TextInput1}
          required
          onChangeText={(nombre)=> setNombre(nombre)}
        />
      </View>
      <View style={styles.dato}>
        <Text style={{marginRight:20,fontSize:20,}}>Apellido:</Text>
        <TextInput  
                
          style={styles.TextInput1}
          required
          onChangeText={(apellido)=> setApellido(apellido)}
        />
      </View> 
      <View style={styles.dato}>
        <Text style={{marginRight:47,fontSize:20,}}>Edad:</Text>
        <TextInput
          style={styles.TextInput2}
          required
          onChangeText={(edad)=> setEdad(edad)}
        />
      </View>
      <View style={styles.dato}>
        <Text style={{marginRight:54,fontSize:20,}}>Mail:</Text>
        <TextInput
          style={styles.TextInput3}
          required
          onChangeText={(mail)=> setMail(mail)}
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
      <View style={{width:300,marginTop: 30}}>
        <Button
          title= 'Enviar'
          onPress={() =>
            {
              Keyboard.dismiss()
              if(!enviado){
                if(nombre === "" || apellido === "" || edad===""|| mail===""){
                  alert('por favor rellene todos los campos')
                }else {
                  if (!mail.match(reg) || !edad.match(reg2)){
                    if(!mail.match(reg) && !edad.match(reg2)){
                      alert('El mail tine que estar estandarizado y la edad tine que ser un numero')
                    }else if(!mail.match(reg)){
                      alert('El mail tine que estar estandarizado')
                    }else{
                      alert('La edad tine que ser un numero')
                    }
                  }else{
                    setTextosal( 'Mi nombre es '+nombre+' '+apellido+' con edad '+edad+' y mi mail es '+mail+' ,soy '+(isEnabled?"Mujer":"Hombre"))
                    setEnviado(true)
                    
                  
                  }           
                } 
              }else{
                alert('El formulario ya ha sido enviado, si quiere enviar otro recarge la app')
              }
            }
          }
            
            


        />
      </View>

      <Text style={styles.dato}>{textosal}</Text>
      <Image
       source={require('./imgs/mondongo.jpg')}
       style={{width:250, height:250,opacity:enviado?100:0 }}

       
      
      />


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

