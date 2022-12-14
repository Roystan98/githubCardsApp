import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';
import StarMatch from './StarMatch';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App title="The GitHub Cards App" />
    <StarMatch />
  </StrictMode>
);
