import {View, Text, TouchableOpacity} from "react-native";

import {styles} from "./styles";

import {ImageView} from "../ImageView";
import {DataRow} from "./DataRow";
import {DiceButton} from './DiceButton';

import Dice from "../../assets/Icons/dice.png";
import Edit from '../../assets/Icons/edit.png';
import Delete from '../../assets/Icons/delete.png';

import {attributeName} from '../../utils/Attributes'

export function AttackCard({index, data}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View style={styles.container}>
        <View style={styles.containerHeader}>
          <Text style={styles.textHeader}>{data.name}</Text>

          <TouchableOpacity
            activeOpacity={0.88}
            onPress={() => ""}
            style={styles.diceButton}
          >
            <ImageView image={Dice} width={24}/>
          </TouchableOpacity>
        </View>

        <View style={styles.containerData}>
          <DataRow label="Bônus de ataque" value={data.attack_bonus}/>
          <DataRow label="Dano" value={data.damage}/>
          <DataRow label="Dano extra" value={data.extra_damage}/>
          <DataRow label="Dados extra" value={data.extra_dices}/>
          <DataRow label="Crítico" value={[data.critical_value, data.critical_multiplier]} critical/>
          <DataRow label="Tipo de crítico" value={data.critical_type} full/>
          <DataRow label="Alcance" value={data.range} full/>
          <DataRow label="Tipo de dano" value={data.damage_type} full/>
          <DataRow label="Atributo no dano" value={attributeName(data.damage_attribute)} full/>
          <DataRow label="Perícia utilizada" value={"Luta"} full/>
        </View>

        <View style={styles.containerButtons}>
          <DiceButton label="PIOR DADO" color="#39284F"/>
          <DiceButton label="MELHOR DADO" color="#8938F0"/>
          <DiceButton label="CHANCE DE ERRO" color="#936DFF"/>
        </View>

        <View style={styles.containerOptions}>
          <TouchableOpacity
            activeOpacity={0.88}
            onPress={() => ""}
            style={styles.editButton}
          >
            <ImageView image={Edit} width={14}/>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.88}
            onPress={() => ""}
            style={styles.deleteButton}
          >
            <ImageView image={Delete} width={14}/>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
