import { Button, Container, Heading, HStack, Input, Spinner, Text, VStack } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import Logo from '../Logo'


export default function Home() {
  return (
    <VStack width="full" height="100vh" bg='whiteAlpha.200' 
    align={"center"} 
    justifyContent={"center"}
    padding="40px"
    fontFamily={"Poppins"}
    spacing={"10"}
    >
    <Logo/>
    
    <VStack  width="full" spacing={"8"}>
    <VStack width="full">
        <Button colorScheme='red' size='lg' width={"full"}>
          Alterar Cadastro
        </Button>
      </VStack>

      <VStack width="full">
        <Button colorScheme='red' size='lg' width={"full"}>
          Sair
        </Button>
      </VStack>

    </VStack>

    </VStack>
  )
}
