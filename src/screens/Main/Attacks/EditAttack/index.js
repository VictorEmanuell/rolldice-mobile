import {useState} from "react";
import {
    View,
    TouchableWithoutFeedback,
    Keyboard,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    KeyboardAvoidingView,
    Modal
} from "react-native";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {
    createCharacter,
    deleteCharacter,
    updateCharacter,
} from "../../../../services/api/Character";
import {loading} from "../../../../utils/Loading";
import {useDispatch} from "react-redux";
import {setUserCharacterSelected} from "../../../../store/User/actions";

import {styles} from "./styles";

import {InputText} from "../../../../components/InputText";
import {WheelPicker} from "../../../../components/WheelPicker";
import {ImageView} from "../../../../components/ImageView";

import Save from "../../../../assets/Icons/save.png";
import Delete from "../../../../assets/Icons/delete.png";

import {RANGES, DAMAGES, DAMAGE_ATTRIBUTES, CRITICALS, USE_SKILL} from "../../../../constants";
import Colors from "../../../../assets/Colors";

import {attributeName} from '../../../../utils/Attributes';
import {useSkillName, useSkills} from "../../../../utils/UseSkill";

export function EditAttack({ modalState, setModalState, navigation}) {
    if (!modalState.action) return;

    const dispatch = useDispatch();

    const [name, setName] = useState(modalState.data?.name);
    const [attackBonus, setAttackBonus] = useState(modalState.data?.attack_bonus.toString());
    const [damage, setDamage] = useState(modalState.data?.damage);
    const [extraDamage, setExtraDamage] = useState(modalState.data?.extra_damage.toString());
    const [extraDices, setExtraDices] = useState(modalState.data?.extra_dices.toString());
    const [critical, setCritical] = useState(modalState.data?.critical_value.toString());
    const [criticalMultiplier, setCriticalMultiplier] = useState(modalState.data?.critical_multiplier.toString());
    const [criticalTypePicker, setCriticalTypePicker] = useState({
        value: modalState.data?.critical_type ?? "Nenhum",
        visible: false,
    });
    const [rangePicker, setRangePicker] = useState({
        value: modalState.data?.range ?? "Curto",
        visible: false,
    });
    const [damageTypePicker, setDamageTypePicker] = useState({
        value: modalState.data?.damage_type ?? "Perfuracao",
        visible: false,
    });
    const [damageAttributePicker, setDamageAttributePicker] = useState({
        value: modalState.data?.damage_attribute ?? "Nenhum",
        visible: false,
    });
    const [useSkillPicker, setUseSkillPicker] = useState({
        value: useSkillName(modalState.data?.use_skill) ? useSkillName(modalState.data?.use_skill) : "Atuação",
        visible: false,
    });

    return (
        <Modal
            animationType="slide"
            transparent={false}
            visible={modalState.visible}
            onRequestClose={() => {
                setModalState({visible: false});
            }}
        >
            <KeyboardAvoidingView behavior="height" style={{flex: 1, backgroundColor: Colors.background}}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.container}>
                        <KeyboardAwareScrollView
                            style={{width: "85%"}}
                            contentContainerStyle={styles.containerContent}
                            showsVerticalScrollIndicator={false}
                            enableOnAndroid={true}
                            extraScrollHeight={-350}
                        >
                            <InputText
                                label="Nome"
                                placeholder="Nome do ataque..."
                                containerStyle={{width: "100%"}}
                                value={name}
                                onChangeText={setName}
                            />

                            <View style={styles.divider}/>

                            <InputText
                                label="Bônus de ataque"
                                placeholder="0"
                                keyboardType="numeric"
                                containerStyle={{width: "100%"}}
                                value={attackBonus}
                                onChangeText={setAttackBonus}
                            />

                            <View style={styles.divider}/>

                            <InputText
                                label="Dano"
                                placeholder="2d8"
                                containerStyle={{width: "100%"}}
                                value={damage}
                                onChangeText={setDamage}
                            />

                            <View style={styles.divider}/>

                            <InputText
                                label="Dano extra"
                                placeholder="0"
                                keyboardType="numeric"
                                containerStyle={{width: "100%"}}
                                value={extraDamage}
                                onChangeText={setExtraDamage}
                            />

                            <View style={styles.divider}/>

                            <InputText
                                label="Dados extra"
                                placeholder="0"
                                keyboardType="numeric"
                                containerStyle={{width: "100%"}}
                                value={extraDices}
                                onChangeText={setExtraDices}
                            />

                            <View style={styles.divider}/>

                            <InputText
                                label="Crítico"
                                placeholder="0"
                                keyboardType="numeric"
                                containerStyle={{width: "100%"}}
                                value={critical}
                                onChangeText={setCritical}
                            />

                            <View style={styles.divider}/>

                            <InputText
                                label="Multiplicador do crítico"
                                placeholder="0"
                                keyboardType="numeric"
                                containerStyle={{width: "100%"}}
                                value={criticalMultiplier}
                                onChangeText={setCriticalMultiplier}
                            />

                            <View style={styles.divider}/>

                            <View>
                                <Text style={styles.labelClassPicker}>Tipo de crítico</Text>

                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    style={styles.buttonClassPicker}
                                    onPress={() =>
                                        setCriticalTypePicker({value: criticalTypePicker.value, visible: true})
                                    }
                                >
                                    <Text style={styles.textClassPicker}>{criticalTypePicker.value}</Text>
                                </TouchableOpacity>
                                <WheelPicker
                                    data={CRITICALS}
                                    picker={criticalTypePicker}
                                    setPicker={setCriticalTypePicker}
                                />
                            </View>

                            <View style={styles.divider}/>

                            <View>
                                <Text style={styles.labelClassPicker}>Alcance</Text>

                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    style={styles.buttonClassPicker}
                                    onPress={() =>
                                        setRangePicker({value: rangePicker.value, visible: true})
                                    }
                                >
                                    <Text style={styles.textClassPicker}>{rangePicker.value}</Text>
                                </TouchableOpacity>
                                <WheelPicker
                                    data={RANGES}
                                    picker={rangePicker}
                                    setPicker={setRangePicker}
                                />
                            </View>

                            <View style={styles.divider}/>

                            <View>
                                <Text style={styles.labelClassPicker}>Tipo de dano</Text>

                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    style={styles.buttonClassPicker}
                                    onPress={() =>
                                        setDamageTypePicker({value: damageTypePicker.value, visible: true})
                                    }
                                >
                                    <Text style={styles.textClassPicker}>{damageTypePicker.value}</Text>
                                </TouchableOpacity>
                                <WheelPicker
                                    data={DAMAGES}
                                    picker={damageTypePicker}
                                    setPicker={setDamageTypePicker}
                                />
                            </View>

                            <View style={styles.divider}/>

                            <View>
                                <Text style={styles.labelClassPicker}>Atributo de dano</Text>

                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    style={styles.buttonClassPicker}
                                    onPress={() =>
                                        setDamageAttributePicker({value: damageAttributePicker.value, visible: true})
                                    }
                                >
                                    <Text style={styles.textClassPicker}>{attributeName(damageAttributePicker.value)}</Text>
                                </TouchableOpacity>
                                <WheelPicker
                                    data={DAMAGE_ATTRIBUTES}
                                    picker={damageAttributePicker}
                                    setPicker={setDamageAttributePicker}
                                />
                            </View>

                            <View style={styles.divider}/>

                            <View>
                                <Text style={styles.labelClassPicker}>Perícia utilizada</Text>

                                <TouchableOpacity
                                    activeOpacity={0.9}
                                    style={styles.buttonClassPicker}
                                    onPress={() =>
                                        setUseSkillPicker({value: useSkillPicker.value, visible: true})
                                    }
                                >
                                    <Text style={styles.textClassPicker}>{useSkillPicker.value}</Text>
                                </TouchableOpacity>
                                <WheelPicker
                                    data={useSkills()}
                                    picker={useSkillPicker}
                                    setPicker={setUseSkillPicker}
                                />
                            </View>

                            <View style={styles.divider}/>

                            <TouchableOpacity
                                activeOpacity={0.88}
                                style={styles.saveButton}
                            >
                                <ImageView image={Save} width={20}/>
                            </TouchableOpacity>
                        </KeyboardAwareScrollView>

                        <View style={styles.containerUpdateButtons}>

                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </Modal>
    );
}
