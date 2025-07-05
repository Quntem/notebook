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

export async function renameNotebook(notebook: Note, title: string) {
    const req = await fetch("/api/notebooks/own", {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, id: notebook.id })
    })
    return await req.json()
}

export async function deleteNotebook(notebook: Note) {
    const req = await fetch("/api/notebooks/own", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id: notebook.id })
    })
    return await req.json()
}
