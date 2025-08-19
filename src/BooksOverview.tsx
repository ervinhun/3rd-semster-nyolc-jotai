import {useNavigate} from "react-router";
import {useAtom} from "jotai";
import {BookAtom} from "./BookAtom.ts";
import {useState} from "react";

export default function BooksOverview() {
    const [allBooks, setAllBooks] = useAtom(BookAtom);
    const navigate = useNavigate();
    const [lastId, setLastId] = useState(
        allBooks.length > 0 ? allBooks[allBooks.length - 1].id : -1
    );



    return (
        <div>
            {
                <>
                    <button onClick={() => {
                        const duplicate = [...allBooks];
                        const newId = lastId + 1;
                        setLastId(newId);
                        duplicate.push({
                            title: "awesome title" + newId,
                            id: newId,
                            description: "askjdæ",
                            excerpt: "lkjsad",
                            pageCount: 42,
                            publishDate: new Date().toISOString()
                        });
                        setAllBooks(duplicate);
                    }}>
                        Add new thing into the book global container
                    </button>

                    {allBooks?.map(book => (
                        <div key={book.id!}>
                            <button onClick={() => navigate('/book/' + book.id)}>
                                {book.title}
                            </button>
                        </div>
                    ))}
                </>
            }
        </div>
    );

}