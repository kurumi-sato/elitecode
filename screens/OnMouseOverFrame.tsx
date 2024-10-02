import * as React from "react";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const OnMouseOverFrame = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.onmouseoverFrame}>
      <Image
        style={[styles.httpslottiefilescomanimatIcon, styles.submitPosition]}
        resizeMode="cover"
        source={require("../assets/httpslottiefilescomanimationsangrym1r1yqryka.png")}
      />
      <View style={styles.dialogueBubble} />
      <Pressable
        style={[styles.submit, styles.submitFlexBox]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.stateLayer, styles.submitFlexBox]}>
          <Text style={styles.labelText}>Retry</Text>
        </View>
      </Pressable>
      <Text style={[styles.hintOnmouseoverIs, styles.submitPosition]}>
        Hint: onMouseOver is used when the mouse is hovered over the button
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  submitPosition: {
    left: "50%",
    position: "absolute",
  },
  submitFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  httpslottiefilescomanimatIcon: {
    marginLeft: -75,
    top: 201,
    width: 150,
    height: 204,
  },
  dialogueBubble: {
    width: 199,
    height: 107,
  },
  labelText: {
    fontSize: FontSize.m3LabelLarge_size,
    letterSpacing: 0,
    lineHeight: 20,
    fontWeight: "500",
    fontFamily: FontFamily.m3LabelLarge,
    color: Color.m3SysLightOnPrimary,
    textAlign: "center",
  },
  stateLayer: {
    alignSelf: "stretch",
    flexDirection: "row",
    paddingHorizontal: Padding.p_5xl,
    paddingVertical: Padding.p_3xs,
    flex: 1,
  },
  submit: {
    marginLeft: -88,
    top: 584,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.m3SysLightPrimary,
    width: 176,
    height: 62,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  hintOnmouseoverIs: {
    marginLeft: -144,
    top: 365,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    width: 288,
    textAlign: "center",
  },
  onmouseoverFrame: {
    backgroundColor: Color.colorLavender,
    width: "100%",
    height: 932,
    overflow: "hidden",
    flex: 1,
  },
});

export default OnMouseOverFrame;
