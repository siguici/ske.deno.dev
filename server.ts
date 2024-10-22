export default {
  fetch(request: Request) {
    const path = decodeURIComponent(new URL(request.url).pathname);
    const realpath = `https://siguici.deno.dev${path}`;

    return new Response(`Redirecting to ${realpath}`, {
      headers: {
        "Location": realpath,
      },
      status: 307,
    });
  },
};
