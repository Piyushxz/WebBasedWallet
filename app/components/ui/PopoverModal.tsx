import { useState } from "react";
import { Button } from "./Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface DeleteModalProps {
  onClick: () => void; 
}

export function DeleteModal(props: DeleteModalProps) {
  const [open, setOpen] = useState(false); 

  const handleDelete = () => {
    props.onClick();
    setOpen(false); 
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="delete" text="Delete Wallets" size="sm" />
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Wallets</DialogTitle>
          <DialogDescription>
            This will delete all your wallets.
          </DialogDescription>
        </DialogHeader>
        <Button onClick={handleDelete} variant="delete" text="Delete All Wallets" size="md" />
        <DialogFooter />
      </DialogContent>
    </Dialog>
  );
}
