import styled from "styled-components";
import { View, Image, Text } from "react-native";
import Constants from "expo-constants";

//color
export const Colors = {
  primary: "#ffffff",
  secondary: "#E5E7EB",
  tertiary: "#1F2937",
  dakLight: "#9CA3AF",
  brand: "#d2ab5e",
  purple: "#6D28D9",
  green: "#10B981",
  red: "#EF4444",
  brown: "#693300",
};

const StatusBarHeight = Constants.statusBarHeight;
const { primary, secondary, tertiary, dakLight, brand, green, red, purple, brown } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 25px;
  padding-top: ${StatusBarHeight + 10}px;
  background-color: ${primary};
`;

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const PageLogo = styled.Image`
  width: 150px;
  height: 100px;
`;

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  color: ${brand};
  padding: 10px;
`;
