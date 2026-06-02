// src/pages/TaskDetail.jsx
import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/tasks/${id}`)
      .then(res => {
        if (!res.ok) throw new Error('Tâche non trouvée');
        return res.json();
      })
      .then(data => {
        setTask(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Chargement...</div>;
  if (!task) return <Navigate to="/" />;

  return (
    <div>
      <h1>{task.titre}</h1>
      <p><strong>Description :</strong> {task.description}</p>
      <p><strong>Statut :</strong> {task.statut}</p>
      <p><strong>ID technique :</strong> {task.id}</p>
    </div>
  );
}