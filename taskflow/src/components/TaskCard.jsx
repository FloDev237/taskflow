// src/components/TaskCard.jsx
import { Link } from 'react-router-dom';

export default function TaskCard({ task }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '1rem', padding: '1rem', borderRadius: '8px' }}>
      <Link to={`/task/${task.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
        <h3>{task.titre}</h3>
        <p>{task.description}</p>
        <p>Statut : <strong>{task.statut}</strong></p>
      </Link>
    </div>
  );
}