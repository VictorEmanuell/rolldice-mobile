import { createNativeStackNavigator } from "@react-navigation/native-stack";

const { Navigator, Screen } = createNativeStackNavigator();

import { SelectCharacter } from "../../../../screens/Main/Characters/SelectCharacter";
import { EditCharacter } from "../../../../screens/Main/Characters/EditCharacter";

export function CharactersStack() {
  return (
    <Navigator screenOptions={{
      headerShown: false
    }}>
      <Screen name="SelectCharacter" component={SelectCharacter} />
      <Screen name="EditCharacter" component={EditCharacter} />
    </Navigator>
  );
}
