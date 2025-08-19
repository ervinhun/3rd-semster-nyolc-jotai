import {useAtom} from "jotai";
import {AuthorAtom} from "./BookAtom.ts";

export interface Author {
    id: number
    idBook: number
    firstName: string
    lastName: string
}

export default function AuthorsOverview() {

    const [allAuthors, ] = useAtom(AuthorAtom);
    return (<>

        {
            allAuthors.map(a => {
                return <div key={a.id}>{JSON.stringify(a)}</div>
            })
        }

    </>)
}