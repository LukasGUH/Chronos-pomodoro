import { HistoryIcon, HouseIcon, SettingsIcon, SunIcon, MoonIcon} from "lucide-react"
import styles from "./styles.module.css"
import { useEffect, useState } from "react"

type AvailableThemes = "dark" | "light"

export function Menu() {

    const [theme, setTheme] = useState<AvailableThemes>(() => {
        const storageTheme = localStorage.getItem("theme") as AvailableThemes || "dark"
        return storageTheme
    })

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    }

    function HandleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault()

        setTheme(prevTheme => {
            const nextTheme = prevTheme === "dark" ? "light" : "dark"
            return nextTheme
        })
    }

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
        localStorage.setItem("theme", theme)
    }, [theme])

    return (
        <nav className={styles.menu}>
            <a 
                className={styles.menuLink} 
                href="#" 
                aria-label="Ir para a home" 
                title="Ir para a home"
            >
                <HouseIcon />
            </a>

            <a 
                className={styles.menuLink} 
                href="#"
                aria-label="Ver historico"
                title="Ver historico"
            >
                
                <HistoryIcon />
            </a>

            <a 
                className={styles.menuLink} 
                href="#"
                aria-label="Configurações"
                title="Configurações"
            >
                <SettingsIcon />
            </a>

            <a 
                className={styles.menuLink} 
                href="#"
                aria-label="Mudar tema"
                title="Mudar tema"
                onClick={HandleThemeChange}
            >
                {nextThemeIcon[theme]}
            </a>

        </nav>
    )
}