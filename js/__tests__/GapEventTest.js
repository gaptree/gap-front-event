import {
  GapEvent,
  ErrNotFunction,
  ErrEventNotFound,
} from '../GapEvent';

describe('GapEvent', () => {
  it('should throw error of not function', () => {
    const evt = new GapEvent();
    const listener = {};
    expect(() => evt.on('not-fun', listener))
      .toThrow(ErrNotFunction.message);
  });

  it('should throw error of event not found', () => {
    const evt = new GapEvent();
    expect(() => evt.trigger('not-found'))
      .toThrow(ErrEventNotFound.message);
  });

  it('should return self', () => {
    const evt = new GapEvent();
    expect(evt.on('test', () => {})).toEqual(evt);
  });

  it('should trigger specific function', () => {
    const fun = jest.fn();
    const params = [1, 2, 3, 'A', 'b'];
    const evt = new GapEvent();
    const eventName = 'event';
    evt.on(eventName, fun);
    evt.trigger(eventName, ...params);
    expect(fun).toHaveBeenCalledWith(...params);
  });

  it('should trigger all', () => {
    const fun1 = jest.fn();
    const fun12 = jest.fn();
    const fun2 = jest.fn();
    const fun3 = jest.fn();
    const fun32 = jest.fn();

    const params = [1, 2, 3, 'A', 'b'];
    const evt = new GapEvent();

    evt.on('event1', fun1);
    evt.on('event1', fun12);
    evt.on('event2', fun2);
    evt.on('event3', fun3);
    evt.on('event3', fun32);

    evt.triggerAll(...params);

    expect(fun1).toHaveBeenCalledWith(...params);
    expect(fun12).toHaveBeenCalledWith(...params);
    expect(fun2).toHaveBeenCalledWith(...params);
    expect(fun3).toHaveBeenCalledWith(...params);
    expect(fun32).toHaveBeenCalledWith(...params);
  });
});
