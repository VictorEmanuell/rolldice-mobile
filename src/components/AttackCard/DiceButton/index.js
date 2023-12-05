import {TouchableOpacity, View, Text} from 'react-native';

import {ImageView} from '../../ImageView';

import Dice from '../../../assets/Icons/dice.png';

import Fonts from '../../../assets/Fonts';
import Colors from '../../../assets/Colors';

export function DiceButton({label, color = Colors.primary, onPress}) {
  return (
    <TouchableOpacity
      activeOpacity={0.88}
      style={{
        paddingVertical: 3,
        paddingHorizontal: 10,
        backgroundColor: color,
        borderRadius: 5,
        elevation: 4,
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row', marginTop: 2}}>
        <ImageView image={Dice} width={22} style={{marginHorizontal: 4}}/>
        <ImageView image={Dice} width={22} style={{marginHorizontal: 4}}/>
      </View>

      <Text style={{fontFamily: Fonts.regular, fontSize: 9, color: 'white', marginTop: 1, paddingBottom: 2, bottom: -2}}>{label}</Text>
    </TouchableOpacity>
  )
}