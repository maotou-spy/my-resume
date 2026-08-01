import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AppRoutes } from '@/routes';
import { useScrollbarAutoHide } from '@/hooks/useScrollbarAutoHide';

function App() {
  useScrollbarAutoHide();

  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
