import {useEffect} from "react";
import {useAtom} from "jotai";
import {AuthorAtom, BookAtom} from "./BookAtom.ts";

export default function useInitializeDataForMyApplication() {

    const [, setAllBooks] = useAtom(BookAtom);
    const [, setAllAuthors] = useAtom(AuthorAtom);

    useEffect(() => {
        fetch('https://fakerestapi.azurewebsites.net/api/v1/Books')
            .then(result => {
                result.json().then(allBooks => {
                    setAllBooks(allBooks)
                })
            })
        fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors').then(result => {
            result.json().then(authors => {
                setAllAuthors(authors);
            })
        })


    }, [])
}