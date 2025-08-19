import {atom} from "jotai";
import type {Book} from "./BookDetails.tsx";

export const BookAtom = atom<Book[]>();
BookAtom.debugLabel = "BookAtom";
