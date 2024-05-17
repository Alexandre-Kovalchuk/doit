import { useRoute } from 'vue-router';
import { ref } from 'vue';

export function useGameNameAndId() {
  const route = useRoute();
  const path = route.path.split('/');

  if (path.length > 2) {
    const nameGame = path[2];
    const gameId = path[3];

    return { nameGame, gameId };
  }

  return { nameGame: null, gameId: null };
}
