// npm run test '/Users/CM86827/Projects/spewnicorn/scripts/utils/append.test.js'

// Use ES6 imports to mock ES6 modules
import {
    appendMonster,
	appendTreasure,
	appendCandy,
	appendOption,
	appendStartingBonuses,
	appendBoosterPacks,
	appendShard,
	appendEssence,
	appendConfirm, } from './append.js';


// Mock the getCardAttribute function before the tests
jest.mock('./tooltips', () => ({
    __esModule: true, // this property makes it work like an ES6 module
    setTooltips: jest.fn(),
  }));

const setTooltips = jest.fn();

// Mock jQuery and its fn methods
const mockJQuery = jest.fn(() => mockJQuery.fn);

mockJQuery.fn = {
    appendTo: jest.fn().mockReturnThis(),
    delay: jest.fn().mockReturnThis(),
    queue: jest.fn().mockReturnThis(),
    removeClass: jest.fn().mockReturnThis(),
    dequeue: jest.fn().mockReturnThis(),
};

// Provide the mock to the global scope
global.$ = mockJQuery;


describe('appendShard', () => {
    beforeEach(() => {
        // Clear jQuery mocks
        $.mockClear();
        $.fn.appendTo.mockClear();
        $.fn.delay.mockClear();
        $.fn.queue.mockClear();
        // Clear any other mocked functions
        setTooltips.mockClear();

        document.body.innerHTML = '<div id="test-container"></div>';
        jest.clearAllMocks();
    });

    it('appends shard as expected', () => {
        const mockShard = {
            id: 'test-id',
            name: 'Test Shard',
        };
        const mockContainer = '#test-container';
        appendShard(mockShard, mockContainer);

        expect($.fn.appendTo).toHaveBeenCalledWith(mockContainer);
        expect($).toHaveBeenCalledWith(`<div class='shard tooltip test-id' data-id='test-id' data-powertip='<span class=\"test-id\">Test Shard</span> shard. Permanently attach this to a card with an empty shard slot'></div>`);
    });
});


describe('appendEssence', () => {
    beforeEach(() => {
        // Clear jQuery mocks
        $.mockClear();
        $.fn.appendTo.mockClear();
        $.fn.delay.mockClear();
        $.fn.queue.mockClear();
        // Clear any other mocked functions
        setTooltips.mockClear();

        document.body.innerHTML = '<div id="test-container"></div>';
        jest.clearAllMocks();
    });

    it('appends essence as expected', () => {
        const mockContainer = '#test-container';
        appendEssence('test-essence', mockContainer);

        expect($.fn.appendTo).toHaveBeenCalledWith(mockContainer);
        expect($).toHaveBeenCalledWith(`<div class='essence tooltip test-essence' data-id='test-essence' data-powertip='Increases your <span class=\"test-essence\">test-essence</span> essence'></div>`);
    });
});

describe('appendConfirm', () => {
    beforeEach(() => {
        // Clear jQuery mocks
        $.mockClear();
        $.fn.appendTo.mockClear();
        $.fn.delay.mockClear();
        $.fn.queue.mockClear();
        // Clear any other mocked functions
        setTooltips.mockClear();

        document.body.innerHTML = '<div id="test-container"></div>';
        jest.clearAllMocks();
    });

    it('appends confirm as expected', () => {
        const mockContainer = '#test-container';
        appendConfirm({guid: 'test-guid'}, mockContainer);

        expect($.fn.appendTo).toHaveBeenCalledWith(mockContainer);
        expect($).toHaveBeenCalledWith(`<div class=\"button play-card tooltip\" data-powertip=\"Or you can click an identical card to combine them.\" data-guid=\"test-guid\">Play This Card</div>`);
    });
});