import { useRoutes } from 'react-router-dom';
import { routes } from './routes';

const App = () => {
  const el = useRoutes(routes);
  return el;
};

export default App;
