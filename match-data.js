const fixtures = {
  'spain-portugal': {
    homeTeam: 'Portugal',
    awayTeam: 'Spain',
    homeFlag: '🇵🇹',
    awayFlag: '🇪🇸',
    homeRanking: null,
    awayRanking: null,
    date: '6 Jul 2026',
    kickoff: '00:30 IST',
    stadium: 'AT&T Stadium',
    competition: 'FIFA World Cup',
    stage: 'Round of 16',
    city: 'Arlington, TX',
    homeProbability: null,
    awayProbability: null,
    players: {
      home: [
        { number: 8, name: 'Bruno Fernandes', position: 'AM', rating: 7.63, stat: '7.63' },
        { number: 12, name: 'Nuno Mendes', position: 'LB', rating: 7.53, stat: '7.53' },
        { number: 7, name: 'Cristiano Ronaldo', position: 'ST', rating: 7.6, stat: '3 goals, xG 3.01' }
      ],
      away: [
        { number: 14, name: 'Aymeric Laporte', position: 'CB', rating: 7.90, stat: '7.90' },
        { number: 19, name: 'Mikel Oyarzabal', position: 'FW', rating: 7.65, stat: '4 goals, xG 2.41' },
        { number: 10, name: 'Lamine Yamal', position: 'RW', rating: 7.20, stat: 'xG 1.14, creative impact' }
      ]
    },
    matchups: [
      { number: 7, name: 'Cristiano Ronaldo', position: 'ST', rating: 8.8, stat: '6 goals in 8', explanation: 'Ronaldo’s movement in the box could decide the key moments in a tight knockout game.' },
      { number: 10, name: 'Lamine Yamal', position: 'RW', rating: 8.8, stat: '3.4 successful dribbles', explanation: 'Yamal’s direct running can stretch Portugal’s full-back line and create overloads.' },
      { number: 8, name: 'Bruno Fernandes', position: 'AM', rating: 8.7, stat: '4 goal involvements', explanation: 'Fernandes will be central to Portugal’s creativity and tempo in transition.' }
    ],
    h2h: { overall: { wins: 8, draws: 7, losses: 6 } },
    form: {
      home: [
        { opponent: 'Croatia', ranking: 13, score: '2-1', result: 'Win' },
        { opponent: 'Colombia', ranking: 11, score: '0-0', result: 'Draw' },
        { opponent: 'Uzbekistan', ranking: 60, score: '5-0', result: 'Win' },
        { opponent: 'DR Congo', ranking: 46, score: '1-1', result: 'Draw' },
        { opponent: 'Nigeria', ranking: 26, score: '2-1', result: 'Win' }
      ],
      away: [
        { opponent: 'Austria', ranking: 24, score: '3-0', result: 'Win' },
        { opponent: 'Uruguay', ranking: 16, score: '0-1', result: 'Win' },
        { opponent: 'Saudi Arabia', ranking: 61, score: '4-0', result: 'Win' },
        { opponent: 'Cape Verde', ranking: 64, score: '0-0', result: 'Draw' },
        { opponent: 'Peru', ranking: 52, score: '1-3', result: 'Win' }
      ]
    },
    storylines: [
      'Portugal arrive with a star-driven forward line and a proven knockout mentality.',
      'Spain have looked sharp in transition and dangerous on the break.',
      'This World Cup round-of-16 clash is set to be one of the tournament’s most compelling ties.'
    ]
  }
}