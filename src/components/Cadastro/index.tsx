import { Button, Container, Heading, HStack, Input, Spinner, Text, VStack, Select } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Logo from '../Logo'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";


export default function Cadastro() {
  return (
    <VStack width="full" bg='whiteAlpha.200' 
    align={"center"} 
    justifyContent={"center"}
    padding="40px"
    fontFamily={"Poppins"}
    spacing={"10"}
    >
    <Logo/>
    
    <VStack  width="full" spacing={"8"}>
      <VStack width="full">
        <Text fontSize='2xl' fontWeight={"bold"}>Cadastro</Text>
        <Input placeholder='Novo Usuário' size='lg' background="gray.300" />
      </VStack>

      <VStack width="full">
        <Text fontSize='2xl' fontWeight={"bold"}>Senha</Text>
        <Input type={"password"} placeholder='Nova Senha' size='lg' background="gray.300" />
      </VStack>

      <VStack width="full">
        <Text fontSize='2xl' fontWeight={"bold"}>Unidade</Text>
        <Select placeholder='Selecione sua unidade' size='lg' background="gray.300">
        <option value='Guarulhos - SP'>Guarulhos - SP</option>
        <option value='São Paulo - SP'>São Paulo - SP</option>
        <option value='Niterói - RJ'>Niterói - RJ</option>
        <option value='Manaus - AM'>Manaus - AM</option>
        </Select>
      </VStack>

      <VStack width="full">
        <Text fontSize='2xl' fontWeight={"bold"}>Email</Text>
        <Input type={"email"} placeholder='Email' size='lg' background="gray.300" />
      </VStack>

      <HStack alignSelf={"center"} width={"full"} justify="space-between">
        <Link to="/"><HStack><FontAwesomeIcon icon={faArrowLeft} color="#1e90ff" /><Text fontFamily={"Poppins"} color="blue.400">Voltar</Text></HStack></Link>
        <Text fontFamily={"Poppins"} color="blue.400">Registrar</Text>
      </HStack>
    </VStack>

    </VStack>
  )
}
