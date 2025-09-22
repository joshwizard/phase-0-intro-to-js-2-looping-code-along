// // Code your solutions in this file

function writeCards(names, event) {
  const messages = []

  for (let i = 0; i < names.length; i++) {
    const message = `Thank you, ${names[i]}, for the wonderful ${event} gift!` 

    messages.push(message)
  }
  return messages
}

console.log(writeCards(["Guadalup", "Ollie", "Aki"], "surprise"));

function countDown() {
  let counting = 0;
  while (counting < 11) {
    console.log(counting++)
  }

return countDown
}

countDown(10)