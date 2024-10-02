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

const SelectOnMouseOut = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.selectonmouseout}>
      <View style={styles.iphone1415ProMax2}>
        <Text
          style={styles.whichEventOccurs}
        >{`Which event occurs when the user clicks on an HTML button?
`}</Text>
        <View style={[styles.onmouse, styles.submitFlexBox]}>
          <Pressable
            style={styles.stateFlexBox}
            onPress={() => navigation.navigate("SelectOnMouseOver")}
          >
            <Text style={styles.labelTypo}>onmouseover</Text>
          </Pressable>
        </View>
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
          onPress={() => navigation.navigate("Home")}
        >
          <View style={[styles.stateLayer3, styles.stateFlexBox]}>
            <Text style={styles.labelTypo}>onmouseout</Text>
          </View>
        </Pressable>
        <Text style={styles.text}>{` . . .   `}</Text>
        <Pressable
          style={[styles.submit, styles.submitFlexBox]}
          onPress={() => navigation.navigate("OnMouseOutFrame")}
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
  submitFlexBox: {
    backgroundColor: Color.m3SysLightPrimary,
    borderRadius: Border.br_81xl,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
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
  onmouse: {
    width: 240,
    height: 48,
  },
  stateLayer3: {
    backgroundColor: Color.m3StateLayersLightOnPrimaryOpacity012,
    overflow: "hidden",
    paddingVertical: Padding.p_3xs,
    paddingHorizontal: Padding.p_5xl,
    flexDirection: "row",
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
    position: "absolute",
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
    height: 932,
  },
  selectonmouseout: {
    backgroundColor: Color.colorViolet,
    width: "100%",
    height: 932,
    flex: 1,
  },
});

export default SelectOnMouseOut;
