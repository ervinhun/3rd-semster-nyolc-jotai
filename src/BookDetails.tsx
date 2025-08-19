import {useParams} from "react-router";
import {useEffect, useState} from "react";

export type BookIdParameter = {
    bookId: string;
}

export interface Book {
    id: number
    title: string
    description: string
    pageCount: number
    excerpt: string
    publishDate: string
}

export default function BookDetails() {

    const params = useParams<BookIdParameter>();
    const [currentBook, setCurrentBook] = useState<Book | undefined>()

    useEffect(() => {
        fetch('https://fakerestapi.azurewebsites.net/api/v1/Books/' + params.bookId)
            .then(result => {
                result.json().then(book => {
                    setCurrentBook(book);
                })
            })
    }, [])

    return <div>

        {
            JSON.stringify(currentBook)
        }

    </div>
}