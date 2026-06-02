import { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';

const API_URL = 'http://localhost:5000/api/tasks';

export default function Dashboard() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  // Chargement initial via fetch
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setTasks(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  // Ajout d'une tâche via POST
  const handleAddTask = async (newTaskData) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: newTaskData.titre,
          description: newTaskData.description,
          status: newTaskData.statut
        })
      });
      if (response.status === 201) {
        const savedTask = await response.json();
        setTasks([savedTask, ...tasks]);
      } else {
        alert("Erreur lors de l'ajout");
      }
    } catch (err) {
      console.error(err);
      alert("Impossible de contacter le serveur");
    }
  };

  if (loading) return <div>Chargement...</div>;

  return (
    <div>
      <h1>Tableau de bord TaskFlow</h1>
      <TaskForm onAddTask={handleAddTask} />
      <div className="tasks-list">
        {tasks.map(task => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
    </div>
  );
}