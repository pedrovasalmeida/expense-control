import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from '@/screens/Home'
import { RouteNames } from '@/screens/names'
import { useTheme } from 'styled-components'
import { ExpandTotals } from '@/components/molecules/ExpenseTotalsFloat'
import { CreateEntryButton } from '@/components/molecules/CreateEntryButton'
import { HeaderButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types'

const { Navigator, Screen } = createNativeStackNavigator()

const renderCreateEntryButtonOnHeader = (props: HeaderButtonProps) => <CreateEntryButton props={props} />

export function Routes() {
  const { colors } = useTheme()

  return (
    <NavigationContainer>
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
