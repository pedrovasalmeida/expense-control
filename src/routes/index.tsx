import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/screens/Home'
import { RouteNames } from '@/screens/names'
import { useTheme } from 'styled-components'
import { ExpandTotals } from '@/components/molecules/ExpenseTotalsFloat'
import { CreateEntryButton } from '@/components/molecules/CreateEntryButton'
import { HeaderButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types'

const { Navigator, Screen } = createNativeStackNavigator()

import RNBootSplash from 'react-native-bootsplash'

const renderCreateEntryButtonOnHeader = (props: HeaderButtonProps) => <CreateEntryButton props={props} />

export function Routes() {
  const { colors } = useTheme()

  const hideSplashScreen = () => {
    setTimeout(() => {
      RNBootSplash.hide({ fade: true, duration: 2000 })
    }, 1000)
  }

  return (
    <NavigationContainer onReady={hideSplashScreen}>
      <Navigator
        screenOptions={{
          animation: 'fade',
          headerTitle: 'expenses control',
          headerStyle: { backgroundColor: colors.background },
          headerTitleStyle: { color: colors.text },
          contentStyle: { backgroundColor: colors.background, paddingHorizontal: 16 },
        }}
      >
        <Screen
          name={RouteNames.home}
          component={Home}
          options={{
            headerTitle: 'expenses control - home',
            headerRight: renderCreateEntryButtonOnHeader,
          }}
        />
      </Navigator>
      <ExpandTotals />
    </NavigationContainer>
  )
}
