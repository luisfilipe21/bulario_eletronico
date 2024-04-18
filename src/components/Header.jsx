import style from "./style.module.scss";

export const Header = () => {
    return (
        <header className={`container ${style.header}`}>
            <h1 className="title-1">Bulário Eletrônico</h1>
        </header>
    )
}