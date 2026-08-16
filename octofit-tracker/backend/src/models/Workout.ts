import { Schema, model } from 'mongoose';

export interface IWorkout {
  id: string;
  title: string;
  level: string;
  focusArea: string;
  durationMinutes: number;
  suggestedForGoal: string;
}

const workoutSchema = new Schema<IWorkout>(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    level: { type: String, required: true },
    focusArea: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    suggestedForGoal: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<IWorkout>('Workout', workoutSchema);
