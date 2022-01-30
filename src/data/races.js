module.exports = [
  {
    id: 1,
    name: 'Human (Auron)',
    size: ['M'],
    speed: 30,

    ability: [
      {
        choose: {
          from: ['str', 'dex', 'con', 'int', 'wis', 'cha'],
          count: 2,
        },
      },
    ],
    age: {
      mature: 20,
      max: 100,
    },

    feats: [
      {
        any: 1,
      },
    ],
    skillProficiencies: [
      {
        any: 1,
      },
    ],
    languageProficiencies: [
      {
        common: true,
        anyStandard: 1,
      },
    ],
    entries: [
      {
        name: 'Age',
        type: 'entries',
        entries: [
          'Humans reach adulthood in their late teens. Most human initiates have completed the trials and found a glorious or inglorious death before they turn 30. Viziers can enjoy longer service to their gods, in theory living up to a century.',
        ],
      },
      {
        name: 'Alignment',
        type: 'entries',
        entries: [
          'Humans tend toward no particular alignment. The best and the worst are found among them.',
        ],
      },
      {
        type: 'entries',
        name: 'Size',
        entries: [
          'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium',
        ],
      },
      {
        name: 'Ability Score Increase',
        entries: ['Two different ability scores of your choice increase by 1.'],
        type: 'entries',
      },
      {
        name: 'Skills',
        entries: ['You gain proficiency in one skill of your choice.'],
        type: 'entries',
      },
      {
        name: 'Feat',
        entries: ['You gain one {@5etools feat|feats.html} of your choice.'],
        type: 'entries',
      },
      {
        name: 'Languages',
        entries: [
          'You can speak, read, and write Common and one extra language of your choice.',
        ],
        type: 'entries',
      },
    ],
    hasFluff: true,
    hasFluffImages: true,
  },
  {
    id: 2,
    name: 'Human (Nyxen)',
    size: ['M'],
    speed: 30,

    ability: [
      {
        choose: {
          from: ['str', 'dex', 'con', 'int', 'wis', 'cha'],
          count: 2,
        },
      },
    ],
    age: {
      mature: 20,
      max: 100,
    },

    feats: [
      {
        any: 1,
      },
    ],
    skillProficiencies: [
      {
        any: 1,
      },
    ],
    languageProficiencies: [
      {
        common: true,
        anyStandard: 1,
      },
    ],
    entries: [
      {
        name: 'Age',
        type: 'entries',
        entries: [
          'Humans reach adulthood in their late teens. Most human initiates have completed the trials and found a glorious or inglorious death before they turn 30. Viziers can enjoy longer service to their gods, in theory living up to a century.',
        ],
      },
      {
        name: 'Alignment',
        type: 'entries',
        entries: [
          'Humans tend toward no particular alignment. The best and the worst are found among them.',
        ],
      },
      {
        type: 'entries',
        name: 'Size',
        entries: [
          'Humans vary widely in height and build, from barely 5 feet to well over 6 feet tall. Regardless of your position in that range, your size is Medium',
        ],
      },
      {
        name: 'Ability Score Increase',
        entries: ['Two different ability scores of your choice increase by 1.'],
        type: 'entries',
      },
      {
        name: 'Skills',
        entries: ['You gain proficiency in one skill of your choice.'],
        type: 'entries',
      },
      {
        name: 'Feat',
        entries: ['You gain one {@5etools feat|feats.html} of your choice.'],
        type: 'entries',
      },
      {
        name: 'Languages',
        entries: [
          'You can speak, read, and write Common and one extra language of your choice.',
        ],
        type: 'entries',
      },
    ],
    hasFluff: true,
    hasFluffImages: true,
  },
]
