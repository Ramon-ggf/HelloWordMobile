import styled from "styled-components/native";

export const AppMainText = styled.Text`
  color: #eb3474;
  font-size: 20;
  font-weight: bold;
  padding: 3%;
  text-align: center;
`;
AppMainText.displayName = "AppMainText";

export const WelcomeBG = styled.ImageBackground`
  display: flex;
  resize-mode: cover;
  width: 100%;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
`;
WelcomeBG.displayName = "WelcomeBG";

export const CommonText = styled.Text`
  color: #f9faf7;
  font-size: 10;
`;

export const EntryButton = styled.TouchableOpacity`
  background-color: #e81e0c;
  width: 50%;
  height: 5%;
  border-color: #a5eb1a;
  border-width: 5;
  align-items: center;
  justify-content: center;
`;

export const CatImage = styled.Image`
width: 50%;
height: 50%;
`;
