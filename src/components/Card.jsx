import style from "./style.module.scss"

export const Card = ({ drugs }) => {
    console.log(drugs)
    return (
        <div className={style.cardContainer}>
            <div className={style.card}>
                <div className="topBox">
                    <h1 className="title-3">{drugs.name}</h1>
                </div>
                <div className="bodyBox">
                    <h2 className="title-2" title={drugs.company}>{drugs.company}</h2>
                </div>
                <div className="bodyColor">
                    <div className="bodyColorYellow">
                        <p className="bodyG">G</p>

                        <p className="bodyGeneric">Medicamento <span>Genérico</span></p>
                    </div>
                    <div className="bodyColorBlack"></div>
                </div>
                <span><img sr="src/assets/react.svg" alt="Bula Paciente" title="Bula" /></span>
            </div>
        </div>
    )
}