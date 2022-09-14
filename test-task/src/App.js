
import './App.scss';
import { getApiResource } from './reduser';
import { store } from './reduser/store';
import Pages  from './components/pages'
import { Provider } from 'react-redux';





function App() {
  document.onload=getApiResource('https://reqres.in/api/users?page=1')
  return (
    <Provider store={store} >
      <div className="App"  >        
        <Pages/>
      </div>
    </Provider>
  );
}

export default App;
