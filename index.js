export function simplemessage(
  from = "Anonymous",
  to = "My Beloved Ones",
  message = "I Love You"
) {
  const compiledMessage = `Hi ${to}, this is a message from ${from}.\n${message}`;
  return compiledMessage;
}


