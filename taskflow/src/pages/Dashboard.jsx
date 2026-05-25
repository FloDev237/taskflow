// src/pages/Dashboard.jsx
import { useState, useEffect } from 'react';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';

export default function Dashboard() {
  const [tasks, setTasks] = useState(() => {
    const stored = localStorage.getItem('taskflow_data');
    return stored ? JSON.parse(stored) : [
      { id: 1, titre: "Conception de l'ontologie", description: "Rédiger les axiomes de base du domaine.", statut: "A faire" },
      { id: 2, titre: "Développement du formulaire", description: "Créer le formulaire contrôlé React.", statut: "En cours" }
    ];
  });

  // Jalon 4 : persistance automatique 
  useEffect(() => {
    localStorage.setItem('taskflow_data', JSON.stringify(tasks));
  }, [tasks]);

  //  fonction pour ajouter une tâche
  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]); // spread operator – immutabilité
  };

  return (
    <div>
      <h1>Tableau de bord TaskFlow</h1>
      <TaskForm onAddTask={handleAddTask} />
      <div>
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />   // clé unique avec id 
        ))}
      </div>
    </div>
  );
}