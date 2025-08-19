import {useNavigate, useParams} from "react-router";
import {useAtom} from "jotai";
import {BookAtom} from "./BookAtom.ts";
import {useState} from "react";

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
    const [allBooks, setAllBooks] = useAtom(BookAtom)
    const book = allBooks.find(b => b.id == Number.parseInt(params.bookId!));
    const navigate = useNavigate()
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(book?.title || "");


    function saveBookTitle() {
        const index = allBooks.findIndex(b => b.id == Number.parseInt(params.bookId!))
        const newArray = [...allBooks];
        newArray[index] = {...book, title};
        setAllBooks(newArray);
        setIsEditing(false);
    }

    return <div className="display: flex-wrap;">

        <button onClick={() => {
            setIsEditing(!isEditing);
            console.log(isEditing);
            setTitle(book?.title);
        }}>{isEditing ? "Cancel" : "Edit the current book"}
        </button>

        <button onClick={() => {
            const duplicate = [...allBooks];
            const newArray = duplicate.filter(b => b.id != Number.parseInt(params.bookId!))
            setAllBooks(newArray);
            navigate('/books')
        }}>Delete the current book
        </button>
        <br/>
        {isEditing ? (
                <form onSubmit={e => {
                    e.preventDefault();
                    saveBookTitle()
                }}>
                    <input type="text" id="titleInput" value={title} onChange={e => {
                        console.log(e.target.value);
                        setTitle(e.target.value)
                    }
                    }/>
                    <button type="submit">Save</button>
                </form>
            ) :
            (<h2>{book?.title}</h2>)
        }
        {
            <pre>{JSON.stringify(book)}</pre>
        }
    </div>
}