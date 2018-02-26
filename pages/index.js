import Link from 'next/link'
import Head from 'next/head'
export default () => (
  <div>
    <Head>
      <title>Tyler Lugger</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <div>
      Hello World. 
      <Link href='/about' as={process.env.BACKEND_URL + '/about'}><a>About</a></Link>
    </div>
  </div>
)
