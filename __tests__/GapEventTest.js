import {GapEvent} from '../index.js';

test('GapEvent', () => {
    const event = new GapEvent();
    let triggerCount = 1;

    event.on('test', (arg) => {
        expect(arg).toBe('arg');
        expect(triggerCount).toBe(1);

        triggerCount++;
    });

    event.on('test', (arg) => {
        expect(arg).toBe('arg');

        expect(triggerCount).toBe(2);
        triggerCount++;
    });

    event.trigger('test', 'arg');
});
