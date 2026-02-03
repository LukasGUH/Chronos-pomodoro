import { Container } from "../../components/Container"
import { Footer } from "../../components/Footer/intex"
import { Logo } from "../../components/Logo/intex"
import { Menu } from "../../components/Menu/intex"

type mainTemplateProps = {
    children: React.ReactNode
}

export function MainTemplate({ children }: mainTemplateProps) {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            {children}

            <Container>
                <Footer />
            </Container>
        
        </>
    )
}
