import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import type { AppRoutes } from './Navigation';
import { Home, Start } from '../screens';
import { SearchBar } from 'react-native-search-bar';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

const Stack = createStackNavigator<AppRoutes>();

const AppContainer = () => {
  const inputRef = React.useRef<TextInput>(null);
  return (
    <NavigationContainer>
      <Stack.Navigator
        // headerMode="none"
        screenOptions={{
          headerBackTitleVisible: false,
        }}
      >
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen
          name="Home"
          options={{
            headerTitle: () => (
              <View style={styles.container}>
                <SearchBar
                  ref={inputRef}
                  placeholder="Type here"
                  containerStyle={styles.searchContainer}
                  inputContainerStyle={styles.inputContainer}
                  searchIcon={<Feather name="search" color="black" size={20} />}
                  clearIcon={
                    <Feather name="x-circle" color="black" size={20} />
                  }
                  cancelButtonContainerStyle={styles.cancelButtonContainer}
                  cancelButtonTextStyle={styles.cancelButtonText}
                  clearTextOnCancel={true}
                />
              </View>
            ),
            headerTitleContainerStyle: {
              // see https://github.com/react-navigation/react-navigation/blob/main/packages/stack/src/views/Header/HeaderSegment.tsx#L352
              marginRight: 16,
            },
          }}
        >
          {() => <Home inputRef={inputRef} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minWidth: '100%',
    justifyContent: 'center',
  },
  searchContainer: {
    padding: 0,
    backgroundColor: 'transparent',
  },
  inputContainer: {
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  cancelButtonContainer: { right: 0 },
  cancelButtonText: { color: 'rgb(0, 122, 255)' },
});

export default AppContainer;
