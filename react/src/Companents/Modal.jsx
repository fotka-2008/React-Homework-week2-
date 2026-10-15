import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export default function Modal({ header, open, onClose, onSave, children }) {
  return (
    <Dialog open={open} onOpenChange={(value) => !value && onClose()}>
      <DialogContent>
        <form onSubmit={onSave} className="grid gap-4">
          <DialogHeader>
            <DialogTitle>{header}</DialogTitle>
            <DialogDescription className="sr-only">{header}</DialogDescription>
          </DialogHeader>

          <div>{children}</div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Save</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
