import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.jsx';

/* Build-time render used by scripts/prerender.mjs — never shipped to the browser. */
export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
