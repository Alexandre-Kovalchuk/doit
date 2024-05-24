import Basic from '@/components/Pages/AdminEdit/Basic.vue';
import Game from '@/components/Pages/AdminEdit/Game.vue';
import Register from '@/components/Pages/AdminEdit/Register.vue';
import Paid from '@/components/Pages/AdminEdit/Paid.vue';
import Player from '@/components/Pages/AdminEdit/Player.vue';
import Leagues from '@/components/Pages/AdminEdit/Leagues.vue';
import Prize from '@/components/Pages/AdminEdit/Prize.vue';
import Voting from '@/components/Pages/AdminEdit/Voting.vue';
import Additional from '@/components/Pages/AdminEdit/Additional.vue';
import Extra from '@/components/Pages/AdminEdit/Extra.vue';
import Streams from '@/components/Pages/AdminEdit/Streams.vue';
import Sponsors from '@/components/Pages/AdminEdit/Sponsors.vue';
import Rules from '@/components/Pages/AdminEdit/Rules.vue';
import PlayerEdit from '@/components/Pages/AdminEdit/PlayerEdit.vue';
import Advance from '@/components/Pages/AdminEdit/Advance.vue';
import Team from '@/components/Pages/AdminEdit/Team.vue';
import GameEdit from '@/components/Pages/AdminEdit/GameEdit.vue';
import Capsules from '@/components/Pages/AdminEdit/Capsules.vue';
import ToruanmentSystem from '@/components/Pages/AdminEdit/ToruanmentSystem.vue';
import MapVoting from '@/components/Pages/AdminEdit/MapVoting.vue';

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
