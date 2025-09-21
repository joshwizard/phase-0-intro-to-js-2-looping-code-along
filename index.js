// Code your solutions in this file

function writeCards(names, event) {
  // 1️⃣ Create a new empty array to hold the messages
  const messages = [];

  // 2️⃣ Loop over the names array
  for (let i = 0; i < names.length; i++) {
    // 3️⃣ Build the thank you message using string interpolation
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;

    // 4️⃣ Add the message to the messages array
    messages.push(message);
  }

  // 5️⃣ Return the array of messages
  return messages;
}

// Example usage:
console.log(writeCards(["Ada", "Brendan", "Ali"], "birthday"));
