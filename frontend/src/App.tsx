import './App.css'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import { USER_ROUTES } from './constants/ROUTERS'
import UserLayout from './layouts/UserLayout';

const App: React.FC = () => {
  return (
    <div className='bg-gray-100 h-screen w-full overflow-auto'>
      <BrowserRouter>
        <Switch>
          <Route path={USER_ROUTES.USER_LAYOUT} component={UserLayout}/>
          <Route path={USER_ROUTES.LANDING_PAGE} component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
