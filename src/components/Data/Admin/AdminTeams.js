import { ref } from 'vue';

export function adminTeamsData() {
  const nameBtn = ['Edit mode', 'Add Team'];

  const nameTh = ['Team', 'Leader', 'Main Game', 'Creation Date'];

  const nameTd = ref([
    { team: 'Xpomba', leader: 'Jack003', game: 'StarCraft II', date: '07/21/17' },
    { team: 'Krasnoludy777', leader: 'Jack003', game: 'CS:GO', date: '07/16/17' },
    { team: 'Team Virus PRO ', leader: 'Jack003', game: 'Main News', date: '12/30/19' },
    { team: 'Team G2B', leader: 'Jack003', game: 'Fifa 2020', date: '02/08/13' },
    { team: 'TEAM Blacer', leader: 'Jack003', game: 'Valorant', date: '08/10/12' },
    { team: 'Drużyna pierścienia', leader: 'Jack003', game: 'Greenland', date: '05/16/18' },
    { team: 'NoobTeam87', leader: 'Jack003', game: 'Spain', date: '01/26/13' },
    { team: 'PowerRengers', leader: 'Jack003', game: 'Niue', date: '08/16/18' },
    { team: 'Edward Gaming', leader: 'Jack003', game: 'Guam', date: '06/29/16' },
    { team: '尼茲奇西爾', leader: 'Jack003', game: 'Costa Rica', date: '12/25/15' },
  ]);

  return { nameBtn, nameTh, nameTd };
}
