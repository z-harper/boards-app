import axios from 'axios';
import AppRouting from './components/AppRouting';

// Allows user credentials to be sent
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      <AppRouting />
    </>
  );
}

export default App;
