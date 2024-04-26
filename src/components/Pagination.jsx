import style from "./style.module.scss"

export const Pagination = ({ handlePageChange, filteredItems, itemsPerPage }) => {

    return (
        <div>
            <ul className={style.paginationList}>
                {Array.from({
                    length: Math.ceil(filteredItems.length / itemsPerPage)
                }).map((_, i) => (
                    <li key={i}>
                        <button
                            onClick={() => handlePageChange(i)}
                            className="button">{i + 1}</button>
                    </li>
                )
                )
                }
            </ul>
        </div>
    )
}