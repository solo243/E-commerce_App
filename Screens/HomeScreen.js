import { StatusBar } from "expo-status-bar";
import {
  FlatList,
  Animated,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import "react-native-gesture-handler";
import Topbar from "../components/Topbar";
import { moderateScale } from "react-native-size-matters";
import { RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import Category from "../components/Category";
import { LinearGradient } from "expo-linear-gradient";
import Products_List from "../data/Product_list";
import Product_Card from "../components/Product_Card";
import * as Animatable from "react-native-animatable";

export default function Homescreen({ navigation }) {
  // const
  const Products = Products_List;
  const og = [1, 2, 3, 4];
  return (
    <SafeAreaView style={styles.container}>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={() => {
          animation = "zoomInDown";
        }}
        animation="zoomInUp"
      >
        <LinearGradient
          colors={["rgba(255,255,255,1)", "rgba(255,255,255,1)"]}
          style={{ flex: 1 }}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 0.3 }}
        >
          <Topbar navigation={navigation} />
          <View style={styles.banner_cont}>
            <FlatList
              data={[1, 2, 3, 4, 5]}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              renderItem={({ item }) => {
                return (
                  <View
                    style={{
                      marginLeft: moderateScale(15),
                    }}
                  >
                    <Animatable.Image
                      animation="zoomInUp"
                      source={require("../assets/b11.png")}
                      style={{
                        height: moderateScale(160),
                        width: moderateScale(365),
                        borderRadius: moderateScale(10),
                      }}
                    />
                  </View>
                );
              }}
            />
          </View>

          {/* //TODO main cntainer for Products  */}
          <View
            style={{
              marginTop: moderateScale(4),
              // backgroundColor: "yellow",
              padding: 0,
              width: "90%",
              alignSelf: "center",
            }}
          >
            {/* //TODO this categpry */}
            <Category />
            {/* //TODO: Recent Product */}
            <View>
              <View style={styles.recent_product_text}>
                <Text style={{ color: "#393F42", fontSize: RFValue(14) }}>
                  Recent Product
                </Text>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Search")}
                  style={styles.filter_btn}
                >
                  <Text style={{ color: "#393F42", fontSize: RFValue(10) }}>
                    Filters
                  </Text>
                  <Ionicons
                    name="funnel-outline"
                    size={moderateScale(14)}
                    color="#393F42"
                  />
                </TouchableOpacity>
              </View>
              {/* //TODO:  Product Card  */}
              <Product_Card navigation={navigation} />
            </View>
          </View>
          <StatusBar style="dark" />
        </LinearGradient>
      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  banner_cont: {
    width: "100%",
    height: moderateScale(170),
    // backgroundColor: "red",
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: moderateScale(20),
  },
  recent_product_text: {
    flex: 1,
    // backgroundColor: "red",
    flexDirection: "row",
    height: moderateScale(32),
    paddingRight: 10,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: moderateScale(30),
    marginBottom: moderateScale(7),
  },
  filter_btn: {
    height: "90%",
    backgroundColor: "#ffff",
    borderWidth: 2,
    borderColor: "#F0F2F1",
    alignItems: "center",
    borderRadius: moderateScale(5),
    width: moderateScale(75),
    gap: moderateScale(12),
    justifyContent: "center",
    // flex: 1,
    flexDirection: "row",
  },
});
