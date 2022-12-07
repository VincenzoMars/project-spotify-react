import { ChakraProvider } from "@chakra-ui/react";
import "./App.scss";

const App = () => {
  return (
    <ChakraProvider>
      <div>Hello World</div>
    </ChakraProvider>
  );
};

export default App;
