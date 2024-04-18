import style from "./style.module.scss";

export const SearchForm = ({ handleSearch, setInputText }) => {
    return (
        <div className="container">
            <div className={style.divInput}>
                <input type="text" placeholder="Medicamento ou Farmácia" onChange={handleSearch} />
                <button type="submmit"><img src="src/assets/react.svg" alt="Pesquisar" /></button>
            </div>
            <div >
                <form>
                    <fieldset className={style.divForm}>
                        <div>
                            <input type="radio" id="name" name="select-option" value="name" checked />
                            <label for="name">Medicamento</label>
                        </div>
                        <div>
                            <input type="radio" id="company" name="select-option" value="company" />
                            <label for="company">Farmácia</label>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}