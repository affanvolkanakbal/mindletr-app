export interface LeaderboardEntry {
  username: string;
  score: number;
  isCurrentUser?: boolean;
}

// Gerçek veriler buraya gelecek (API veya veritabanından)
export const MOCK_DAILY_LEADERBOARD: LeaderboardEntry[] = [];
export const MOCK_WEEKLY_LEADERBOARD: LeaderboardEntry[] = [];
export const MOCK_MONTHLY_LEADERBOARD: LeaderboardEntry[] = [];
