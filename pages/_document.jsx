import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <script>globalThis.mozRequestAnimationFrame = window.requestAnimationFrame</script>
        <script
          data-partytown-config
          dangerouslySetInnerHTML={{
            __html: `
            partytown = {
                debug: true,
                lib: "/_next/static/~partytown/",
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