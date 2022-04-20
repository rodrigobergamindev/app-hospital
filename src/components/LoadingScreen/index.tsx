import { Container, Heading, Spinner, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Logo from '../Logo'


export default function LoadingScreen() {
  return (
    <VStack width="full" height="100vh" bg='whiteAlpha.200' align={"center"} justifyContent={"center"} >
    <Logo/>
    <Heading as='h2' size='xl' fontFamily={"Poppins"}>
        App Hospital
    </Heading>
    <Spinner/>
    </VStack>
  )
}
