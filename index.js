function simplemessage(
  from = "Anonymous",
  to = "My Beloved Ones",
  message = "I Love You"
) {
  const compiledMessage = `Hi ${to}, this is a message from ${from}.\n${message}`;
//   console.log(compiledMessage);
  return compiledMessage;
}

module.export = simplemessage();

// const simplemessage = require("ky-simplemessage");
let msg = simplemessage()
console.log(msg)

// simplemessage()
