import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import AdminLayout from './Layout/Admin/AdminLayout';
import SiteLayout from './Layout/Site/SiteLayout';
import OficeLayout from './Layout/Office/OficeLayout';

function App() {
  return (
    <>
      <Switch>
      <Route path="/admin/*" component={AdminLayout} />
      <Route path="/office/*" component={OficeLayout} />
      <Route path="/*" component={SiteLayout} />
      </Switch>
    </>
  );
}

export default App;
