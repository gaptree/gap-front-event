// https://github.com/insane-jo/event-emitter/blob/master/index.es6

export const ErrNotFunction = new TypeError('Not Function');
export const ErrEventNotFound = new Error('Event Not Found');

export class GapEvent {
  constructor() {
    this.events = [];
    this.listeners = {};

    // this.isStrict = opts.hasOwnProperty('isStrict') ? opts.isStrict : true;
    // this.isStrict = Object.prototype.hasOwnProperty.call(opts, 'isStrict') ?
    //   opts.isStrict : true;
  }

  on(type, listener) {
    if (!this.isFun(listener)) {
      throw ErrNotFunction;
    }

    if (!this.listeners[type]) {
      this.events.push(type);
      this.listeners[type] = [];
    }

    this.listeners[type].push({fn: listener});
    return this;
  }

  hasEvent(type) {
    return this.listeners[type] && this.listeners[type].length;
  }

  trigger(type, ...args) {
    if (!this.hasEvent(type)) {
      throw ErrEventNotFound;
    }

    let typeListeners = this.listeners[type];
    typeListeners.forEach(listener => listener.fn.apply(null, args));
  }

  triggerAll(...args) {
    this.events.forEach(type => this.trigger(type, ...args));
  }

  isFun(obj) {
    // https://stackoverflow.com/questions/5999998/check-if-a-variable-is-of-function-type/6000009
    // https://stackoverflow.com/questions/798340/testing-if-value-is-a-function
    return typeof obj === 'function';
  }
}
