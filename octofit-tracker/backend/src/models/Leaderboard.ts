import { Schema, model } from 'mongoose';

export interface ILeaderboardEntry {
  userId: string;
  displayName: string;
  teamName: string;
  points: number;
  rank: number;
}

const leaderboardSchema = new Schema<ILeaderboardEntry>(
  {
    userId: { type: String, required: true, unique: true },
    displayName: { type: String, required: true },
    teamName: { type: String, required: true },
    points: { type: Number, required: true },
    rank: { type: Number, required: true },
  },
  { timestamps: true }
);

export default model<ILeaderboardEntry>('Leaderboard', leaderboardSchema);
