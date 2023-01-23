/* eslint-disable react-native/no-inline-styles */
import { StatusBar } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { ThemeProvider } from 'styled-components'

import { Routes } from '@/routes'

import { theme } from '@/styles/theme'

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <SafeAreaProvider>
          <Routes />
          <StatusBar barStyle="light-content" animated />
        </SafeAreaProvider>
      </ThemeProvider>
    </GestureHandlerRootView>
  )
}
