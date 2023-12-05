import {View, Text} from 'react-native';

import Colors from '../../../assets/Colors';
import Fonts from '../../../assets/Fonts';

export function DataRow({label = 'null', value = 'null', full = false, critical = false}) {
  return (
    <View style={{}}>
      <View style={{flexDirection: 'row', paddingVertical: 4.2}}>
        <Text
          style={{fontFamily: Fonts.mediumItalic, color: 'white', fontSize: 13, width: '55%',}}
        >
          {label}
        </Text>

        <View
          style={{flex: 1, alignItems: 'center', justifyContent: 'flex-start', maxWidth: '45%', flexDirection: 'row'}}>
          {!critical ? (
            <View style={{
              paddingHorizontal: 10,
              borderRadius: 5,
              backgroundColor: Colors.primary,
              width: full ? '100%' : 'auto',
              borderColor: '#9C9C9C50',
              borderWidth: 1.5
            }}>
              <Text style={{
                fontFamily: Fonts.medium,
                color: 'white',
                fontSize: 11,
                bottom: -1.2,
                textAlign: 'center'
              }}>{value}</Text>
            </View>
          ) : (
            <>
              <View style={{
                paddingHorizontal: 10,
                borderRadius: 5,
                backgroundColor: Colors.primary,
                width: full ? '100%' : 'auto',
                borderColor: '#9C9C9C50',
                borderWidth: 1.5
              }}>
                <Text style={{
                  fontFamily: Fonts.medium,
                  color: 'white',
                  fontSize: 11,
                  bottom: -1.2,
                  textAlign: 'center'
                }}>{value[0]}</Text>
              </View>

              <Text style={{fontFamily: Fonts.medium, fontSize: 12, color: Colors.primary, bottom: -2.5}}>{" / "}</Text>

              <View style={{
                paddingHorizontal: 10,
                borderRadius: 5,
                backgroundColor: Colors.primary,
                width: full ? '100%' : 'auto',
                borderColor: '#9C9C9C50',
                borderWidth: 1.5
              }}>
                <Text style={{
                  fontFamily: Fonts.medium,
                  color: 'white',
                  fontSize: 11,
                  bottom: -1.2,
                  textAlign: 'center'
                }}>{'x' + value[1]}</Text>
              </View>
            </>
          )}
        </View>
      </View>

      <View style={{backgroundColor: Colors.primary, width: '100%', height: 1.2}}/>
    </View>
  )
}