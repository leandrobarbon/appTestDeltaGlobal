import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import MapView from "react-native-maps";
import { Ionicons } from "@expo/vector-icons";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

export default function Home() {
  const [location, setLocation] = useState(null);


  useEffect(()=>{
    (async function(){
        const { status, permissions } = await Permissions.askAsync(Permissions.LOCATION);
        if (status === 'granted') {
            let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
            setLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.000922,
                longitudeDelta: 0.000421
            })
        } else {
            throw new Error('Location permission not granted');
        }
    })();
},[]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={location}
        showsUserLocation={true}
        zoomEnabled={true}
        loadingEnabled={true}
      >
      </MapView>

      <View style={styles.search}>
        <View style={styles.searchSection}>
          <TextInput style={styles.input} placeholder="Endereço" />
          <Ionicons name="ios-locate" size={22.68} color="black" />
        </View>

        <Text style={styles.confirmeLocal}>Confirme o seu local</Text>
        <Text style={styles.textoAjudePrestador}>
          Ajude o seu prestador a localiza-lo mais{"\n"} rapidamente, ajuste sua
          localização acima!
        </Text>

        <TouchableOpacity style={styles.touchConfirme}>
          <Text style={styles.textoTouch}>CONFIRMAR O LOCAL DA OCORRÊNCIA</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Image style={styles.image} source={require("../assets/vw.png")} />

        <View>
          <Text style={styles.placa}>PLACA</Text>
          <Text style={styles.numPlaca}>IXS-8269</Text>
        </View>

        <View>
          <Text style={styles.protocolo}>PROTOCOLO</Text>
          <Text style={styles.numProtocolo}>1457845856894</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },

  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
  },

  search: {
    width: Dimensions.get("window").width,
    height: 337,
    alignItems: "center",

    backgroundColor: "#fff",
  },

  searchSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",

    marginTop: 18,
    paddingLeft: 22,
    paddingRight: 22.13,
    padding: 16,

    borderRadius: 50,
    backgroundColor: "#DFDFDF",
  },

  input: {
    width: Dimensions.get("window").width - 128,
    color: "#091D3C",
    fontFamily: "Barlow_600SemiBold",
  },

  confirmeLocal: {
    marginTop: 35,

    fontSize: 20,
    color: "#091D3C",
    fontFamily: "Barlow_700Bold",
  },

  textoAjudePrestador: {
    marginTop: 14,
    textAlign: "center",

    fontSize: 14,
    color: "#787878",
  },

  touchConfirme: {
    width: 320,
    height: 55,

    marginTop: 24,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 50,
    backgroundColor: "#091D3C",
  },

  textoTouch: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "Roboto_500Medium",
  },

  footer: {
    height: 76,
    flexDirection: "row",
    alignItems: "center",

    backgroundColor: "#F9F9F9",
  },

  image: {
    width: 45,
    height: 45,
    marginLeft: 19,
  },

  placa: {
    marginLeft: 12,

    fontSize: 12,
    color: "#A4A4A4",
    fontFamily: "Barlow_500Medium",
  },

  numPlaca: {
    marginLeft: 12,

    padding: -10,

    fontSize: 27,
    color: "#091D3C",
    fontFamily: "Barlow_700Bold",
  },

  protocolo: {
    marginLeft: 56,

    color: "#A4A4A4",
    fontSize: 12,
    fontFamily: "Barlow_500Medium",
  },

  numProtocolo: {
    marginLeft: 56,
    marginTop: 4,

    paddingHorizontal: 9,
    paddingVertical: 5,
    backgroundColor: "#EFEFEF",

    color: "#091D3C",
    fontSize: 12,
    fontFamily: "Barlow_700Bold",
  },
});
