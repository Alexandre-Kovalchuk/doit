import { useRoute } from 'vue-router';

export let nameGame = null;
export let gameId = null;
export function namePath() {
  const urlPath = useRoute().path;
  const namePath = urlPath.split('/');

  if (namePath.length > 2) {
    nameGame = namePath[2];
    gameId = namePath[3];
  }
}
