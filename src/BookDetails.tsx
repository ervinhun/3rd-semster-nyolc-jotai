import {useParams} from "react-router";
import {useEffect} from "react";
import {BookAtom} from "./BookAtom.ts";
import {useAtom} from "jotai";

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
    //const [currentBook, setCurrentBook] = useState<Book | undefined>()
    const [allBooks] = useAtom(BookAtom);
    //let displayedBook;

    /*allBooks?.forEach(book => {
        if (book.id === parseInt(params.bookId, 10)) {
            displayedBook = book;
        }
    })*/

    const displayedBook = allBooks?.find(b => b.id == Number.parseInt(params.bookId));

    return <div>

        {
            JSON.stringify(displayedBook)
        }

    </div>
}