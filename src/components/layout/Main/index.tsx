import { FC, ReactNode } from "react"

type Props = {
    children: ReactNode
    className?: string
}


const Main: FC<Props> = ({ children, className }) => {

    return (
        <>
            <main className={className}>
                {/* main es dinamico, antes de cerrar el piquito de apertura ahí les paso las props */}
                {children}
            </main>
        </>
    )

}

export { Main }