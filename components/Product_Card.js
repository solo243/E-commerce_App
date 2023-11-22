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
const Product_Card = ({ navigation }) => {
  const Products = Products_List;
  return (
    <View style={styles.main_outer_container}>
      {Products.map((item) => (
        <TouchableOpacity
          onPress={() => navigation.navigate("Detail", { data: item })}
          key={item.id}
          style={styles.maincard_Container}
        >
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
            <Text style={styles.pro_price}>{item.price}</Text>
          </View>
          <TouchableOpacity style={styles.btn_cont}>
            <Text style={styles.btn_text}>Add to cart</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  main_outer_container: {
    flexWrap: "wrap",
    marginStart: moderateScale(-6),
    flexDirection: "row",
    alignItems: "center",
    // backgroundColor: "green",
    justifyContent: "space-between",
    marginBottom: moderateScale(14),
  },
  maincard_Container: {
    height: moderateScale(242),
    backgroundColor: "#FAFAFC",
    width: width * 0.4,
    maxWidth: 250,
    margin: 10,
    marginBottom: 15,
    elevation: 2,
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
    marginTop: moderateScale(13),
    justifyContent: "center",
    alignItems: "center",
  },
  btn_text: {
    fontSize: RFValue(13),
    color: "white",
    fontWeight: "400",
  },
  pro_price: {
    fontSize: RFValue(13),
    color: "#393F42",
    fontWeight: "700",
    marginTop: moderateScale(3),
  },
});
export default Product_Card;
