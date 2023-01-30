//import logo from './logo.svg';
import { Flex } from '@aws-amplify/ui-react';
import './App.css';

import { 
  ActionCardCollection, NavBar
} from './ui-components';

function App() {
  return (
    <div>
      <Flex justifyContent="center">
      <NavBar />
      </Flex>
    <Flex justifyContent="center">
      
    <ActionCardCollection gap="1.5rem" 
            isPaginated itemsPerPage={2} />
    </Flex>
    </div>
  );
}

export default App;
