import Head from 'next/head'
import Form from '../src/Form'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next.js recaptcha demo using Partytown 🎉</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Next.js recaptcha demo using <a href='https://partytown.builder.io/' target='_blank'>Partytown 🎉</a>
        </h1>

        <div className="flex-column">
          <p className="description">Demo form using recaptcha</p>
          <Form />
        </div>
      </main>
    </div>
  )
}
