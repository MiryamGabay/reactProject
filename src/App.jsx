import { useState } from 'react';
import './App.css';
import EnhancedTable from './components/meetingTable';
import SiteDoesntExist from './components/siteDoesntExist';
import Service from './components/admin/service';
import AppointmentForm from './components/client/appointment';

function App() {

  const [exist, setExist]= useState(false);
  

  return (<>
    {/* { exist? <EnhancedTable></EnhancedTable> : <SiteDoesntExist></SiteDoesntExist>} */}
    {/* <MeettingTable></MeettingTable> */}
    <Service/>
    {/* <AppointmentForm></AppointmentForm> */}
    
  </>)
}
export default App;
