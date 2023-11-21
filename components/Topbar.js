import {
  Dimensions,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import React from "react";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { scale, verticalScale, moderateScale } from "react-native-size-matters";

const height = Dimensions.get("window").height;

const isweb = Platform.OS === "web";

const Topbar = ({ navigation }) => {
  return (
    <View>
      <View style={styles.topbar}>
        <View style={styles.addrecont}>
          <View style={styles.dilivery}>
            <Text style={{ color: "grey", marginLeft: -3 }}>
              {" "}
              Delivery address
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: RFValue(11) }}>
              Salatiga City, Cnetral Java
            </Text>
          </View>
        </View>
        <View style={styles.cartcont}>
          <TouchableOpacity>
            <View>
              <Feather name="shopping-cart" size={24} color="#393F42" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View>
              <FontAwesome5 name="bell" size={24} color="#393F42" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.searchbar_container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Settings")}
          style={isweb ? web.searchbar : styles.searchbar}
        >
          <View style={{ marginStart: 17 }}>
            <Feather
              name="search"
              size={isweb ? moderateScale(15) : moderateScale(20)}
              color="#939393"
            />
          </View>
          <View>
            <Text
              style={{
                color: "#C8C8CB",
                fontSize: RFValue(12),
                marginStart: moderateScale(7),
              }}
            >
              Search here ...
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  topbar: {
    height: 35,
    width: "90%",
    flexDirection: "row",
    marginTop: 50,
    alignSelf: "center",
    padding: 0,
    justifyContent: "space-between",
  },
  addrecont: {
    flexDirection: "column",
    // backgroundColor: "blue",
    padding: 0,
  },
  cartcont: {
    // backgroundColor: "blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: height * 8,
    maxWidth: 90,
  },
  searchbar_container: {
    width: "100%",
    flexDirection: "row",
    marginTop: moderateScale(20),
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },
  searchbar: {
    height: verticalScale(40),
    borderWidth: 2,
    borderColor: "#F0F2F1",
    backgroundColor: "red",
    backgroundColor: "#ffff",
    width: "91%",
    borderRadius: 9,
    flexDirection: "row",
    alignItems: "center",
  },
});

const web = StyleSheet.create({
  searchbar: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    height: verticalScale(20),
    minHeight: 40,
    width: "90%",
    backgroundColor: "#F0F2F1",
  },
});

export default Topbar;
