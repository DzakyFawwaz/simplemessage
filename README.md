# simplemessage

### Install the package with npm
```shell
$ npm i ky-simplemessage --save
```

# Usage

### 1. Import the function from the packages
```javascript
import { simplemessage } from "ky-simplemessage"
```

### 2. Make a new variable to call the function
```javascript
let msg = simplemessage(from, to, message) 
```

### 3. Print the variable into the console
```javascript
console.log(msg)
```

---
### Note

```javascript
simplemessage()
```
> You can't direct call the function like this if you want to show it on your console. It's because this function only returns the message value, you must `console.log()` by yourself. See the usage above.

> `simplemessage()` if you didn't pass any params in this function, you will get default message below.
```js
Hi My Beloved Ones, this is a message from Anonymous.
I Love You
```



