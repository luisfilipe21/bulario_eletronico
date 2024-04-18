import style from "./style.module.scss"
import { FaRegFilePdf } from "react-icons/fa6";

export const Card = ({ drugs }) => {
    let activePrinciples = drugs.active_principles?.map((item) => item.name);

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
                <span className={style.pdfIcon}><FaRegFilePdf /></span>
                {activePrinciples && (
                    <div>
                        <p className={`title-4 ${style.active_principles}`}>Princípio Ativo:</p>
                        <p className={`title-4`}> {activePrinciples}</p>
                    </div>
                )}
            </div>
        </div>
    )
}