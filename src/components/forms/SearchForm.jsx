import style from "./style.module.scss";
import { IoSearch } from "react-icons/io5";

export const SearchForm = ({ handleSearch, setInputText }) => {
    return (
        <div className="container">
            <div className={style.divInput}>
                <input type="text" placeholder="Medicamento ou Farmácia" onChange={handleSearch} />
                <button type="submmit"><IoSearch size={20} /></button>
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