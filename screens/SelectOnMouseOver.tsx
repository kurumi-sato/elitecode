import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import {
  Color,
  Border,
  Padding,
  FontSize,
  FontFamily,
  Gap,
} from "../GlobalStyles";

const SelectOnMouseOver = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.selectonmouseover, styles.selectonmouseoverFlexBox]}>
      <View style={[styles.iphone1415ProMax2, styles.selectonmouseoverFlexBox]}>
        <Text
          style={styles.whichEventOccurs}
        >{`Which event occurs when the user clicks on an HTML button?
`}</Text>
        <Pressable
          style={[styles.onmouse, styles.submitFlexBox]}
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.stateLayer, styles.stateFlexBox]}>
            <Text style={styles.labelTypo}>onmouseover</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.onmouse, styles.submitFlexBox]}
          onPress={() => navigation.navigate("SelectOnChange")}
        >
          <View style={styles.stateFlexBox}>
            <Text style={styles.labelTypo}>onchange</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.onmouse, styles.submitFlexBox]}
          onPress={() => navigation.navigate("SelectOnClick")}
        >
          <View style={styles.stateFlexBox}>
            <Text style={styles.labelTypo}>onclick</Text>
          </View>
        </Pressable>
        <Pressable
          style={[styles.onmouse, styles.submitFlexBox]}
          onPress={() => navigation.navigate("SelectOnMouseOut")}
        >
          <View style={styles.stateFlexBox}>
            <Text style={styles.labelTypo}>onmouseout</Text>
          </View>
        </Pressable>
        <Text style={styles.text}>{` . . .   `}</Text>
        <Pressable
          style={[styles.submit, styles.submitFlexBox]}
          onPress={() => navigation.navigate("OnMouseOverFrame")}
        >
          <View style={styles.stateFlexBox}>
            <Text style={styles.labelText4}>Submit</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  selectonmouseoverFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 932,
  },
  submitFlexBox: {
    backgroundColor: Color.m3SysLightPrimary,
    borderRadius: Border.br_81xl,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  stateFlexBox: {
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  whichEventOccurs: {
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interRegular,
    textAlign: "center",
    color: Color.colorBlack,
    alignSelf: "stretch",
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
  stateLayer: {
    backgroundColor: Color.m3StateLayersLightOnPrimaryOpacity012,
    overflow: "hidden",
  },
  onmouse: {
    width: 240,
    height: 48,
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
  labelText4: {
    color: Color.m3SysLightOnPrimary,
    fontFamily: FontFamily.m3LabelLarge,
    fontWeight: "500",
    lineHeight: 20,
    letterSpacing: 0,
    fontSize: FontSize.m3LabelLarge_size,
    textAlign: "center",
  },
  submit: {
    width: 176,
    height: 62,
  },
  iphone1415ProMax2: {
    backgroundColor: Color.colorLavender,
    width: 430,
    paddingHorizontal: Padding.p_27xl,
    paddingVertical: Padding.p_74xl,
    gap: Gap.gap_md,
    overflow: "hidden",
  },
  selectonmouseover: {
    backgroundColor: Color.colorViolet,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 932,
  },
});

export default SelectOnMouseOver;
