import mongoose from 'mongoose';
import Activity from '../models/Activity';
import Leaderboard from '../models/Leaderboard';
import Team from '../models/Team';
import User from '../models/User';
import Workout from '../models/Workout';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

const teams = [
  {
    id: 't-001',
    name: 'OctoFit Engineering',
    city: 'San Francisco',
    memberCount: 3,
    weeklyGoalMinutes: 900,
  },
  {
    id: 't-002',
    name: 'Frontend Flyers',
    city: 'Austin',
    memberCount: 2,
    weeklyGoalMinutes: 600,
  },
];

const users = [
  {
    id: 'u-001',
    username: 'octocat',
    displayName: 'Octo Cat',
    email: 'octocat@example.com',
    teamId: 't-001',
    fitnessGoal: 'Build endurance',
  },
  {
    id: 'u-002',
    username: 'mona',
    displayName: 'Mona Lisa',
    email: 'mona@example.com',
    teamId: 't-001',
    fitnessGoal: 'Increase strength',
  },
  {
    id: 'u-003',
    username: 'hubber',
    displayName: 'Hub Bertram',
    email: 'hubber@example.com',
    teamId: 't-002',
    fitnessGoal: 'Improve mobility',
  },
];

const activities = [
  {
    id: 'a-001',
    userId: 'u-001',
    type: 'run',
    durationMinutes: 32,
    caloriesBurned: 340,
    activityDate: new Date('2026-08-12T13:30:00Z'),
  },
  {
    id: 'a-002',
    userId: 'u-002',
    type: 'strength training',
    durationMinutes: 45,
    caloriesBurned: 410,
    activityDate: new Date('2026-08-13T18:15:00Z'),
  },
  {
    id: 'a-003',
    userId: 'u-003',
    type: 'yoga',
    durationMinutes: 28,
    caloriesBurned: 150,
    activityDate: new Date('2026-08-14T12:00:00Z'),
  },
];

const leaderboard = [
  {
    userId: 'u-001',
    displayName: 'Octo Cat',
    teamName: 'OctoFit Engineering',
    points: 1280,
    rank: 1,
  },
  {
    userId: 'u-002',
    displayName: 'Mona Lisa',
    teamName: 'OctoFit Engineering',
    points: 1125,
    rank: 2,
  },
  {
    userId: 'u-003',
    displayName: 'Hub Bertram',
    teamName: 'Frontend Flyers',
    points: 980,
    rank: 3,
  },
];

const workouts = [
  {
    id: 'w-001',
    title: 'Core Strength Starter',
    level: 'beginner',
    focusArea: 'core',
    durationMinutes: 25,
    suggestedForGoal: 'Increase strength',
  },
  {
    id: 'w-002',
    title: 'Tempo Run Builder',
    level: 'intermediate',
    focusArea: 'cardio',
    durationMinutes: 35,
    suggestedForGoal: 'Build endurance',
  },
  {
    id: 'w-003',
    title: 'Desk Reset Mobility',
    level: 'beginner',
    focusArea: 'mobility',
    durationMinutes: 18,
    suggestedForGoal: 'Improve mobility',
  },
];

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');
    console.log('Seed the octofit_db database with test data');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      Leaderboard.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    await Team.insertMany(teams);
    await User.insertMany(users);
    await Activity.insertMany(activities);
    await Leaderboard.insertMany(leaderboard);
    await Workout.insertMany(workouts);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
