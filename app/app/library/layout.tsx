"use client"
import "./style.css"
import { UserButton } from "@daveyplate/better-auth-ui"
import { useAuthenticate } from "@daveyplate/better-auth-ui"
import {createContext, useState} from "react"
import { useNotebookList } from "@/lib/notebooks"
import { Note } from "@/generated/prisma"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { PlusIcon } from "lucide-react"
import { Input } from "@/components/ui/input"
import { createNotebook } from "@/lib/notebooks"
export const notebookListContext = createContext<{data: Note[], loaded: boolean, reload: () => void} | null>(null)
export default function LibraryLayout({ children }: { children: React.ReactNode }) {
    useAuthenticate()
    const [notebookName, setNotebookName] = useState("")
    const notebooks = useNotebookList()
    return (
        <notebookListContext.Provider value={notebooks}>
            <div className="header">
                <UserButton size="sm" className="header_user_button" />
                <div className="header_slash">/</div>
                <div className="header_title">Library</div>
                <div style={{ flex: 1 }}></div>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="outline"><PlusIcon /> Create notebook</Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create notebook</DialogTitle>
                            <DialogDescription>
                                Give your notebook a name
                            </DialogDescription>
                        </DialogHeader>
                        <Input placeholder="Notebook name" value={notebookName} onChange={(e) => setNotebookName(e.target.value)} />
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button variant="outline">Cancel</Button>
                            </DialogClose>
                            <DialogClose asChild>
                                <Button onClick={() => {createNotebook(notebookName); notebooks.reload()}}>Create</Button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
            {children}
        </notebookListContext.Provider>
    )
}