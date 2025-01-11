import { ReactNode } from "react"
import { Footer } from "./footer"
import { Header } from "./header"
import { ContactForm } from "../Contact/contactForm"


export const Layout = ({ children } : { children: ReactNode }) => {
    return(
        <>
            <Header />
            <ContactForm />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}