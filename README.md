Research for [Fresh issue #1079](https://github.com/denoland/fresh/issues/1079)

SSE over HTTP 1.1 is annoying no matter what, due to browser connection limits. But even so, Fresh seems to have a bug that prevents the connections from cancelling properly.

`deno-sse/` demonstrates that a simple Deno SSE server does not have the stalling behavior.

`fresh-sse/` demonstrates a Fresh server with the stalling behavior.
