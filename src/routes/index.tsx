/* eslint-disable react-native/no-inline-styles */
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/screens/Home'
import { RouteNames } from '@/screens/names'
import { useTheme } from 'styled-components'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ExpandTotals } from '@/components/molecules/ExpenseTotalsFloat'
import { CreateEntryButton } from '@/components/molecules/CreateEntryButton'
import { HeaderButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types'

const { Navigator, Screen } = createNativeStackNavigator()

const renderCreateEntryButtonOnHeader = (props: HeaderButtonProps) => <CreateEntryButton props={props} />

export function Routes() {
  const { colors } = useTheme()

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingHorizontal: 16,
      }}
    >
      <NavigationContainer>
        <Navigator
          screenOptions={{
            animation: 'fade',
            headerTitle: 'expenses control',
            headerStyle: { backgroundColor: colors.background },
            headerTitleStyle: { color: colors.text },
            contentStyle: { backgroundColor: colors.background },
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
    </SafeAreaView>
  )
}
