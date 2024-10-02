import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, FontFamily, Color, Padding, Border } from "../GlobalStyles";

const OnMouseOutFrame = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.onmouseoutFrame}>
      <View style={styles.dialogueBubble} />
      <Image
        style={[styles.httpslottiefilescomanimatIcon, styles.submitPosition]}
        resizeMode="cover"
        source={require("../assets/httpslottiefilescomanimationsangrym1r1yqryka.png")}
      />
      <Pressable
        style={[styles.submit, styles.submitFlexBox]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.stateLayer, styles.submitFlexBox]}>
          <Text style={styles.labelText}>Retry</Text>
        </View>
      </Pressable>
      <Text style={[styles.hintOnmouseoutIs, styles.submitPosition]}>
        Hint: onMouseout is when the mouse moves off of the button
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
  dialogueBubble: {
    width: 199,
    height: 107,
  },
  httpslottiefilescomanimatIcon: {
    marginLeft: -75,
    top: 211,
    width: 150,
    height: 204,
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
    top: 570,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.m3SysLightPrimary,
    width: 176,
    height: 62,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  hintOnmouseoutIs: {
    marginLeft: -144,
    top: 358,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    width: 288,
    textAlign: "center",
  },
  onmouseoutFrame: {
    backgroundColor: Color.colorLavender,
    width: "100%",
    height: 932,
    overflow: "hidden",
    flex: 1,
  },
});

export default OnMouseOutFrame;
