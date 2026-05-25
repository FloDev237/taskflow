// src/pages/TaskDetail.jsx
import { useParams, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function TaskDetail() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem('taskflow_data');
    if (stored) {
      const tasks = JSON.parse(stored);
      const found = tasks.find(t => t.id === parseInt(id));
      setTask(found || null);
    }
    setLoading(false);
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