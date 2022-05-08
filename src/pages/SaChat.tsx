import Layout from '../components/Layout'
import { logoutUser } from '../plugins/firebase'
import "../styles/SaChat.css"

const SaChat = () => {
  return (
    <Layout>
      <section className="sc-wrapper">
        <h1>
          SaChat
        </h1>
        <button
          onClick={logoutUser}
        >
          logout
        </button>
      </section>
    </Layout>
  )
}

export default SaChat