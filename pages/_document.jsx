import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script>globalThis.mozRequestAnimationFrame = window.requestAnimationFrame</script>
        <script
          data-partytown-config
          // Tested with local partytown lib folder with added missing window properties (i.e mozRequestAnimationFrame)
          // lib: "../../partytown-source/lib",
          // https://github.com/BuilderIO/partytown/issues/209
          dangerouslySetInnerHTML={{
            __html: `
            partytown = {
                debug: true,
                lib: "../../partytown-source/lib",
                forward: ["mozRequestAnimationFrame"],
                resolveUrl: function (url, location, type) {
                    if (['www.google.com'].includes(url.hostname)) {
                        const proxyUrl = new URL("https://cdn.builder.io/api/v1/proxy-api");
                        proxyUrl.searchParams.append("url", url);
                        proxyUrl.searchParams.append('apiKey', '${process.env.NEXT_PUBLIC_BUILDER_API_KEY}');
                        return proxyUrl;
                    }
                    return url;
                }
            };
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}