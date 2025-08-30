import { Habit } from "./Habit";

export interface HabitContextType {
  habits: Habit[];
  toggleHabit: (id: string) => void;
}