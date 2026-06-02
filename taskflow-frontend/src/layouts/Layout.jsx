// src/layouts/Layout.jsx
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div>
      <nav style={{ background: '#333', padding: '1rem', color: 'white' }}>
        <Link to="/" style={{ color: 'white', marginRight: '1rem' }}>Accueil</Link>
      </nav>
      <main style={{ padding: '1rem' }}>{children}</main>
    </div>
  );
}
