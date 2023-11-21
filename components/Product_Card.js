import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import React from "react";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { RFValue } from "react-native-responsive-fontsize";
import Products_List from "../data/Product_list";

const width = Dimensions.get("window").width;
const Product_Card = () => {
  const Products = Products_List;
  return (
    <View
      style={{
        flexWrap: "wrap",
        marginStart: moderateScale(-6),
        flexDirection: "row",
        alignItems: "center",
        // backgroundColor: "green",
        justifyContent: "space-between",
        marginBottom: moderateScale(14),
        // marginTop: moderateScale(10),
      }}
    >
      {Products.map((item) => (
        <View key={item.id} style={styles.maincard_Container}>
          <View style={{ alignItems: "center" }}>
            <Image source={item.img} style={styles.card_img} />
          </View>
          <View style={styles.title_price_cont}>
            <Text
              numberOfLines={1}
              style={{ fontSize: RFValue(13), color: "#393F42" }}
            >
              {item.id}
            </Text>
            <Text
              style={{
                fontSize: RFValue(13),
                color: "#393F42",
                fontWeight: "700",
                marginTop: moderateScale(3),
              }}
            >
              {item.price}
            </Text>
          </View>
          <TouchableOpacity style={styles.btn_cont}>
            <Text style={styles.btn_text}>Add to cart</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  maincard_Container: {
    height: moderateScale(242),
    backgroundColor: "#FAFAFC",
    width: width * 0.4,
    maxWidth: 250,
    margin: 10,
    marginBottom: 15,
    elevation: 7,
    borderRadius: moderateScale(10),
  },
  card_img: {
    borderRadius: 10,
    marginTop: moderateScale(12),
    height: moderateScale(120),
    // backgroundColor: 'red',
    width: "91%",
  },
  title_price_cont: {
    // backgroundColor: "red",
    width: "90%",
    marginTop: moderateScale(10),
    alignSelf: "center",
  },
  btn_cont: {
    backgroundColor: "#67C4A7",
    width: "90%",
    height: moderateScale(37),
    alignSelf: "center",
    borderRadius: 5,
    marginTop: moderateScale(9),
    justifyContent: "center",
    alignItems: "center",
  },
  btn_text: {
    fontSize: RFValue(13),
    color: "white",
    fontWeight: "400",
  },
});
export default Product_Card;