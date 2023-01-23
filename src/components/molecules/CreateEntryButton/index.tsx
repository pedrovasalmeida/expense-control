import { HeaderButtonProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import { Text } from '../ExpenseTotalsResume/styles'

interface CreateEntryButtonProps {
  props: HeaderButtonProps
}

export function CreateEntryButton({}: CreateEntryButtonProps) {
  return <Text>+</Text>
}
