import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Rightsidebar from './Rightsidebar';

function App() {


  return (
    <>


      <div className="App">
        <Header />

        <div className="app_body">
          <Sidebar />
          <Feed />
          <Rightsidebar />
        </div>

      </div>


    </>
  );
}

export default App;
