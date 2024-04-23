import style from "./style.module.scss";
import { IoSearch } from "react-icons/io5";

export const SearchForm = ({ handleSearch, setRadioValue }) => {


    return (
        <div className="container">
            <div className={style.divInput}>
                <input type="text" placeholder="Medicamento ou Farmácia" onChange={handleSearch} />
                <button><IoSearch size={20} /></button>
            </div>
            <div >
                <form >
                    <fieldset className={style.divForm}>
                        <div>
                            <input type="radio" id="name" name="select-option" value="name" onChange={(e) => setRadioValue(e.target.value)}/>
                            <label htmlFor="name">Medicamento</label>
                        </div>
                        <div>
                            <input type="radio" id="company" name="select-option" value="company" onChange={(e) => setRadioValue(e.target.value)}/>
                            <label htmlFor="company">Farmácia</label>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    )
}