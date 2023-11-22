import { Dimensions, View, Text, StyleSheet } from "react-native";
import React from "react";

import { moderateScale, verticalScale } from "react-native-size-matters";
import { RFValue } from "react-native-responsive-fontsize";
const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;
const Compney_Card = () => {
  return (
    <View>
      <View style={styles.comp_detail_fcontainer}>
        {/* //TODO appple title container */}
        <View style={styles.apple_logo_and_title}>
          {/* //TODO  for aaple icons  */}
          <View style={styles.apple_logo_cont}></View>
          {/* //TODO: APple store container  */}
          <View style={{ marginStart: 12 }}>
            <Text style={{ fontSize: RFValue(14), color: "#393F42" }}>
              Apple Store
            </Text>
            <Text style={{ fontSize: RFValue(11), color: "#bcbcbc" }}>
              online 12 mins ago
            </Text>
          </View>
        </View>
        {/* //TODO FOllow continer */}
        <View
          style={{
            justifyContent: "center",
            height: "90%",
          }}
        >
          <View style={styles.follow_container}>
            <Text style={{ fontSize: RFValue(12) }}>Follow</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  comp_detail_fcontainer: {
    width: "100%",
    height: moderateScale(70),
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#bcbcbc",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  apple_logo_cont: {
    height: moderateScale(53),
    width: moderateScale(53),
    backgroundColor: "blue",
    borderRadius: moderateScale(100),
  },
  apple_logo_and_title: {
    // backgroundColor: "pink",
    height: "90%",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  follow_container: {
    height: moderateScale(35),
    backgroundColor: "white",
    borderWidth: 2,
    borderColor: "#bcbcbc",
    borderRadius: 6,
    alignItems: "center",
    justifyContent: "center",
    width: moderateScale(80),
  },
});

export default Compney_Card;
