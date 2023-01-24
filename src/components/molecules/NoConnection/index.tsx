import { TouchableOpacity } from 'react-native-gesture-handler'
import { Container, Text } from './styles'

import NetInfo from '@react-native-community/netinfo'
import { useEffect, useState } from 'react'

export function NoConnection() {
  const [isConnected, setIsConnected] = useState(true)

  const unsubscribe = NetInfo.addEventListener(state => {
    console.log('Connection type: ', state.type)
    console.log('Is phone connected: ', state.isConnected)

    if (state.isConnected && !isConnected) {
      setIsConnected(true)
    }

    if (!state.isConnected && isConnected) {
      setIsConnected(false)
    }
  })

  useEffect(() => {
    unsubscribe()
  }, [unsubscribe])

  if (isConnected) {
    return <></>
  }

  return (
    <TouchableOpacity>
      <Container>
        <Text>Sem conexão à internet</Text>
      </Container>
    </TouchableOpacity>
  )
}
