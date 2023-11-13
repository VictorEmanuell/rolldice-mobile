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
import * as JsSearch from "js-search";

import { styles } from "./styles";

import SearchIcon from "../../../assets/Icons/search.png";

import { Header } from "../../../components/Header";
import { ImageView } from "../../../components/ImageView";
import { SkillCard } from "../../../components/SkillCard";

export function Skills() {
  // Hooks
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
    <SafeAreaView style={{ flex: 1 }}>
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
                value={searchInput}
                onChangeText={setSearchInput}
              />
            </View>

            <FlatList
              style={{ width: "100%" }}
              contentContainerStyle={styles.flatList}
              showsVerticalScrollIndicator={false}
              data={searchInput ? searchResult : skills}
              keyExtractor={(item) => item.skill_id}
              renderItem={(props) => <SkillCard {...props} />}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const skills = [
  {
    skill_id: 1,
    name: "Acrobacia+",
    training: 1,
    trained: true,
    attribure: "DES",
    others: 1,
  },
  {
    skill_id: 2,
    name: "Adestramento*",
    training: 1,
    trained: false,
    attribure: "FOR",
    others: 1,
  },
  {
    skill_id: 3,
    name: "Atletismo",
    training: 1,
    trained: false,
    attribure: "CON",
    others: 1,
  },
  {
    skill_id: 4,
    name: "Atuação*",
    training: 1,
    trained: false,
    attribure: "INT",
    others: 1,
  },
  {
    skill_id: 5,
    name: "Cavalgar",
    training: 1,
    trained: false,
    attribure: "SAB",
    others: 1,
  },
  {
    skill_id: 6,
    name: "Conhecimento*",
    training: 1,
    trained: false,
    attribure: "CAR",
    others: 1,
  },
  {
    skill_id: 7,
    name: "Cura",
    training: 1,
    trained: true,
    attribure: "DES",
    others: 1,
  },
  {
    skill_id: 8,
    name: "Diplomacia",
    training: 1,
    trained: false,
    attribure: "FOR",
    others: 1,
  },
  {
    skill_id: 9,
    name: "Enganação",
    training: 1,
    trained: false,
    attribure: "CON",
    others: 1,
  },
  {
    skill_id: 10,
    name: "Fortitude",
    training: 1,
    trained: false,
    attribure: "INT",
    others: 1,
  },
  {
    skill_id: 11,
    name: "Furtividade+",
    training: 1,
    trained: false,
    attribure: "SAB",
    others: 1,
  },
  {
    skill_id: 12,
    name: "Guerra*",
    training: 1,
    trained: false,
    attribure: "CAR",
    others: 1,
  },
  {
    skill_id: 13,
    name: "Iniciativa",
    training: 1,
    trained: true,
    attribure: "DES",
    others: 1,
  },
  {
    skill_id: 14,
    name: "Intimidação",
    training: 1,
    trained: false,
    attribure: "FOR",
    others: 1,
  },
  {
    skill_id: 15,
    name: "Jogatina*",
    training: 1,
    trained: false,
    attribure: "CON",
    others: 1,
  },
  {
    skill_id: 16,
    name: "Ladinagem+*",
    training: 1,
    trained: false,
    attribure: "INT",
    others: 1,
  },
  {
    skill_id: 17,
    name: "Luta",
    training: 1,
    trained: false,
    attribure: "SAB",
    others: 1,
  },
  {
    skill_id: 18,
    name: "Misticismo*",
    training: 1,
    trained: false,
    attribure: "CAR",
    others: 1,
  },
  {
    skill_id: 19,
    name: "Nobreza*",
    training: 1,
    trained: true,
    attribure: "DES",
    others: 1,
  },
  {
    skill_id: 20,
    name: "Ofício",
    training: 1,
    trained: false,
    attribure: "FOR",
    others: 1,
  },
  {
    skill_id: 21,
    name: "Ofício",
    training: 1,
    trained: false,
    attribure: "CON",
    others: 1,
  },
  {
    skill_id: 22,
    name: "Percepção",
    training: 1,
    trained: false,
    attribure: "INT",
    others: 1,
  },
  {
    skill_id: 23,
    name: "Pilotagem*",
    training: 1,
    trained: false,
    attribure: "SAB",
    others: 1,
  },
  {
    skill_id: 24,
    name: "Pontaria",
    training: 1,
    trained: false,
    attribure: "CAR",
    others: 1,
  },
  {
    skill_id: 25,
    name: "Reflexos",
    training: 1,
    trained: false,
    attribure: "CON",
    others: 1,
  },
  {
    skill_id: 26,
    name: "Religião*",
    training: 1,
    trained: false,
    attribure: "INT",
    others: 1,
  },
  {
    skill_id: 27,
    name: "Sobrevivência",
    training: 1,
    trained: false,
    attribure: "SAB",
    others: 1,
  },
  {
    skill_id: 28,
    name: "Vontade",
    training: 1,
    trained: false,
    attribure: "CAR",
    others: 1,
  },
];
