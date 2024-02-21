// Use ES6 imports to mock ES6 modules
import getCardAttribute from '../cards/utils/get_card_attribute.js';
import appendCard, { createBooleanAttributeDom, createAttributeDom } from './append_card.js';

// Mock the getCardAttribute function before the tests
jest.mock('../cards/utils/get_card_attribute', () => ({
  __esModule: true, // this property makes it work like an ES6 module
  default: jest.fn(), // this is your mock function
}));

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

describe('createBooleanAttributeDom', () => {
    beforeEach(() => {
        // Clear all previous settings before each test
        getCardAttribute.mockClear();
    });

    it('returns the correct HTML string when attribute is true', () => {
        getCardAttribute.mockReturnValue(true);
        const result = createBooleanAttributeDom({}, 'vanish', 'Vanish', 'Becomes a dead card when played');
        expect(result).toBe(`<div class="vanish tooltip" data-powertip='<span class="highlight">Vanish:</span> Becomes a dead card when played'><span></span></div>`);
    });

    it('returns an empty string when attribute is false', () => {
        getCardAttribute.mockReturnValue(false);
        const result = createBooleanAttributeDom({}, 'vanish', 'Vanish', 'Becomes a dead card when played');
        expect(result).toBe('');
    });
});

describe('createAttributeDom', () => {
    it('returns the correct HTML string for singular value', () => {
        getCardAttribute.mockReturnValue(1);
        const result = createAttributeDom({}, 'age', 'Age', 'Card has been retained for 1 turn this combat', 'Card has been retained for multiple turns this combat');
        expect(result).toContain('Card has been retained for 1 turn this combat');
    });

    it('returns the correct HTML string for plural value', () => {
        getCardAttribute.mockReturnValue(2);
        const result = createAttributeDom({}, 'age', 'Age', 'Card has been retained for 1 turn this combat', 'Card has been retained for multiple turns this combat');
        expect(result).toContain('Card has been retained for multiple turns this combat');
    });

    it('returns an empty string when value is -1', () => {
        getCardAttribute.mockReturnValue(-1);
        const result = createAttributeDom({}, 'age', 'Age', 'Card has been retained for 1 turn this combat', 'Card has been retained for multiple turns this combat');
        expect(result).toBe('');
    });
});

describe('appendCard', () => {
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

    it('bails out if card is null', () => {
        appendCard(null, '#test-container');
        expect(document.querySelector('#test-container .card')).toBeNull();
    });

    // TODO: Brian, I'd encourage you to add a few more tests for different card states here.
    it('appends card details to the container', () => {
        // Mock necessary values and functions
        const mockCard = {
            mana: 1,
            age: 1,
            use: 1,
            expire: 1,
            linger: 1,
            vanish: true,
            retain: true,
            ephemeral: true,
            breakable: true,
            combine: true,
            addable: true,
            playable: true,
            type: 'attack',
            id: 'test-card',
            guid: 'test-guid',
            slotDesc: 'test-slot-desc',
            name: 'Test Card',
            desc: 'Test Card Description',
            rarity: 'common',
            courage: 1,
            pack: 'test-pack',
            tier: 'test-tier',
        };
        const mockContainer = '#test-container';

        // Call appendCard
        appendCard(mockCard, mockContainer, 'test-class');

        expect($.fn.appendTo).toHaveBeenCalledWith(mockContainer);
        expect($).toHaveBeenCalledWith(`<div class='card-wrapper drawing'>
        <div class='card test-tier combinable test-pack-pack attack test-class' id='card-test-card' data-id='test-card' data-guid='test-guid' data-powertip=''>
            <div class='card-image'></div>
            <div class='card-frame'></div>
            <div class='card-type'>attack</div>
            <div class='card-rarity'></div><div class=\"card-mana tooltip\" data-powertip='<span class=\"highlight\">Mana:</span> energy cost to play this card'>
                        <span class=\"mana amount\" data-amount=\"-1\">-1</span>
                    </div>
            <div class='bubbles-left'></div>
            <div class='bubbles-right'><div class=\"vanish tooltip\" data-powertip='<span class=\"highlight\">Vanish:</span> Becomes a dead card when played'><span></span></div><div class=\"retain tooltip\" data-powertip='<span class=\"highlight\">Retain:</span> Does not discard at the end of your turn'><span></span></div><div class=\"ephemeral tooltip\" data-powertip='<span class=\"highlight\">Ephemeral:</span> Becomes a dead card if drawn but not played'><span></span></div><div class=\"breakable tooltip\" data-powertip='<span class=\"highlight\">Breakable:</span> When used up, card is permanently removed from your deck'><span></span></div><div class=\"combinable tooltip\" data-powertip='<span class=\"highlight\">Combinable:</span> When in hand, this card can be combined with another identical card to create a new more powerful card.'>
            <span></span>
        </div><div class=\"aura tooltip\" data-powertip='<span class=\"highlight\">Aura:</span> This card starts in your hand each combat'><span></span></div><div class=\"sparkle tooltip\" data-powertip='<span class=\"highlight\">Sparkle:</span> This card starts in your hand each combat'><span></span></div><div class=\"shimmer tooltip\" data-powertip='<span class=\"highlight\">Shimmer:</span> This card starts in your hand each combat'><span></span></div><div class=\"trade tooltip\" data-powertip='<span class=\"highlight\">Trade:</span> This card can be traded away at the end of each combat'><span></span></div><div class=\"weapon tooltip\" data-powertip='<span class=\"highlight\">Weapon:</span> This card can be used to attack enemies in combat'><span></span></div><div class=\"aoe tooltip\" data-powertip='<span class=\"highlight\">AoE:</span> This card can be used to attack all enemies in combat'><span></span></div><div class=\"natural tooltip\" data-powertip='<span class=\"highlight\">Natural:</span> This card starts on the top of your draw pile each combat'><span></span></div></div>
            <div class='name'>Test Card</div>
            <div class='desc'><div class='desc-inner'>Test Card Description</div></div>
            <div class='slots' data-powertip=''></div>
            <div class='card-courage tooltip' data-amount='1' data-powertip='Courage coins'>1</div>
        </div>
    </div>`);
    });
});
