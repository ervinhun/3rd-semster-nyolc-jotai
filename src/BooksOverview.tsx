import {useEffect, useState} from "react";
import {useNavigate} from "react-router";
import {useAtom} from "jotai";
import {BookAtom} from "./BookAtom.ts";

export default function BooksOverview() {
    const navigate = useNavigate();
    const [allBooks, setAllBooks] = useAtom(BookAtom)
    useEffect(() => {
        fetch('https://fakerestapi.azurewebsites.net/api/v1/Books')
            .then(result => {
                result.json().then(allBooks => {
                    setAllBooks(allBooks)
                })
            })
    }, [setAllBooks])

    return <div>


        {


            allBooks.map(book => {
                return <div key={book.id!}>
                    <button onClick={() => {
                        navigate('/book/' + book.id)
                    }}>{book.title}</button>
                </div>
            })
        }

    </div>
}