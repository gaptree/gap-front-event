# Gap Front Event

# install

```
$ yarn add gap-front-event
```

# Usage

```javascript
import {GapEvent} from 'gap-front-event';

const event = new GapEvent();

event.on('attack', (target) => {
    console.log(`attack ${target}`); 
});

event.trigger('attack', 'cat');
```
