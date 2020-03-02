import React from 'react';

import { Router, Link } from 'components/navigation'
import { Sidebar, PageContainer } from 'components/layout'

function App() {
  return (
    <div>
      <Sidebar>
        <Link to='/qr-generation' >QR Code generation</Link>
      </Sidebar>
      <PageContainer>
        <Router>

        </Router>
      </PageContainer>
    </div>
  );
}

export default App;
