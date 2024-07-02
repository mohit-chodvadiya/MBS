import { Route, Routes } from 'react-router-dom';
import './App.css';
import Booking from './Component/Booking';
import Ticketdetail  from './Component/Ticketdetail';
import Sits from './Component/Sits';

function App() {
  return (
    <>
      {/* <Booking /> */}
      <Routes>
        <Route path='/'element={ <Booking/>} />
        <Route path='/ticket/:id' element={ <Ticketdetail/>} />
        <Route path='/sites' element={ <Sits/>} />
      </Routes>
    </>
  );
}

export default App;
