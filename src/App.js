import React from 'react';

import { Router, Link } from 'components/navigation'
import { Sidebar, PageContainer } from 'components/layout'
import { NotFound } from 'components/pages'

function App() {
  return (
    <div>
      <Sidebar>
        <Link to='/qr-generation' >QR Code generation</Link>
      </Sidebar>
      <PageContainer>
        <Router>
          <NotFound default />
        </Router>
      </PageContainer>
    </div>
  );
}

export default App;
