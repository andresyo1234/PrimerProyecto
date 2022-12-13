
import React, { useState } from "react";
import { Text, View,FlatList,StyleSheet,StatusBar,Image,ScrollView, TextInput, Button  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Stack = createNativeStackNavigator();


function BusquedaStack(){
return(

  <Stack.Navigator initialRouteName="Search">
    <Stack.Screen name="Search" component={SearchScreen} options={{headerShown: false}} />
    <Stack.Screen name="List" component={ListScreen} />
  </Stack.Navigator>
  )
}

function SearchScreen({ navigation }) {
  var re = '^[0-9\b]+$';
  const[validateValue,setValidateValue] = useState("null")
  const[texto,setTexto] = useState("")

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{margin:20}}>
        <Text style={{marginBottom:50 }}> Filtre aqui por la edad</Text>
        <Text>Edad</Text>  
        <TextInput  
          style={{ height: 40, borderColor: 'gray', borderWidth: 1,marginBottom:20 }}
          onChangeText= {   
            (value)=>setValidateValue(value)
          }
        />
        <Text>{texto}</Text>
        <Button
          title="Buscar"
          onPress= {()=>{   
            validateValue.match(re)?
            (navigation.navigate('List',{Edad: validateValue}),setTexto("")):setTexto("edad no correcta")
            }
          }
        />
      </View>
    </View>
  ); 
}

const Item = ({ title ,edad ,nacionalidad  }) => (
  <View >
    <Text style={{color:"black",fontSize:20}}>{title}</Text>
    <Text style={{color:"black",fontSize:20}}>{edad}</Text>
    <Text style={{color:"black",fontSize:20,marginBottom:20}}>{nacionalidad}</Text>
  </View>
);

function ListScreen({ route }){

  const Data=[ 
    {
      id: '001',
      nombre: 'Antonio Muñiz',
      edad: 10,
      nacionalidad: 'España'
    },
    {
      id: '002',
      nombre: 'Federica Ortiz',
      edad: 45,
      nacionalidad: 'Francia'
    },
    {
      id: '003',
      nombre: 'Pedro Danta',
      edad: 31,
      nacionalidad: 'España'
    },
    {
      id: '004',
      nombre: 'Manuel Berral',
      edad: 25,
      nacionalidad: 'Portugal'
    },
    {
      id: '005',
      nombre: 'Alejandro Baena',
      edad: 56,
      nacionalidad: 'Alemania'
    },
    {
      id: '006',
      nombre: 'Luis Capitán',
      edad: 39,
      nacionalidad: 'España'
    }
  ]

  const {Edad} = route.params;
  const valor = Data.filter(item =>item.edad<parseInt(Edad))
  const renderItem = ({ item }) => (
    <Item title={item.nombre} edad={item.edad} nacionalidad={item.nacionalidad}/>
  );
  return(
  
    <View>
      <Text style={{color:"black",fontSize:25,marginBottom:20}}>Usuarios menores de {Edad} años</Text>
      <FlatList
        data={valor}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

function PhoneScreen() {
  return (
    <ScrollView >
      <View style={{alignItems:"center", paddingBottom:20}}>
        <Image style={{width:300,height:300, margin:20}} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4EtHL3y-70A6flhP_cH_RAYj3ESzjkzKVsw&usqp=CAU"  }}/>
        <Text style={{textAlign:"center"}}>El Nokia 3310 es un teléfono móvil o GSM de dos bandas: GSM 900/1800. Fue lanzado en el primer trimestre del año 2000, reemplazando al popular Nokia 3210 de forma satisfactoria y rentable, siendo uno de los teléfonos más populares hasta ahora, con más de 100 millones de unidades vendidas en todo el mundo.</Text>
        <Image style={{width:300,height:500, margin:20}} source={{uri:"https://i.ebayimg.com/images/a/(KGrHqZHJC4F!mtB8ctZBQhEbn6(BQ~~/s-l600.jpg"  }}/>
        <Text style={{textAlign:"center"}}>El Samsung Galaxy S III mini es un teléfono inteligente de fabricado por Samsung, que dispone del sistema operativo Android. Samsung que anunció su salida al mercado en octubre del año 2012 y finalmente salió al público en noviembre del mismo año. El modelo se lanzó en 3 versiones diferentes</Text>
        <Image style={{width:300,height:300, margin:20}} source={{uri:"https://graffica.info/wp-content/uploads/iPhone_5_01.jpg"  }}/>
        <Text style={{textAlign:"center"}}>El iPhone 5 es un teléfono inteligente de gama alta desarrollado por Apple Inc. Fue presentado como la sexta generación de iPhone el 12 de septiembre de 2012,1​ siendo el sucesor del iPhone 4s. Presenta un sistema operativo IOS 6</Text>
      </View>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Busqueda') {
              iconName = focused
                ? 'ios-search-sharp'
                : 'ios-search-outline';
            } else if (route.name === 'Phone') {
              iconName = focused ? 'ios-phone-portrait-sharp' : 'ios-phone-portrait-outline';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Phone" component={PhoneScreen} />
        <Tab.Screen name="Busqueda" component={BusquedaStack} options={{ title: 'Busqueda' }} />
        
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}


