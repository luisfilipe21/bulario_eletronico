import { useEffect, useState } from "react"
import { SearchForm } from "./forms/SearchForm"
import { api } from "../service/api"
import style from "./style.module.scss"
import { BiCalculator } from "react-icons/bi";
import { Card } from "./Card"


export const Home = () => {

    const [bula, setBula] = useState([])
    const [inputText, setInputText] = useState("")
    const [searchValue, setsearchValue] = useState("name")
    const [currentPage, setCurrentPage] = useState(0)

    // const pageNumber = Math.ceil(bula.length / 10)

    // const initialPage = currentPage * 10

    // const itemsPerPage = bula.slice(initialPage, initialPage + 10);
    // const itemOrder = itemsPerPage.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))

    const handleSearch = (e) => {
        setInputText(e.target.value.toUpperCase())
    }

    const handleDownloadBula = (e) => {
        
    }


    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await api.get("/")
                setBula(data)

            } catch (error) {
                console.log(error)
            }

        }
        getData();

    }, [])

    return (
        <div className={`container ${style.body}`}>
            <SearchForm setInputText={setInputText} handleSearch={handleSearch} />
            <ul className={style.cardBox}>
                {
                    bula.map((drugs) =>
                        <Card key={drugs.id} drugs={drugs} />
                    )
                }
            </ul>
        </div>
    )
}