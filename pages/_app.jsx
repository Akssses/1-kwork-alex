import Layout from '../components/partials/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div >
      <Component {...pageProps} />
    </div>

  )
}

export default MyApp