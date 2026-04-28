import { ThumbsDownIcon, ThumbsUpIcon } from "lucide-react"
import { ToastContentProps } from "react-toastify"
import { DefaultButton } from "../DefaultButton"

import styles from "./styles.module.css"

export function Dialog({ closeToast, data }: ToastContentProps<string>) {
    return (
        <>
            <div className={styles.container}>
                <p>{data}</p>

                <div className={styles.buttonsContainer}>
                    <DefaultButton
                        onClick={() => closeToast(true)}
                        icon={<ThumbsUpIcon />}
                        arial-label="Confirmar ação e fechar"
                        title="Confirmar ação e fechar"
                    />
                    <DefaultButton
                        onClick={() => closeToast(false)}
                        icon={<ThumbsDownIcon />}
                        color="red"
                        arial-label="cancelar ação e fechar"
                        title="cancelar ação e fechar"
                    />

                </div>
            </div>
        </>
    )
}