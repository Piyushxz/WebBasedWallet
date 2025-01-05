import { useState } from "react";
import { Button } from "./Button";
import { DeleteIcon } from "./DeleteIcon";
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
  variant:"all"|"single"
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
        {
            props.variant==="all"?    <Button variant="delete" text="Delete Wallets" size="sm" />
            :
            <div 
            className="p-2 hover:bg-[#191919] rounded-lg">
                <DeleteIcon/>
            </div>

        }
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{props.variant==="all"?"Delete Wallets":"Delete  Wallet"}</DialogTitle>
          <DialogDescription>
          {props.variant==="all"?"This will delete all your wallets":"This wallet will be deleted permanently."}
          </DialogDescription>
        </DialogHeader>
        <Button onClick={handleDelete} variant="delete" text="Delete All Wallets" size="md" />
        <DialogFooter />
      </DialogContent>
    </Dialog>
  );
}
