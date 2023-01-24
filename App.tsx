/* eslint-disable react-native/no-inline-styles */
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'

import { NoConnection } from '@/components/molecules/NoConnection'
import { Routes } from '@/routes'

import { theme } from '@/styles/theme'
import { Provider } from 'react-redux'
import { store } from '@/store'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <SafeAreaView
            style={{
              flex: 1,
              backgroundColor: theme.colors.background,
            }}
          >
            <Provider store={store}>
              <NoConnection />
              <Routes />
            </Provider>
            <StatusBar barStyle="light-content" animated />
          </SafeAreaView>
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
