import { useLocalSearchParams } from "expo-router";
import React, { Component } from "react";
import { Text, View } from "react-native";

const Property = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text> textInComponent </Text>
    </View>
  );
};

export default Property;
