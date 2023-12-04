import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { useSelector } from "react-redux";
import * as JsSearch from "js-search";
import { FlatList } from "react-native-gesture-handler";

import { styles } from "./styles";

import SearchIcon from "../../../assets/Icons/search.png";

import { Header } from "../../../components/Header";
import { ImageView } from "../../../components/ImageView";
import { SkillCard } from "../../../components/SkillCard";

export function Skills() {
  const { skills } = useSelector((store) => store.character);

  useEffect(() => {
    setSkillsData(skills);
  }, [skills]);

  // Hooks
  const [skillsData, setSkillsData] = useState(skills);

  const [inputFocused, setInputFocused] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  // Search skill

  const search = new JsSearch.Search("skill_id");
  search.addIndex("name");
  search.addDocuments(skills);

  useEffect(() => {
    const result = search.search(searchInput);
    if (result.length > 0) {
      setSearchResult(result);
    }
  }, [searchInput]);

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
    <SafeAreaView edges={["right", "top", "left"]} style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container} onStartShouldSetResponder={() => true}>
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

          <View style={styles.containerContent}>
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
                value={searchInput}
                onChangeText={setSearchInput}
              />
            </View>

            <FlatList
              style={{ width: "100%" }}
              contentContainerStyle={styles.flatList}
              showsVerticalScrollIndicator={false}
              data={searchInput ? searchResult : skillsData}
              keyExtractor={(item) => item.id}
              renderItem={(props) => (
                <SkillCard {...props} index={props.index} />
              )}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}