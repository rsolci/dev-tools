import React from 'react';

import { Router } from 'components/navigation'
import { Sidebar, PageContainer, Header } from 'components/layout'
import { NotFound, Home, QrGeneration, Base64 } from 'components/pages'
import { LinkButton } from 'components/buttons';

function App() {
  return (
    <div className='container mx-auto flex flex-col'>
      <Header />
      <div className='flex'>
        <Sidebar>
          <LinkButton to='/base64'>Base64</LinkButton>
          <LinkButton to='/qr-generation'>QR Code generation</LinkButton>
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
