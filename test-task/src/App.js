
import './App.scss';
import { getApiResource } from './reduser';
import { store } from './reduser/store';
import Pages  from './components/pages'
import { Provider } from 'react-redux';
import { Link,Route, Routes, BrowserRouter} from 'react-router-dom'
import FirstPage from './components/firstPage';
import { useEffect, useState } from 'react';





function App() {
  
  
  
  useEffect(()=>{
     getApiResource('https://reqres.in/api/users?page=1')
  },[])
  return (
    
    <Provider store={store} >
      
      <div className="App"  > 
        
          <Routes>
            <Route path='/' element={<FirstPage/>}/>
            <Route path='/=1' element={<Pages/>}/> 
            <Route path='/=2' element={<Pages/>}/>        
          </Routes>
         
      </div>
      
      
    </Provider>
  );
}

export default App;
