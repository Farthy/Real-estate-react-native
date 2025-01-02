import { Link } from "expo-router";
import React from "react";
import { Text, StyleSheet, View } from "react-native";

const index = () => {
  return (
    <View>
      <Text className="font-bold text-xl my-10">WElcome to Restate</Text>
      <Link href="/signin"> SignIn</Link>
      <Link href="/explore"> Explore</Link>
      <Link href="/Profile"> Profile</Link>
      <Link href="/properties/1"> Properties</Link>
    </View>
  );
};

export default index;
