// src/components/TaskForm.jsx
import { useState } from 'react';

export default function TaskForm({ onAddTask }) {
  const [titre, setTitre] = useState('');
  const [description, setDescription] = useState('');
  const [statut, setStatut] = useState('A faire');

  const handleSubmit = (e) => {
    e.preventDefault();                     // pas de rechargement
    const newTask = {
      id: Date.now(),                       // identifiant unique
      titre,
      description,
      statut
    };
    onAddTask(newTask);                     // remontée vers Dashboard
    // Réinitialisation du formulaire
    setTitre('');
    setDescription('');
    setStatut('A faire');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '2rem', padding: '1rem', border: '1px solid #aaa' }}>
      <div>
        <label>Titre : </label>
        <input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} required />
      </div>
      <div>
        <label>Description : </label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
      </div>
      <div>
        <label>Statut : </label>
        <select value={statut} onChange={(e) => setStatut(e.target.value)}>
          <option value="A faire">A faire</option>
          <option value="En cours">En cours</option>
          <option value="Termine">Terminé</option>
        </select>
      </div>
      <button type="submit">Ajouter la tâche</button>
    </form>
  );
}