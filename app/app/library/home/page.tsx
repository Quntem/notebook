"use client"
import { Note } from "@/generated/prisma"
import { useContext } from "react"
import { notebookListContext } from "../layout"
import { NotebookIcon } from "lucide-react"

export default function Home() {
    const notebooks = useContext(notebookListContext)
    return (
        <div>
            <NotebookList notebooks={notebooks} />
        </div>
    )
}

function NotebookList({ notebooks }: { notebooks: { data: Note[], loaded: boolean, reload: () => void } | null }) {
    return (
        <div className="notebook_list">
            {notebooks?.loaded && notebooks?.data.map((notebook: Note) => (
                <NotebookListItem key={notebook.id} notebook={notebook} />
            ))}
            {!notebooks?.loaded && <div>Loading...</div>}
            {notebooks?.loaded && notebooks?.data.length === 0 && <div>No notebooks</div>}
        </div>
    )
}

function NotebookListItem({ notebook }: { notebook: Note }) {
    return (
        <div className="notebook_list_item">
            <NotebookIcon size={20} />
            <div>{notebook.title}</div>
        </div>
    )
}