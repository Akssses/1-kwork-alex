import Head from "next/head"
import Sidebar from '@/components/partials/Sidebar'

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Kwork order</title>
        <meta name="description" content="Create dark mode in next and tailwind" />
      </Head>
      <div className="app-container bg-dark flex">
        <Sidebar />
        <main className="flex-grow p-[30px] z-20">
          {children}
        </main>

      </div>
    </div>
  )
}

export default Layout