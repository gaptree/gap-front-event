# Gap Front Event

# install

```
$ yarn add gap-front-event
```

# Usage

```javascript
import {Event} from '../index.js';

const event = new Event();

event.on('attack', (target) => {
    console.log(`attack ${target}`); 
});

event.trigger('attack', 'cat');
```
