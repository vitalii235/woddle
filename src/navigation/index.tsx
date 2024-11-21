import {MainPage} from '../pages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={MainPage}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
