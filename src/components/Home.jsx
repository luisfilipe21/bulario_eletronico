import { useEffect, useState } from "react"
import { SearchForm } from "./forms/SearchForm"
import { api } from "../service/api"
import style from "./style.module.scss"
import { Card } from "./Card"
import { Pagination } from "./Pagination"

export const Home = () => {

    const [bula, setBula] = useState([])
    const [inputText, setInputText] = useState("")
    const [radioValue, setRadioValue] = useState("name")
    const [itemOffset, setItemOffset] = useState(0)

    const handleSearch = (e) => {
        setInputText(e.target.value.toUpperCase())
    }

    const handlePageChange = (e) => {
        setItemOffset(e)
    }

    const handleDownload = (pdf) => {
        window.open(pdf, "_blank")
    }

    const getFilteredData = (input, items, radio) => {
        if (!input) return items

        if (radio === "name") {
            return items.filter(item => item.name.includes(input))
        } else if (radio === "company") {
            return items.filter(item => item.company.includes(input))
        }
    }

    const filteredItems = getFilteredData(inputText, bula, radioValue)

    const numberOfPages = Math.ceil(bula.length / 10)

    const initialPage = itemOffset * 10
    const itemsPerPage = filteredItems.slice(initialPage, initialPage + 10);

    const itemOrder = itemsPerPage.sort((a, b) => new Date(b.published_at) - new Date(a.published_at))


    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await api.get(`?_${radioValue}?_${inputText}`);

                setBula(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [inputText, radioValue])


    return (
        <div className={`container ${style.body}`}>
            <SearchForm setInputText={setInputText} handleSearch={handleSearch} setRadioValue={setRadioValue} />
            <ul className={style.cardBox}>
                {
                    itemOrder.map((drugs) =>
                        <Card
                            key={drugs.id}
                            drugs={drugs}
                            handleDownload={handleDownload}
                        />
                    )
                }
            </ul>

            <div>
                <Pagination 
                handlePageChange={handlePageChange}
                filteredItems={filteredItems}
                itemsPerPage={10} />
            </div>
        </div>
    )
}