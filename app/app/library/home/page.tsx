"use client"
import { Note } from "@/generated/prisma"
import { useContext, useState } from "react"
import { notebookListContext } from "../layout"
import { BookOpenIcon, DeleteIcon, MoreHorizontalIcon, NotebookIcon, TextCursorInputIcon } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ConfirmDialog, TextInputDialog } from "@/components/inputDialog"
import { deleteNotebook, renameNotebook } from "@/lib/notebooks"

export default function Home() {
    const notebooks = useContext(notebookListContext)
    return (
        <div>
            <HomeBanner />
            <NotebookList notebooks={notebooks} />
            <div className="pagebottomtext">Notebook is developed by Quntem in the UK</div>
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
    const notebooks = useContext(notebookListContext)
    const [showing, setShowing] = useState(false)
    const [showingDelete, setShowingDelete] = useState(false)
    const [notebookName, setNotebookName] = useState(notebook.title)
    return (
        <>
        <div className="notebook_list_item">
            <NotebookIcon size={20} />
            <div>{notebookName}</div>
            <div style={{ flex: 1 }}></div>
            <DropdownMenu>
                <DropdownMenuTrigger style={{ marginRight: 10 }}>
                    <MoreHorizontalIcon size={20} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Actions</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => {setShowing(true); console.log("clicked")}}><TextCursorInputIcon size={20} /> Rename</DropdownMenuItem>
                    <DropdownMenuItem onClick={() => {setShowingDelete(true)}}><DeleteIcon size={20} /> Delete</DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
        <TextInputDialog title="Rename notebook" description="Enter a new name for the notebook" placeholder="Notebook name" onConfirm={async (name) => {await renameNotebook(notebook, notebookName); setShowing(false)}} value={notebookName} setValue={setNotebookName} onCancel={() => {}} showing={showing} setShowing={setShowing} />
        <ConfirmDialog title="Delete Notebook" description="This action cannot be undone" onConfirm={async () => {await deleteNotebook(notebook); setShowingDelete(false); notebooks?.reload()}} setShowing={setShowingDelete} showing={showingDelete} />
        </>
    )
}

export const HomeBanner = () => {
    const notebooks = useContext(notebookListContext)
    return (
        <div className="home_banner">
            <div>
                <h1>Library</h1>
                <p>Manage your notebooks here</p>
            </div>
            <div style={{ flex: 1 }} />
            <div className="usedCountContainer">
                <div className="usedCount">
                    {(notebooks?.loaded ? notebooks?.data.length : "Loading...") + "/16"}
                    <NotebookIcon style={{marginLeft: 10}}/>
                </div>
            </div>
        </div>
    )
}