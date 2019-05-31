addEventListener("message", event => {
  console.log(`Message from index.html: ${event.data}`);
  event.ports[0].postMessage("Ahuuya from Web Worker!");
});

addEventListener(
  "error",
  event => {
    console.log(event.message);
  },
  false
);
