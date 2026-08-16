import { Schema, model } from 'mongoose';

export interface ITeam {
  id: string;
  name: string;
  city: string;
  memberCount: number;
  weeklyGoalMinutes: number;
}

const teamSchema = new Schema<ITeam>(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    city: { type: String, required: true },
    memberCount: { type: Number, required: true },
    weeklyGoalMinutes: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model<ITeam>('Team', teamSchema);
