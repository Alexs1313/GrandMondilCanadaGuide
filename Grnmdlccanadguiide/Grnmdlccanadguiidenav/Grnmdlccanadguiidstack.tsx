import {createStackNavigator} from '@react-navigation/stack';

import Grnmdlccanadguiidetab from '../../Grnmdlccanadguiidetab.tsx';
import Grnmdlccanadguiideon from '../Grnmdlccanadguiidescrn/Grnmdlccanadguiideon.tsx';
import Grnmdlccanadguiidloadr from '../Grnmdlccanadguiidecpn/Grnmdlccanadguiidloadr.tsx';
import Grnmdlccanadguiidelocdtl from '../Grnmdlccanadguiidescrn/Grnmdlccanadguiidelocdtl';

const Stack = createStackNavigator();

const Grnmdlccanadguiidstack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="Grnmdlccanadguiidloadr"
        component={Grnmdlccanadguiidloadr}
      />
      <Stack.Screen
        name="Grnmdlccanadguiideon"
        component={Grnmdlccanadguiideon}
      />
      <Stack.Screen
        name="Grnmdlccanadguiidetab"
        component={Grnmdlccanadguiidetab}
      />
      <Stack.Screen
        name="Grnmdlccanadguiidelocdtl"
        component={Grnmdlccanadguiidelocdtl}
      />
    </Stack.Navigator>
  );
};

export default Grnmdlccanadguiidstack;
