import {atom} from "jotai";
import type {Book} from "./BookDetails.tsx";
import type {Author} from "./Authors.tsx";

export const BookAtom = atom<Book[]>([]);
BookAtom.debugLabel = "BookAtom";

export const AuthorAtom = atom<Author[]>([])
AuthorAtom.debugLabel = "AuthorAtom";
