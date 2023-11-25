import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Colors from "../../../assets/Colors";

const { Navigator, Screen } = createBottomTabNavigator();

import { Skills } from "../../../screens/Main/Skills";
import { Attacks } from "../../../screens/Main/Attacks";
import { Armor } from "../../../screens/Main/Armor";
import { Characters } from "../../../screens/Main/Characters";

import { ImageView } from "../../../components/ImageView";

import SkillsIcon from "../../../assets/Icons/skills.png";
import AttacksIcon from "../../../assets/Icons/attacks.png";
import ArmorIcon from "../../../assets/Icons/armor.png";
import CharactersIcon from "../../../assets/Icons/characters.png";
import LogoutIcon from "../../../assets/Icons/logout.png";

const Icons = [
  { screen: "Skills", icon: SkillsIcon },
  { screen: "Attacks", icon: AttacksIcon },
  { screen: "Armor", icon: ArmorIcon },
  { screen: "Characters", icon: CharactersIcon },
];

export function Main() {
  return (
    <Navigator
      backBehavior="none"
      initialRouteName="Characters"
      screenOptions={({ route }) => ({
        lazy: false,
        headerShown: false,
        statusBarAnimation: "fade",
        tabBarStyle: {
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: Colors.primary,
          borderColor: Colors.primary,
          height: "12%",
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          let icon;

          Icons.forEach((ico) => {
            if (ico.screen === route.name) icon = ico.icon;
          });

          return (
            <ImageView
              image={icon}
              width={30}
              style={{ opacity: focused ? 1 : 0.5 }}
            />
          );
        },
      })}
      sceneContainerStyle={{ backgroundColor: Colors.background }}
      detachInactiveScreens={false}
    >
      <Screen name="Skills" component={Skills} />
      <Screen name="Attacks" component={Attacks} />
      <Screen name="Armor" component={Armor} />
      <Screen name="Characters" component={Characters} />
    </Navigator>
  );
}
