import {Text, View} from 'react-native';
import Colors from "../../../assets/Colors";
import Fonts from "../../../assets/Fonts";

const exampleRows = [
    {field: '(Dano)', value: '2d8 - (6, 8)'},
    {field: '(Dano)', value: '2d8 - (6, 8)'},
    {field: '(Dano)', value: '2d8 - (6, 8)'},
]

export function BoxResult({title = "ATAQUE", total = 32, rows = exampleRows}) {
    return (
        <View style={{width: '85%', borderRadius: 5, overflow: 'hidden', elevation: 4}}>
            <View style={{
                width: '100%',
                padding: 6,
                backgroundColor: Colors.primary,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <Text style={{fontFamily: Fonts.medium, fontSize: 14, color: 'white', bottom: -2}}>{title}</Text>
            </View>

            <View style={{
                backgroundColor: Colors.secondary,
                padding: 25,
                alignItems: 'center',
                gap: 5
            }}>
                <Text style={{fontFamily: Fonts.bold, fontSize: 45, color: 'white'}}>{total}</Text>

                {rows.map((item, index) => {
                    return <Row key={index} field={item.field} value={item.value}/>
                })}
            </View>
        </View>
    )
}

function Row({field, value}) {
    return (
        <View style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderColor: Colors.primary,
            borderBottomWidth: 1
        }}>
            <Text style={{fontFamily: Fonts.regular, fontSize: 16, color: 'white'}}>{value}</Text>

            <Text style={{fontFamily: Fonts.regular, fontSize: 16, color: '#ABA9A9'}}>{field}</Text>
        </View>
    )
}