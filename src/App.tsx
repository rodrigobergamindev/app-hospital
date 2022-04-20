import Login from './components/Login';
import LoadingScreen from './components/LoadingScreen';
import { extendTheme, ChakraProvider, VStack } from '@chakra-ui/react'
import Cadastro from './components/Cadastro';
import DrawerMenu from './components/Drawer';
import Pedidos from './components/Pedidos';
import Pedido from './components/Pedido';
import Home from './components/Home'
import { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link,
  BrowserRouter,
  Routes
} from "react-router-dom";
import { setTimeout } from 'timers';



function App() {

  const [loading, setLoading] = useState(true)


  useEffect(() => {
    setInterval(() => {
      setLoading(false)
    }, 2000);
  },[])

  return (
    <ChakraProvider>
      
      <VStack width="full" align={"center"} justify={"center"}>
      
        {
          !!loading? (

              <LoadingScreen/>
             
          ) : (
            <>
            
            <BrowserRouter>
            <DrawerMenu/>
            <Routes>
              <Route path='/' element={<Login/>}/>
              <Route path='cadastro' element={<Cadastro/>}/>
              <Route path='pedidos' element={<Pedidos/>}/>
              <Route path='conta' element={<Home/>}/>
              <Route path='pedidos/pedido/12345' element={<Pedido/>}/>
            </Routes>
            </BrowserRouter>
            </>
          )
        }
        
        </VStack>
        
    </ChakraProvider>
  );
}

export default App;
