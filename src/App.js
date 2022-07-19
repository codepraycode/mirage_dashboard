import {BrowserRouter} from 'react-router-dom';
import AppRoutes from "./routes";
// import {AuthProvider} from './context/auth_context';

import {StoreProvider} from './context';

function App() {
  return (
    <BrowserRouter>

      <StoreProvider>
        <AppRoutes/>
      </StoreProvider>

    </BrowserRouter>
    
  );
}

export default App;
