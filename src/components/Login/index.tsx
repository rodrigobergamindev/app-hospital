import { Button, Container, Heading, HStack, Input, Spinner, Text, VStack } from '@chakra-ui/react'
import { Link } from "react-router-dom";
import Logo from '../Logo'


export default function Login() {
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
        <Text fontSize='2xl' fontWeight={"bold"}>Login</Text>
        <Input placeholder='Usuário' size='lg' background="gray.300" />
      </VStack>

      <VStack width="full">
        <Text fontSize='2xl' fontWeight={"bold"}>Senha</Text>
        <Input placeholder='Senha' size='lg' background="gray.300" />
      </VStack>

      <VStack width="full">
        <Button colorScheme='red' size='lg' width={"full"}>
        <Link to="conta"><Text>Entrar</Text></Link>
        </Button>
      </VStack>

      <HStack alignSelf={"flex-start"}>
        <Link to="cadastro"><Text fontFamily={"Poppins"} color="blue.400">+ Criar Conta</Text></Link>
      </HStack>
    </VStack>

    </VStack>
  )
}
