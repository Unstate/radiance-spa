import { FC, ReactNode } from "react"
import Footer from "./footer"
import Header from "./header"

export type TLayout = {
  children: ReactNode;
}

const Layout: FC<TLayout> = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout