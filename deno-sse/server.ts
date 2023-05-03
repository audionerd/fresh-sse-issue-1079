import { serve } from "https://deno.land/std@0.178.0/http/server.ts";

serve(async (_) => {
  let timerId: number | undefined = undefined;
  const body = new ReadableStream({
    start(controller) {
      controller.enqueue(`data: message\nretry: 100\n\n`);
      timerId = setInterval(() => {
        controller.enqueue(`data: message\n\n`);
      }, 1000);
    },
    cancel() {
      console.log('cancel')
      if (timerId !== undefined) {
        clearInterval(timerId);
      }
    },
  });
  return new Response(body.pipeThrough(new TextEncoderStream()), {
    headers: {
      "content-type": "text/event-stream",

      "access-control-allow-origin": "*",
      "access-control-allow-headers": "Origin, X-Requested-With, Content-Type, Accept, Range"    },
  });
});
