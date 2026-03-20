import { HistoryIcon, HouseIcon, MoonIcon, SettingsIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react"
import { RouterLink } from "../RouterLink"
import styles from "./styles.module.css"

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
            <RouterLink
                className={styles.menuLink}
                href="/"
                aria-label="Ir para a home"
                title="Ir para a home"
            >
                <HouseIcon />
            </RouterLink>

            <RouterLink
                className={styles.menuLink}
                href="/history/"
                aria-label="Ver historico"
                title="Ver historico"
            >

                <HistoryIcon />
            </RouterLink>

            <RouterLink
                className={styles.menuLink}
                href="/settings/"
                aria-label="Configurações"
                title="Configurações"
            >
                <SettingsIcon />
            </RouterLink>

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