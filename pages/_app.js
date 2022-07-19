/* eslint-disable react/jsx-no-undef */
import '../styles/globals.css';
import Layout from "../components/Layout";

//  every page pass through this component so this component will have access to all page components props
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
