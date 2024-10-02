import * as React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  Border,
  FontSize,
  FontFamily,
  Padding,
  Gap,
} from "../GlobalStyles";

const Home = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.home}>
      <Image
        style={styles.rectangleIcon}
        resizeMode="cover"
        source={require("../assets/rectangle.png")}
      />
      <View style={styles.iphone1415ProMax2}>
        <Text
          style={styles.whichEventOccurs}
        >{`Which event occurs when the user clicks on an HTML button?
`}</Text>
        <Pressable
          style={[styles.onmouse, styles.submitFlexBox]}
          onPress={() => navigation.navigate("SelectOnMouseOver")}
        >
          <View style={styles.stateLayer}>
            <Text style={styles.labelText}>onmouseover</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.onmouse, styles.submitFlexBox]}
          onPress={() => navigation.navigate("SelectOnChange")}
        >
          <View style={styles.stateLayer}>
            <Text style={styles.labelTypo}>onchange</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.onmouse, styles.submitFlexBox]}
          onPress={() => navigation.navigate("SelectOnClick")}
        >
          <View style={styles.stateLayer}>
            <Text style={styles.labelTypo}>onclick</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.onmouse, styles.submitFlexBox]}
          onPress={() => navigation.navigate("SelectOnMouseOut")}
        >
          <View style={styles.stateLayer}>
            <Text style={styles.labelTypo}>onmouseout</Text>
          </View>
        </Pressable>
        <Text style={styles.text}>{` . . .   `}</Text>
        <View style={[styles.submit, styles.submitFlexBox]}>
          <View style={styles.stateLayer}>
            <Text style={styles.labelText}>Submit</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  submitFlexBox: {
    backgroundColor: Color.m3SysLightPrimary,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  rectangleIcon: {
    top: -33,
    left: -35,
    width: 500,
    height: 1083,
    position: "absolute",
  },
  whichEventOccurs: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
  },
  labelText: {
    color: Color.m3SysLightOnPrimary,
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
  },
  stateLayer: {
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  onmouse: {
    width: 240,
    height: 48,
  },
  labelTypo: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.m3SysLightOnPrimary,
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
  },
  text: {
    display: "flex",
    width: 230,
    height: 65,
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
    color: Color.colorBlack,
    justifyContent: "center",
    alignItems: "center",
  },
  submit: {
    width: 176,
    height: 62,
  },
  iphone1415ProMax2: {
    marginLeft: -215,
    top: 0,
    left: "50%",
    backgroundColor: Color.colorLavender,
    width: 430,
    paddingHorizontal: Padding.p_27xl,
    paddingVertical: Padding.p_74xl,
    gap: Gap.gap_md,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    position: "absolute",
    height: 932,
  },
  home: {
    backgroundColor: Color.colorViolet,
    width: "100%",
    height: 932,
    flex: 1,
  },
});

export default Home;
