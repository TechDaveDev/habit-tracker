import { Habit } from "@/infrastructure/interfaces/Habit";

export const MOCK_HABITS: Habit[] = [
  { id: '1', name: 'Leer 20 páginas de un libro', time: '07:00 AM - 07:30 AM', completed: true, color: 'bg-sky-500' },
  { id: '2', name: 'Hacer ejercicio (Cardio)', time: '08:00 AM - 09:00 AM', completed: false, color: 'bg-rose-500' },
  { id: '3', name: 'Meditar por 10 minutos', time: '09:15 AM - 09:25 AM', completed: false, color: 'bg-emerald-500' },
  { id: '4', name: 'Estudiar React Native', time: '06:00 PM - 08:00 PM', completed: true, color: 'bg-indigo-500' },
  { id: '5', name: 'Planificar el día siguiente', time: '10:00 PM - 10:15 PM', completed: false, color: 'bg-amber-500' },
];