import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Colors from "../../../assets/Colors";

const { Navigator, Screen } = createBottomTabNavigator();

export function Main() {
  return (
    <Navigator>
      <Screen />
    </Navigator>
  );
}
