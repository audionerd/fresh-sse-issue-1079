new EventSource("http://localhost:8000")
  .addEventListener("message", function listener(e) {
    console.log('got message', e)
  })
