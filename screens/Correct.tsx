import * as React from "react";
import { Text, StyleSheet, Pressable, View, Image } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontSize, FontFamily, Padding, Border } from "../GlobalStyles";

const Correct = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.correct}>
      <Text
        style={[styles.congratulationsYouEarned, styles.submitPosition]}
      >{`Congratulations,
you earned a JavaScript badge!`}</Text>
      <Pressable
        style={[styles.submit, styles.submitFlexBox]}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={[styles.stateLayer, styles.submitFlexBox]}>
          <Pressable onPress={() => navigation.navigate("Home")}>
            <Text style={styles.startOver}>Start Over</Text>
          </Pressable>
        </View>
      </Pressable>
      <View style={[styles.rectangle, styles.rectangleTransform1]} />
      <View style={[styles.rectangle1, styles.rectangleBg5]} />
      <View style={[styles.rectangle2, styles.rectangleTransform1]} />
      <View style={[styles.rectangle3, styles.rectangleLayout8]} />
      <View style={[styles.rectangle4, styles.rectangleTransform1]} />
      <View style={[styles.rectangle5, styles.rectangleLayout8]} />
      <View style={[styles.rectangle6, styles.rectangleTransform1]} />
      <View style={[styles.rectangle7, styles.rectangleTransform1]} />
      <View style={[styles.rectangle8, styles.rectangleLayout8]} />
      <View style={[styles.rectangle9, styles.rectangleTransform1]} />
      <View style={[styles.rectangle10, styles.rectangleBg4]} />
      <View style={[styles.rectangle11, styles.rectangleLayout7]} />
      <View style={[styles.rectangle12, styles.rectangleTransform1]} />
      <View style={[styles.rectangle13, styles.rectangleBg3]} />
      <View style={[styles.rectangle14, styles.rectangleLayout6]} />
      <View style={styles.rectangle15} />
      <View style={[styles.rectangle16, styles.rectangleTransform1]} />
      <View style={[styles.rectangle17, styles.rectangleLayout7]} />
      <View style={[styles.rectangle18, styles.rectangleLayout5]} />
      <View style={[styles.rectangle19, styles.rectangleTransform1]} />
      <View style={[styles.rectangle20, styles.rectangleLayout4]} />
      <View style={[styles.rectangle21, styles.rectangleLayout5]} />
      <View style={[styles.rectangle22, styles.rectangleLayout5]} />
      <View style={[styles.rectangle23, styles.rectangleTransform1]} />
      <View style={[styles.rectangle24, styles.rectangleTransform1]} />
      <View style={[styles.rectangle25, styles.rectangleTransform1]} />
      <View style={[styles.rectangle26, styles.rectangleTransform1]} />
      <View style={[styles.rectangle27, styles.rectangleTransform1]} />
      <View style={[styles.rectangle28, styles.rectangleBg3]} />
      <View style={[styles.rectangle29, styles.rectangleTransform1]} />
      <View style={[styles.rectangle30, styles.rectangleLayout4]} />
      <View style={[styles.rectangle31, styles.rectangleLayout6]} />
      <View style={[styles.rectangle32, styles.rectangleLayout3]} />
      <View style={[styles.rectangle33, styles.rectangleTransform1]} />
      <View style={[styles.rectangle34, styles.rectangleLayout2]} />
      <View style={[styles.rectangle35, styles.rectangleTransform1]} />
      <View style={[styles.rectangle36, styles.rectangleTransform1]} />
      <View style={[styles.rectangle37, styles.rectangleBg2]} />
      <View style={[styles.rectangle38, styles.rectanglePosition5]} />
      <View style={[styles.rectangle39, styles.rectangleTransform1]} />
      <View style={[styles.rectangle40, styles.rectangleTransform1]} />
      <View style={[styles.rectangle41, styles.rectangleLayout7]} />
      <View style={[styles.rectangle42, styles.rectanglePosition4]} />
      <View style={[styles.rectangle43, styles.rectangleTransform1]} />
      <View style={[styles.rectangle44, styles.rectangleLayout6]} />
      <View style={[styles.rectangle45, styles.rectangleLayout4]} />
      <View style={[styles.rectangle46, styles.rectanglePosition5]} />
      <View style={[styles.rectangle47, styles.rectangleTransform1]} />
      <View style={[styles.rectangle48, styles.rectangleLayout2]} />
      <View style={[styles.rectangle49, styles.rectangleTransform1]} />
      <View style={[styles.rectangle50, styles.rectangleBg5]} />
      <View style={[styles.rectangle51, styles.rectanglePosition3]} />
      <View style={[styles.rectangle52, styles.rectangleLayout6]} />
      <View style={[styles.rectangle53, styles.rectangleTransform1]} />
      <View style={[styles.rectangle54, styles.rectangleBg1]} />
      <View style={[styles.rectangle55, styles.rectangleLayout3]} />
      <View style={[styles.rectangle56, styles.rectangleTransform1]} />
      <View style={[styles.rectangle57, styles.rectangleLayout8]} />
      <View style={[styles.rectangle58, styles.rectangleLayout3]} />
      <View style={[styles.rectangle59, styles.rectangleBg2]} />
      <View style={[styles.rectangle60, styles.rectangleLayout1]} />
      <View style={[styles.rectangle61, styles.rectanglePosition2]} />
      <View style={[styles.rectangle62, styles.rectanglePosition1]} />
      <View style={[styles.rectangle63, styles.rectangleTransform1]} />
      <View style={[styles.rectangle64, styles.rectanglePosition2]} />
      <View style={[styles.rectangle65, styles.rectangleLayout]} />
      <View style={[styles.rectangle66, styles.rectanglePosition3]} />
      <View style={[styles.rectangle67, styles.rectanglePosition]} />
      <View style={[styles.rectangle68, styles.rectangleLayout]} />
      <View style={[styles.rectangle69, styles.rectanglePosition1]} />
      <View style={[styles.rectangle70, styles.rectangleBg]} />
      <View style={[styles.rectangle71, styles.rectangleBg]} />
      <View style={[styles.rectangle72, styles.rectangleTransform1]} />
      <View style={[styles.rectangle73, styles.rectangleTransform1]} />
      <View style={[styles.rectangle74, styles.rectangleLayout1]} />
      <View style={[styles.rectangle75, styles.rectangleTransform1]} />
      <View style={[styles.rectangle76, styles.rectangleBg4]} />
      <View style={[styles.rectangle77, styles.rectangleTransform1]} />
      <View style={[styles.rectangle78, styles.rectangleLayout1]} />
      <View style={[styles.rectangle79, styles.rectangleBg1]} />
      <View style={[styles.rectangle80, styles.rectangleLayout5]} />
      <View style={[styles.rectangle81, styles.rectanglePosition]} />
      <View style={[styles.rectangle82, styles.rectanglePosition4]} />
      <View style={[styles.rectangle83, styles.rectangleTransform]} />
      <View style={[styles.rectangle84, styles.rectangleTransform]} />
      <View style={[styles.rectangle85, styles.rectangleTransform]} />
      <View style={[styles.rectangle86, styles.rectangleTransform]} />
      <View style={[styles.rectangle87, styles.rectangleTransform]} />
      <View style={[styles.rectangle88, styles.rectangleTransform]} />
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
  rectangleTransform1: {
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectangleBg5: {
    backgroundColor: Color.colorMediumslateblue_200,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectangleLayout8: {
    width: 27,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectangleBg4: {
    backgroundColor: Color.colorSkyblue_300,
    height: 5,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectangleLayout7: {
    width: 30,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectangleBg3: {
    backgroundColor: Color.colorGreenyellow_100,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectangleLayout6: {
    width: 24,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectangleLayout5: {
    width: 17,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectangleLayout4: {
    width: 21,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectangleLayout3: {
    width: 32,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectangleLayout2: {
    width: 15,
    height: 8,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectangleBg2: {
    backgroundColor: Color.colorSkyblue_100,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectanglePosition5: {
    left: 164,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectanglePosition4: {
    top: 802,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectanglePosition3: {
    top: 628,
    height: 6,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectangleBg1: {
    backgroundColor: Color.colorPalegoldenrod_100,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectangleLayout1: {
    width: 23,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectanglePosition2: {
    top: 22,
    height: 6,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectanglePosition1: {
    left: 109,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectangleLayout: {
    width: 14,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectanglePosition: {
    left: 41,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectangleBg: {
    backgroundColor: Color.colorDeeppink_200,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  rectangleTransform: {
    opacity: 0,
    transform: [
      {
        rotate: "37deg",
      },
    ],
    position: "absolute",
  },
  congratulationsYouEarned: {
    marginLeft: -156,
    top: 328,
    fontSize: FontSize.size_11xl,
    fontFamily: FontFamily.interRegular,
    color: Color.colorBlack,
    width: 312,
    height: 156,
    textAlign: "center",
  },
  startOver: {
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
    top: 502,
    borderRadius: Border.br_81xl,
    backgroundColor: Color.m3SysLightPrimary,
    width: 176,
    height: 62,
    left: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  rectangle: {
    top: 588,
    left: 218,
    backgroundColor: "#ba3e03",
    height: 4,
    width: 7,
    transform: [
      {
        rotate: "37deg",
      },
    ],
  },
  rectangle1: {
    top: 575,
    left: 309,
    height: 5,
    width: 28,
  },
  rectangle2: {
    top: 284,
    left: 379,
    backgroundColor: "rgba(220, 188, 250, 0.9)",
    width: 28,
    height: 4,
  },
  rectangle3: {
    top: 667,
    left: 112,
    backgroundColor: "#f62584",
    height: 8,
  },
  rectangle4: {
    top: 3,
    left: 162,
    backgroundColor: "rgba(201, 252, 190, 0.85)",
    width: 13,
    height: 8,
  },
  rectangle5: {
    top: 171,
    left: 182,
    backgroundColor: "rgba(117, 95, 254, 0.6)",
    height: 4,
  },
  rectangle6: {
    top: 465,
    left: 377,
    backgroundColor: "rgba(117, 95, 254, 0.9)",
    height: 7,
    width: 19,
  },
  rectangle7: {
    top: 875,
    left: 348,
    backgroundColor: "rgba(255, 33, 251, 0.35)",
    height: 6,
    width: 33,
  },
  rectangle8: {
    top: 79,
    left: 313,
    backgroundColor: Color.colorPalegoldenrod_200,
    height: 8,
  },
  rectangle9: {
    top: 369,
    left: 29,
    backgroundColor: "rgba(117, 95, 254, 0.35)",
    height: 6,
    width: 28,
  },
  rectangle10: {
    top: 88,
    left: 72,
    width: 33,
  },
  rectangle11: {
    top: 814,
    left: 331,
    backgroundColor: "rgba(255, 33, 251, 0.9)",
    height: 6,
  },
  rectangle12: {
    top: 538,
    left: 54,
    width: 10,
    backgroundColor: Color.colorGold_100,
    height: 7,
  },
  rectangle13: {
    top: 439,
    left: 60,
    width: 8,
    height: 4,
  },
  rectangle14: {
    top: 161,
    left: 266,
    backgroundColor: Color.colorMediumslateblue_100,
    height: 8,
  },
  rectangle15: {
    top: 312,
    left: 84,
    backgroundColor: "rgba(154, 245, 252, 0.35)",
    width: 16,
    height: 5,
    position: "absolute",
  },
  rectangle16: {
    top: 837,
    left: 13,
    backgroundColor: "rgba(245, 71, 33, 0.65)",
    width: 38,
    height: 5,
  },
  rectangle17: {
    top: 239,
    left: 357,
    backgroundColor: "rgba(186, 62, 3, 0.75)",
    height: 7,
  },
  rectangle18: {
    top: 784,
    left: 325,
    backgroundColor: Color.colorCornflowerblue_200,
    height: 4,
  },
  rectangle19: {
    top: 114,
    backgroundColor: "rgba(3, 163, 245, 0.9)",
    width: 11,
    left: 149,
    height: 8,
  },
  rectangle20: {
    top: 208,
    left: 428,
    backgroundColor: Color.colorOrangered_100,
    height: 7,
  },
  rectangle21: {
    top: 340,
    left: 384,
    backgroundColor: "rgba(186, 62, 3, 0.85)",
    height: 7,
  },
  rectangle22: {
    top: 256,
    left: 228,
    backgroundColor: "rgba(186, 62, 3, 0.9)",
    height: 8,
  },
  rectangle23: {
    top: 845,
    left: 124,
    backgroundColor: Color.colorDeeppink_100,
    width: 10,
    height: 6,
  },
  rectangle24: {
    top: 164,
    left: 64,
    backgroundColor: Color.colorCornflowerblue_100,
    width: 10,
    height: 4,
  },
  rectangle25: {
    top: 100,
    left: 225,
    backgroundColor: Color.colorMediumslateblue_100,
    height: 6,
    width: 7,
    transform: [
      {
        rotate: "37deg",
      },
    ],
  },
  rectangle26: {
    top: 916,
    left: 409,
    backgroundColor: "rgba(157, 237, 26, 0.9)",
    height: 7,
    width: 28,
  },
  rectangle27: {
    top: 460,
    left: 33,
    backgroundColor: "rgba(186, 62, 3, 0.6)",
    width: 35,
    height: 4,
  },
  rectangle28: {
    top: 304,
    left: 16,
    width: 25,
    height: 7,
  },
  rectangle29: {
    top: 701,
    left: 96,
    backgroundColor: Color.colorSkyblue_200,
    width: 13,
    height: 4,
  },
  rectangle30: {
    top: 908,
    left: 82,
    backgroundColor: "rgba(186, 62, 3, 0.65)",
    height: 9,
  },
  rectangle31: {
    top: 243,
    left: 19,
    backgroundColor: "rgba(245, 71, 33, 0.45)",
    height: 5,
  },
  rectangle32: {
    top: 532,
    backgroundColor: "rgba(75, 200, 239, 0.85)",
    left: 337,
    height: 6,
  },
  rectangle33: {
    top: 186,
    left: 402,
    backgroundColor: "rgba(255, 33, 251, 0.45)",
    width: 11,
    height: 4,
  },
  rectangle34: {
    top: 250,
    backgroundColor: "rgba(75, 200, 239, 0.45)",
    left: 149,
  },
  rectangle35: {
    top: 801,
    left: 158,
    backgroundColor: "rgba(186, 62, 3, 0.45)",
    width: 33,
    height: 7,
  },
  rectangle36: {
    top: 686,
    width: 29,
    backgroundColor: Color.colorOrange_100,
    left: 337,
    height: 4,
  },
  rectangle37: {
    top: 321,
    left: 154,
    width: 35,
    height: 7,
  },
  rectangle38: {
    top: 656,
    backgroundColor: "rgba(246, 37, 132, 0.85)",
    height: 7,
    width: 13,
  },
  rectangle39: {
    top: 687,
    left: 392,
    backgroundColor: "rgba(157, 237, 26, 0.85)",
    width: 9,
    height: 5,
  },
  rectangle40: {
    top: 910,
    left: 229,
    backgroundColor: "rgba(252, 158, 28, 0.45)",
    width: 20,
    height: 4,
  },
  rectangle41: {
    top: 307,
    left: 328,
    backgroundColor: Color.colorPaleturquoise_100,
    height: 7,
  },
  rectangle42: {
    left: 187,
    width: 26,
    backgroundColor: Color.colorDeeppink_100,
    height: 4,
  },
  rectangle43: {
    top: 464,
    left: 1,
    backgroundColor: "#f54721",
    width: 11,
    height: 7,
  },
  rectangle44: {
    top: 36,
    left: 419,
    backgroundColor: Color.colorDarkblue_100,
    height: 9,
  },
  rectangle45: {
    top: 264,
    left: 49,
    backgroundColor: "rgba(72, 12, 167, 0.85)",
    height: 4,
  },
  rectangle46: {
    top: 880,
    backgroundColor: Color.colorPaleturquoise_100,
    width: 10,
    height: 5,
  },
  rectangle47: {
    top: 632,
    backgroundColor: Color.colorPlum_100,
    left: 262,
    height: 9,
    width: 11,
  },
  rectangle48: {
    top: 593,
    left: 8,
    backgroundColor: Color.colorOrangered_100,
  },
  rectangle49: {
    left: 426,
    backgroundColor: Color.colorPaleturquoise_200,
    top: 423,
    width: 38,
    height: 7,
  },
  rectangle50: {
    top: 504,
    width: 37,
    left: 107,
    height: 9,
  },
  rectangle51: {
    left: 380,
    width: 36,
    backgroundColor: Color.colorPaleturquoise_100,
  },
  rectangle52: {
    top: 832,
    left: 196,
    backgroundColor: "rgba(220, 188, 250, 0.85)",
    height: 6,
  },
  rectangle53: {
    top: 84,
    left: 11,
    backgroundColor: Color.colorPlum_100,
    height: 8,
    width: 7,
    transform: [
      {
        rotate: "37deg",
      },
    ],
  },
  rectangle54: {
    top: 873,
    left: 268,
    width: 29,
    height: 8,
  },
  rectangle55: {
    top: 324,
    left: 247,
    backgroundColor: "#dcbcfa",
    height: 7,
  },
  rectangle56: {
    top: 742,
    left: 408,
    backgroundColor: "rgba(3, 163, 245, 0.75)",
    width: 28,
    height: 4,
  },
  rectangle57: {
    top: 568,
    left: 391,
    backgroundColor: Color.colorGold_200,
    height: 8,
  },
  rectangle58: {
    top: 238,
    left: 317,
    backgroundColor: Color.colorPaleturquoise_200,
    height: 8,
  },
  rectangle59: {
    top: 775,
    left: 45,
    width: 29,
    height: 8,
  },
  rectangle60: {
    top: 448,
    left: 358,
    backgroundColor: Color.colorCornflowerblue_100,
    height: 5,
  },
  rectangle61: {
    left: 48,
    backgroundColor: Color.colorSkyblue_200,
    width: 19,
  },
  rectangle62: {
    top: 294,
    backgroundColor: "#ff21fb",
    width: 20,
    height: 7,
  },
  rectangle63: {
    top: 724,
    left: 222,
    backgroundColor: "rgba(246, 37, 132, 0.45)",
    height: 7,
    width: 28,
  },
  rectangle64: {
    left: 177,
    backgroundColor: Color.colorPlum_100,
    width: 38,
  },
  rectangle65: {
    top: 70,
    left: 116,
    backgroundColor: Color.colorPalegoldenrod_200,
    height: 4,
  },
  rectangle66: {
    left: 320,
    backgroundColor: "rgba(246, 37, 132, 0.6)",
    width: 11,
  },
  rectangle67: {
    top: 423,
    width: 8,
    backgroundColor: Color.colorGold_100,
    height: 4,
  },
  rectangle68: {
    top: 125,
    left: 319,
    backgroundColor: Color.colorGold_200,
    height: 5,
  },
  rectangle69: {
    backgroundColor: "rgba(72, 12, 167, 0.45)",
    top: 11,
    width: 26,
    height: 9,
  },
  rectangle70: {
    top: 602,
    left: 416,
    width: 12,
    height: 4,
  },
  rectangle71: {
    top: 468,
    left: 262,
    height: 5,
    width: 28,
  },
  rectangle72: {
    top: 218,
    left: 179,
    backgroundColor: "#4bc8ef",
    width: 35,
    height: 6,
  },
  rectangle73: {
    top: 398,
    left: 74,
    backgroundColor: "rgba(252, 158, 28, 0.65)",
    width: 28,
    height: 4,
  },
  rectangle74: {
    top: 174,
    left: 107,
    backgroundColor: Color.colorMediumslateblue_100,
    height: 4,
  },
  rectangle75: {
    top: 380,
    left: 343,
    backgroundColor: "rgba(220, 188, 250, 0.65)",
    width: 8,
    height: 6,
  },
  rectangle76: {
    top: 138,
    left: 9,
    width: 11,
  },
  rectangle77: {
    top: 695,
    left: 14,
    width: 37,
    backgroundColor: Color.colorCornflowerblue_200,
    height: 8,
  },
  rectangle78: {
    top: 105,
    left: 375,
    backgroundColor: "rgba(220, 188, 250, 0.6)",
    height: 6,
  },
  rectangle79: {
    top: 103,
    left: 217,
    width: 18,
    height: 4,
  },
  rectangle80: {
    top: 472,
    left: 212,
    backgroundColor: "rgba(3, 163, 245, 0.6)",
    height: 4,
  },
  rectangle81: {
    top: 619,
    width: 37,
    backgroundColor: Color.colorOrange_100,
    height: 8,
  },
  rectangle82: {
    left: 59,
    backgroundColor: Color.colorPlum_100,
    width: 25,
    height: 6,
  },
  rectangle83: {
    left: 292,
    top: 11,
    backgroundColor: Color.colorDarkblue_100,
    width: 13,
    height: 8,
  },
  rectangle84: {
    top: 471,
    left: 327,
    backgroundColor: Color.colorPaleturquoise_200,
    width: 16,
    height: 4,
  },
  rectangle85: {
    top: 560,
    left: 79,
    backgroundColor: "rgba(72, 12, 167, 0.65)",
    width: 16,
    height: 7,
  },
  rectangle86: {
    top: 444,
    left: 188,
    backgroundColor: "rgba(157, 237, 26, 0.6)",
    width: 22,
    height: 8,
  },
  rectangle87: {
    top: 163,
    left: 312,
    backgroundColor: "rgba(255, 33, 251, 0.6)",
    width: 29,
    height: 4,
  },
  rectangle88: {
    top: 166,
    left: 269,
    backgroundColor: "rgba(220, 188, 250, 0.35)",
    width: 16,
    height: 5,
  },
  correct: {
    backgroundColor: Color.colorLavender,
    width: "100%",
    height: 932,
    overflow: "hidden",
    flex: 1,
  },
});

export default Correct;
