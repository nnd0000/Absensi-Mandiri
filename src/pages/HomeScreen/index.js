import { Button, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import * as Location from "expo-location";

const HomeScreen = () => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.error("Izin lokasi tidak diberikan");
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  const getLocation = () => {
    if (location) {
      console.log("Lokasi Anda:", location);
    } else {
      console.log("Lokasi belum tersedia.");
    }
  };

  return (
    <SafeAreaView>
      <Button title="Get Location" onPress={getLocation} />
      <Text>test</Text>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
