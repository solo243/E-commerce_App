import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { RFValue } from "react-native-responsive-fontsize";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const DetailScreen = ({ route }) => {
  const data = route.params.data;
  console.log(data);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View
          style={{ backgroundColor: "white", width: "100%", height: 100 }}
        ></View>
        <ScrollView>
          <View
            style={{
              width: "90%",
              // backgroundColor: "red",
              height: "100%",
              alignSelf: "center",
            }}
          >
            <Image
              source={data.img}
              style={{ height: height * 0.35, width: "100%" }}
            />
            <View>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    fontSize: RFValue(20),
                    marginTop: moderateScale(18),
                    color: "#393F42",
                    // backgroundColor: "red",
                  }}
                >
                  {data.id}
                </Text>
              </View>
              <Text
                style={{
                  color: "#393F42",
                  fontSize: RFValue(24),
                  marginTop: moderateScale(7),
                  fontWeight: "500",
                }}
              >
                {data.price}
              </Text>
              <View
                style={{
                  height: 1,
                  backgroundColor: "grey",
                  marginTop: moderateScale(20),
                  // color: "red",
                }}
              />
              <Text
                style={{
                  color: "#393F42",
                  marginTop: 10,
                  fontSize: RFValue(18),
                  fontWeight: "500",
                }}
              >
                Description of Product
              </Text>
              <Text
                style={{
                  color: "#393F42",
                  marginTop: 7,
                  fontSize: RFValue(14),
                }}
              >
                {data.dis}
              </Text>
            </View>
          </View>
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            height: moderateScale(70),
            alignItems: "center",
            justifyContent: "space-around",
            backgroundColor: "white",
            gap: 10,
          }}
        >
          <TouchableOpacity
            style={{
              height: moderateScale(50),
              borderRadius: 10,
              backgroundColor: "#67c4a7",
              width: moderateScale(140),
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: RFValue(15) }}>
              Add to cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              height: moderateScale(50),
              backgroundColor: "red",
              borderRadius: 10,
              width: moderateScale(140),
            }}
          ></TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DetailScreen;
