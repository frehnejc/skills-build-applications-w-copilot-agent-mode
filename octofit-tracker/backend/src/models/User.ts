import { Schema, model } from 'mongoose';

export interface IUser {
  id: string;
  username: string;
  displayName: string;
  email: string;
  teamId: string;
  fitnessGoal: string;
}

const userSchema = new Schema<IUser>(
  {
    id: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    teamId: { type: String, required: true },
    fitnessGoal: { type: String, required: true },
  },
  { timestamps: true }
);

export default model<IUser>('User', userSchema);
