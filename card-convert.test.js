const { extractCardContent } = require('./card-convert.js');

describe('extractCardContent', () => {
	test('should extract card name and content correctly', () => {
		const mockFileLines = [
			'new Cards({',
			"		id: 'ignite', name: 'Ignite', type: 'magic', mana: 1, tier: 'legendary', courage: 8, vanish: true,",
			"		sound: 'magic22',",
			"		actions: [",
			"			{action: 'addCard', value: 2, what: 'sparks', to: 'drawCards'},",
			"			{action: 'addCard', value: 1, what: 'sparks', to: 'drawCards', with: ['frost']},",
			"			{action: 'addCard', value: 2, what: 'sparks', to: 'handCards'},",
			"			{action: 'addCard', value: 1, what: 'sparks', to: 'handCards', with: ['frost']},",
			"			{action: 'addCard', value: 2, what: 'sparks', to: 'discardCards'},",
			"			{action: 'addCard', value: 1, what: 'sparks', to: 'discardCards', with: ['frost']},",
			'		],',
			'		slots: 1,',
			'		shardUpgrades: {',
			'			vanish: false,',
			'		},',
			'}),',
			// ... other lines if needed
		];

		const startIndex = 0;
		const result = extractCardContent(mockFileLines, startIndex);

		const expectedCardContent = `id: 'ignite', name: 'Ignite', type: 'magic', mana: 1, tier: 'legendary', courage: 8, vanish: true,
		sound: 'magic22',
		actions: [
			{action: 'addCard', value: 2, what: 'sparks', to: 'drawCards'},
			{action: 'addCard', value: 1, what: 'sparks', to: 'drawCards', with: ['frost']},
			{action: 'addCard', value: 2, what: 'sparks', to: 'handCards'},
			{action: 'addCard', value: 1, what: 'sparks', to: 'handCards', with: ['frost']},
			{action: 'addCard', value: 2, what: 'sparks', to: 'discardCards'},
			{action: 'addCard', value: 1, what: 'sparks', to: 'discardCards', with: ['frost']},
		],
		slots: 1,
		shardUpgrades: {
			vanish: false,
		},`;

		expect(result.cardName).toBe('ignite');
		expect(result.cardContent).toBe(expectedCardContent);
	});

	test('should extract card name and content correctly when card name is not the first property', () => {
		const mockFileLines = [
			`	},`,
			`}),`,
			`new Cards({`,
			`	id: 'obelisk', name: 'Obelisk', type: 'magic', mana: 1, tier: 'rare', pack: 'rainbow', weight: 6, courage: 4,`,
			`	magic: [{type: 'aligned', amount: 3}],`,
			`	sound: 'magic9',`,
			`	actions: [`,
			`		{action: 'addCard', value: 2, what: 'sparks', to: 'drawCards'},`,
			`	],`,
			`	slots: 2,`,
			`	shardUpgrades: {`,
			`		magic: [{type: 'aligned', amount: 4}],`,
			`		actions: [`,
			`			{action: 'addCard', value: 3, what: 'sparks', to: 'drawCards'},`,
			`		],`,
			`	},`,
			`	iceShardUpgrades: {`,
			`		magic_2: [{type: 'aligned', amount: 5}],`,
			`		actions_2: [`,
			`			{action: 'addCard', value: 5, what: 'sparks', to: 'drawCards', with: ['frost']},`,
			`		],`,
			`	},`,
			`	bothShardUpgrades: {`,
			`		magic: [{type: 'aligned', amount: 5}],`,
			`		actions: [`,
			`			{action: 'addCard', value: 5, what: 'sparks', to: 'drawCards'},`,
			`		],`,
			`	},`,
			`}),`,
			``,
			`/* legendary */`,
			`new Cards({`,
		]
		const startIndex = 0;
		const result = extractCardContent(mockFileLines, startIndex);
		const expectedCardContent = `id: 'obelisk', name: 'Obelisk', type: 'magic', mana: 1, tier: 'rare', pack: 'rainbow', weight: 6, courage: 4,
	magic: [{type: 'aligned', amount: 3}],
	sound: 'magic9',
	actions: [
		{action: 'addCard', value: 2, what: 'sparks', to: 'drawCards'},
	],
	slots: 2,
	shardUpgrades: {
		magic: [{type: 'aligned', amount: 4}],
		actions: [
			{action: 'addCard', value: 3, what: 'sparks', to: 'drawCards'},
		],
	},
	iceShardUpgrades: {
		magic_2: [{type: 'aligned', amount: 5}],
		actions_2: [
			{action: 'addCard', value: 5, what: 'sparks', to: 'drawCards', with: ['frost']},
		],
	},
	bothShardUpgrades: {
		magic: [{type: 'aligned', amount: 5}],
		actions: [
			{action: 'addCard', value: 5, what: 'sparks', to: 'drawCards'},
		],
	},`

		expect(result.cardName).toBe('obelisk');
		expect(result.cardContent).toBe(expectedCardContent);
	});

});
