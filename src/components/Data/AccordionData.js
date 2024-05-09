import Basic from '@/views/AdminEdit/Basic.vue';
import Game from '@/views/AdminEdit/Game.vue';
import Register from '@/views/AdminEdit/Register.vue';
import Paid from '@/views/AdminEdit/Paid.vue';
import Player from '@/views/AdminEdit/Player.vue';
import Leagues from '@/views/AdminEdit/Leagues.vue';
import Prize from '@/views/AdminEdit/Prize.vue';
import Voting from '@/views/AdminEdit/Voting.vue';
import Additional from '@/views/AdminEdit/Additional.vue';
import Extra from '@/views/AdminEdit/Extra.vue';
import Streams from '@/views/AdminEdit/Streams.vue';
import Sponsors from '@/views/AdminEdit/Sponsors.vue';
import Rules from '@/views/AdminEdit/Rules.vue';
import PlayerEdit from '@/views/AdminEdit/PlayerEdit.vue';
import Advance from '@/views/AdminEdit/Advance.vue';
import Team from '@/views/AdminEdit/Team.vue';
import GameEdit from '@/views/AdminEdit/GameEdit.vue';
import Capsules from '@/views/AdminEdit/Capsules.vue';
import ToruanmentSystem from '@/views/AdminEdit/ToruanmentSystem.vue';
import MapVoting from '@/views/AdminEdit/MapVoting.vue';

const accordion = [
  { name: 'Basic info', component: Basic, isOpen: false },
  { name: 'Game info', component: Game, isOpen: false },
  { name: 'Registration', component: Register, isOpen: false },
  { name: 'If Paid', component: Paid, isOpen: false },
  { name: 'Player list', component: Player, isOpen: false },
  { name: 'Leagues', component: Leagues, isOpen: false },
  { name: 'Prize pool', component: Prize, isOpen: false },
  { name: 'Voting', component: Voting, isOpen: false },
  { name: 'Additional requairments', component: Additional, isOpen: false },
  { name: 'Extra', component: Extra, isOpen: false },
  { name: 'Streams', component: Streams, isOpen: false },
  { name: 'Sponsors', component: Sponsors, isOpen: false },
  { name: 'Rules', component: Rules, isOpen: false },
];

const accordionPlayer = [
  { name: 'Basic info', component: PlayerEdit, isOpen: false },
  { name: 'Advance', component: Advance, isOpen: false },
];

const accordionTeam = [
  { name: 'Basic info', component: Team, isOpen: false },
  { name: 'Players', component: Player, isOpen: false },
  { name: 'Advance', component: Advance, isOpen: false },
];

const accordionGame = [
  { name: 'Basic info', component: GameEdit, isOpen: false },
  { name: 'Capsules', component: Capsules, isOpen: false },
  { name: 'Toruanment System', component: ToruanmentSystem, isOpen: false },
  { name: 'Map Voting', component: MapVoting, isOpen: false },
];

export { accordion, accordionPlayer, accordionTeam, accordionGame };
