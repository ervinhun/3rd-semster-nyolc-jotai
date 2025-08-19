import {useEffect, useState} from "react";

export interface Author {
    id: number
    idBook: number
    firstName: string
    lastName: string
}

export default function AuthorsOverview() {

    const [allAuthors, setAllAuthors] = useState<Author[]>([])

    useEffect(() => {
        fetch('https://fakerestapi.azurewebsites.net/api/v1/Authors').then(result => {
            result.json().then(authors => {
                setAllAuthors(authors);
            })
        })
    }, [])

    return (<>

        {
            allAuthors.map(a => {
                return <div key={a.id}>{JSON.stringify(a)}</div>
            })
        }

    </>)
}