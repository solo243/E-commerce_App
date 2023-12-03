import {
  View,
  Text,
  SafeAreaView,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { RFValue } from "react-native-responsive-fontsize";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import Compney_Card from "../components/Compney_Card";
import Animated from "react-native-reanimated";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const DetailScreen = ({ route }) => {
  const data = route.params.data;
  console.log(data);

  const colors = [
    { colors: "#f5e3df" },
    { colors: "#ececec" },
    { colors: "#e4f2df" },
    { colors: "#d5e0ed" },
    { colors: "#3e3d40" },
  ];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        {/* //TODO:   topbar  */}
        <View style={styles.topbar}>
          <AntDesign name="arrowleft" size={29} color="#393F42" />
          <Text style={styles.detail_pro_text}>Details product</Text>
          <Feather name="shopping-cart" size={26} color="#393F42" />
        </View>
        <View
          style={{ backgroundColor: "lightgrey", width: "100%", height: 1 }}
        />

        <View>
          <Animated.Image
            source={data.img}
            style={styles.product_img}
            sharedTransitionTag="sharedTag"
          />
          {/* //Todo title and 90% container */}
          <View
            style={{
              width: "90%",
              marginTop: moderateScale(11),
              // backgroundColor: "blue",
              alignSelf: "center",
            }}
          >
            <View
              style={{
                // backgroundColor: "red",
                justifyContent: "space-between",
                flexDirection: "row",
              }}
            >
              <Text style={styles.title_pro}>{data.id}</Text>
              <View style={styles.heart_icon_container}>
                <FontAwesome5 name="heart" size={27} color="black" />
              </View>
            </View>
            <Text
              style={{
                fontSize: RFValue(18),
                color: "#393F42",
                fontWeight: "500",
              }}
            >
              {data.price}
            </Text>
            <View style={{ marginTop: 10 }}>
              <ScrollView>
                <Text style={{ fontSize: RFValue(13), color: "#bcbcbc" }}>
                  {" "}
                  Choose the color{" "}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <FlatList
                    data={colors}
                    horizontal
                    renderItem={({ item }) => {
                      return (
                        <View
                          // key={item}
                          style={{
                            height: height * 0.05,
                            borderRadius: 7,
                            marginRight: 20,
                            marginTop: 10,
                            // margin: 10,
                            width: width * 0.135,
                            backgroundColor: "red",
                          }}
                        ></View>
                      );
                    }}
                  />
                </View>

                {/* //TODO compney car  */}
                <Compney_Card />

                <View>
                  <View>
                    <Text
                      style={{
                        fontSize: RFValue(15),
                        color: "#393F42",
                        marginTop: moderateScale(16),
                        fontWeight: "400",
                      }}
                    >
                      Description of product
                    </Text>
                    <Text style={{ marginTop: 10 }}>
                      There are many variations of passages of Lorem Ipsum
                      available, but the majority have suffered alteration in
                      some form, by injected humour, or randomised words which
                      don't look even slightly believable. If you are going to
                      use a passage of Lorem Ipsum, you need to be sure there
                      isn't anything embarrassing hidden in the middle of text.
                      All the Lorem Ipsum generators on the Internet tend to
                      repeat predefined chunks as necessary, making this the
                      first true generator on the Internet. It uses a dictionary
                      of over 200 Latin words, combined with a handful of model
                      sentence structures, to generate Lorem Ipsum which looks
                      reasonable. The generated Lorem Ipsum is therefore always
                      free from repetition, injected humour, or
                      non-characteristic words etc.
                    </Text>
                  </View>
                </View>
                <View style={{ height: 10000 }}></View>
              </ScrollView>
              {/* <Viewstyle></Viewstyle> */}
            </View>
          </View>
        </View>
      </View>
      <StatusBar hidden={true} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: "white",
    height: height * 0.08,
    maxHeight: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignContent: "center",
    padding: 22,
  },
  detail_pro_text: {
    fontSize: RFValue(14),
    color: "#393F42",
  },
  product_img: {
    height: height * 0.36,
    width: "100%",
  },
  title_pro: {
    color: "#393F42",
    fontSize: RFValue(16),
    width: "80%",
    fontWeight: "500",
    // backgroundColor: "red",
  },
  heart_icon_container: {
    height: moderateScale(50),
    backgroundColor: "#939393",
    width: moderateScale(50),
    opacity: 0.1,

    justifyContent: "center",
    alignItems: "center",
    borderRadius: 200,
  },
});

export default DetailScreen;
