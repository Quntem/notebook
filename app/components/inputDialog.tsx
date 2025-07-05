import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const TextInputDialog = ({title, description, placeholder, onConfirm, value, setValue, onCancel, showing, setShowing}: {title: string, description: string, placeholder: string, onConfirm: (value: string) => void, value: string, setValue: (value: string) => void, onCancel: () => void, showing: boolean, setShowing: (showing: boolean) => void}) => {
    return (
        <Dialog open={showing} onOpenChange={setShowing}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <Input placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button onClick={() => {onConfirm(value); setShowing(false)}}>Confirm</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export const ConfirmDialog = ({title, description, onConfirm, showing, setShowing}: {title: string, description: string, placeholder: string, onConfirm: (value: string) => void, value: string, setValue: (value: string) => void, onCancel: () => void, showing: boolean, setShowing: (showing: boolean) => void}) => {
    return (
        <Dialog open={showing} onOpenChange={setShowing}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>
                        {description}
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DialogClose>
                    <DialogClose asChild>
                        <Button onClick={onConfirm}>Confirm</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}