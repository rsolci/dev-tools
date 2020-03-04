import React from 'react';

import { Router, Link } from 'components/navigation'
import { Sidebar, PageContainer, Header } from 'components/layout'
import { NotFound, Home, QrGeneration, Base64 } from 'components/pages'

function App() {
  return (
    <div className='container mx-auto flex flex-col'>
      <Header />
      <div className='flex'>
        <Sidebar>
          <Link to='/base64' >Base64</Link>
          <Link to='/qr-generation' >QR Code generation</Link>
        </Sidebar>
        <PageContainer>
          <Router>
            <Home path='/'/>
            <QrGeneration path='/qr-generation'/>
            <Base64 path='/base64'/>
            <NotFound default />
          </Router>
        </PageContainer>
      </div>
    </div>
  );
}

export default App;
