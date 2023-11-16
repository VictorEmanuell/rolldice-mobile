import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles } from './styles';

import { Header } from '../../../components/Header';

export function Attacks() {
  return (
    <SafeAreaView edges={['right', 'top', 'left']} style={styles.container}>
      <Header title="Ataques"/>
    </SafeAreaView>
  );
}