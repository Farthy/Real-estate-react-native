import icons from "@/constants/icons";
import { getPropertyById } from "@/lib/appwrite";
import { router, useLocalSearchParams } from "expo-router";
import React, { Component, useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Models } from "react-native-appwrite";
import { SafeAreaView } from "react-native-safe-area-context";

const Property = () => {
  const { id } = useLocalSearchParams<{ id: string }>();

  const [propertyDetails, setPropertyDetails] =
    useState<Models.Document | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      getPropertyById(id)
        .then((data) => {
          setPropertyDetails(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching property details:", error);
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <ActivityIndicator size="large" className="text-primary-300 mt-5" />;
  }

  if (!propertyDetails) {
    return <Text>Property not found.</Text>;
  }
  console.log("Gallery", propertyDetails.gallery);
  const { height } = Dimensions.get("window");
  return (
    <SafeAreaView>
      <ScrollView className="">
        <ImageBackground
          source={{ uri: propertyDetails.image }}
          style={{ height: height / 2, width: "100%" }}
          resizeMode="cover"
        >
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
          />

          <View className="mt-5 px-7 flex flex-row justify-between items-center">
            <TouchableOpacity
              onPress={() => router.back()}
              className="flex flex-row bg-primary-200 rounded-full size-11 items-center justify-center"
            >
              <Image source={icons.backArrow} className="size-8" />
            </TouchableOpacity>
            <View className="flex flex-row justify-between items-center gap-6">
              <Image
                source={icons.heart}
                className="w-10 h-10"
                tintColor="#191D31"
              />
              <Image source={icons.send} className="size-10" />
            </View>
          </View>
        </ImageBackground>
        <View className="mt-5 px-8  ">
          <View className="border-2 border-gray-400 px-2 py-4  border-dotted">
            <View className="flex flex-row justify-between items-center">
              <Text className="text-black-300 text-3xl font-rubik-extrabold">
                {propertyDetails.name}
              </Text>
              <Text className="text-black-300 text-2xl font-rubik">
                Ksh {propertyDetails.price}
              </Text>
            </View>

            <View className="flex flex-row items-center mt-7 gap-10">
              <Text className="text-primary-300 text-xl uppercase  font-rubik-medium">
                {propertyDetails.type}
              </Text>
              <View className="flex flex-row items-center gap-5">
                <Image source={icons.star} className="size-7" />
                <Text className="text-gray-600 text-xl font-medium">
                  {propertyDetails.rating.toFixed(1)} (
                  {propertyDetails.reviews.length} reviews)
                </Text>
              </View>
            </View>
            <View className="flex flex-row justify-between items-center mt-6">
              <View className="flex flex-row items-center gap-6">
                <Image source={icons.bed} className="size-7" />
                <Text>{propertyDetails.bedrooms} Beds</Text>
              </View>
              <View className="flex flex-row items-center gap-6">
                <Image source={icons.bath} className="size-7" />
                <Text>{propertyDetails.bathrooms} Bath</Text>
              </View>
              <View className="flex flex-row items-center gap-6">
                <Image source={icons.area} className="size-7" />
                <Text>{propertyDetails.area} sqft</Text>
              </View>
            </View>
          </View>
          <View className="mt-12 px-2">
            <View className="border-2 border-gray-400 px-2 py-4  border-dotted">
              <Text className="text-3xl font-rubik-bold">Agent</Text>
              <View className="flex flex-row justify-between items-center mt-5">
                <View className="flex flex-row gap-5 items-center ">
                  <Image
                    source={{ uri: propertyDetails.agent.avatar }}
                    className="w-20 h-20 rounded-full"
                  />
                  <View>
                    <Text className="text-lg font-rubik-bold">
                      {propertyDetails.agent.name}
                    </Text>
                    <Text className="text-gray-500 font-rubik-medium">
                      {propertyDetails.agent.email}
                    </Text>
                  </View>
                </View>
                <View className="flex flex-row gap-5">
                  <Image source={icons.chat} className="size-8" />
                  <Image source={icons.phone} className="size-8" />
                </View>
              </View>
            </View>
          </View>
          <View className="mt-8 px-5 mb-10">
            <View className="border-2 border-gray-400 px-2 py-4  border-dotted">
              <Text className="font-rubik-extrabold text-3xl text-black">
                Overview
              </Text>
              <Text className="text-gray-500 text-xl">
                {propertyDetails.description}
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-1 justify-end items-center mb-4">
          <TouchableOpacity className="bg-blue-500 py-3 px-12 rounded-md shadow-lg">
            <Text className="text-white font-semibold text-lg">Buy Now</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Property;
