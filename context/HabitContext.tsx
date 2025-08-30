import { Habit } from "@/infrastructure/interfaces/Habit";
import { HabitContextType } from "@/infrastructure/interfaces/HabitContextType";
import { MOCK_HABITS } from "@/mocks/Habits";
import { createContext, ReactNode, useContext, useState } from "react";

const HabitContext = createContext<HabitContextType | undefined>(undefined);

const useHabits = () => {
  const context = useContext(HabitContext);
  if (!context) {
    throw new Error('useHabits must be used within a HabitProvider');
  }
  return context;
};

const HabitProvider = ({ children }: { children: ReactNode }) => {
  const [habits, setHabits] = useState<Habit[]>(MOCK_HABITS);

  const toggleHabit = (id: string) => {
    setHabits(prevHabits =>
      prevHabits.map(habit =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      )
    );
  };

  const value = {
    habits,
    toggleHabit,
  };

  return (
    <HabitContext.Provider value={value}>
      {children}
    </HabitContext.Provider>
  );
};