import { useState } from "react";
import { Note } from "@/generated/prisma";

export function useNotebookList(): {data: Note[], loaded: boolean, reload: () => void} {
    const reload = () => {
        setNotebooks({data: [], loaded: false, reload})
    }
    var [notebooks, setNotebooks] = useState<{data: Note[], loaded: boolean, reload: () => void}>({data: [], loaded: false, reload})
    if (!notebooks.loaded) {
        fetch("/api/notebooks/own").then((res) => res.json()).then((data) => {
            setNotebooks({data: data, loaded: true, reload})
        })
    }
    return notebooks
}

export async function createNotebook(title: string): Promise<Note> {
    const notebook = await fetch("/api/notebooks/own", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title })
    })
    return await notebook.json()
}
