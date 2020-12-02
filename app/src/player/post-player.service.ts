import { PlayerProfile } from "./player.model";

const PROFILE_URL = process.env.NODE_ENV === 'production'
  ? 'https://us-central1-league-of-code-7b550.cloudfunctions.net/player'
  : 'http://localhost:5000/league-of-code-7b550/us-central1/player';

export const postPlayer = async (player: PlayerProfile) => {
  const response = await fetch(PROFILE_URL, {
    method: 'POST',
    body: JSON.stringify(player),
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (!response.ok) {
    throw new Error(
      `Failed to get the leaderboard:\n${response.status} ${response.statusText}`
    );
  }

  return player;
};
