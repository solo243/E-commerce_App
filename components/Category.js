import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Cetogory from "../data/Category";
import { moderateScale } from "react-native-size-matters";
import { RFValue } from "react-native-responsive-fontsize";
import { FlashList } from "@shopify/flash-list";

const Category = () => {
  const NewCat = Cetogory;
  return (
    <View>
      <Text style={styles.cat_text}>Category</Text>
      <View style={styles.icon_cont_row}>
        {NewCat.map((item) => {
          return (
            <View key={item.name} style={styles.icon_main_box}>
              <View
                style={{
                  backgroundColor: item.color,
                  borderRadius: 10,
                  width: moderateScale(50),
                  height: moderateScale(50),
                  alignItems: "center",
                  justifyContent: "center",
                  borderCurve: "continuous",
                  // backgroundColor: 'red'
                }}
              >
                <Image
                  source={item.img}
                  style={{
                    height: moderateScale(30),
                    width: moderateScale(30),
                  }}
                />
              </View>
              <Text style={styles.cat_lable_text}>{item.name}</Text>
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cat_text: {
    color: "#393F42",
    fontSize: RFValue(15),
  },
  icon_cont_row: {
    width: "100%",
    padding: 0,
    // backgroundColor: "red",
    flexWrap: "wrap",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  icon_main_box: {
    height: moderateScale(62),
    alignItems: "center",
    width: moderateScale(55),
    marginTop: 16,
    justifyContent: "space-between",
  },
  cat_lable_text: {
    fontSize: RFValue(11),
    color: "#939393",
    marginTop: moderateScale(6),
  },
});

export default Category;
