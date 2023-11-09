import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

import { styles } from "./styles";

import SearchIcon from "../../../assets/Icons/search.png";

import { Header } from "../../../components/Header";
import { ImageView } from "../../../components/ImageView";

export function Skills() {
  // Hooks
  const [inputFocused, setInputFocused] = useState(false);

  // Animations

  const headerTranslateY = useSharedValue(0);
  const headerHeight = useSharedValue(75);

  const hideHeader = () => {
    headerTranslateY.value = withTiming(-80, { duration: 400 });
    headerHeight.value = withTiming(0, { duration: 400 });
  };

  const showHeader = () => {
    headerTranslateY.value = withTiming(0, { duration: 300 });
    headerHeight.value = withTiming(75, { duration: 300 });
  };

  useEffect(() => {
    if (inputFocused) {
      hideHeader();
    } else {
      showHeader();
    }
  }, [inputFocused]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Animated.View
            style={[
              useAnimatedStyle(() => {
                "worklet";
                return {
                  transform: [{ translateY: headerTranslateY.value }],
                  height: headerHeight.value,
                };
              }),
            ]}
          >
            <Header title="Perícias" />
          </Animated.View>

          <View style={styles.contentContainer}>
            <View style={styles.searchInputContainer}>
              <View style={styles.searchInputIcon}>
                <ImageView image={SearchIcon} width={15} />
              </View>

              <TextInput
                placeholder="Digite o nome da perícia..."
                placeholderTextColor="#cccccc65"
                cursorColor="#cccccc65"
                style={styles.searchTextInput}
                onFocus={() => setInputFocused(true)}
                onBlur={() => setInputFocused(false)}
              />
            </View>

            <FlatList
              style={{ width: "100%" }}
              contentContainerStyle={styles.flatList}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}