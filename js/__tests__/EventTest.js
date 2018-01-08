import {Event} from '../Event.js';

test('Event', () => {
    const event = new Event();
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
