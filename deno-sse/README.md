# Example SEE in Deno

Start a file server on :4507

    deno run -A https://deno.land/std/http/file_server.ts

Start the SEE server on :8000

    deno run -A server.ts

Visit http://localhost:4507/index.html

Click quickly between page one and page two.

Server does not stall. `cancel` is logged when switching between pages.
