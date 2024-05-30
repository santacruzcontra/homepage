import { useCallback, useId, useState } from "react";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  useDialogState,
} from "~/components/ui/dialog";

export type AlertDialogContent = {
  title?: React.ReactNode;
  body?: React.ReactNode;
  button?: React.ReactNode;
};

export type AlertDialogOptions = {
  isOpen?: boolean;
  content?: AlertDialogContent;
};

export function useAlertDialog({
  isOpen,
  content: _contentOnInit = {},
}: AlertDialogOptions = {}) {
  const id = useId();
  const dialog = useDialogState(isOpen);
  const [content, setContent] = useState<AlertDialogContent>({
    title: _contentOnInit.title ?? "",
    body: _contentOnInit.body ?? "",
    button: _contentOnInit.button ?? "OK",
  });

  const openWithContent = useCallback(
    (content: AlertDialogContent) => {
      setContent(content);
      dialog.open();
    },
    [setContent, dialog],
  );

  return [
    <Dialog key={id} open={dialog.isOpen} onOpenChange={dialog.setOpen}>
      <DialogPortal>
        <DialogOverlay />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{content.title}</DialogTitle>
            <DialogDescription>{content.body}</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button type="button" onClick={dialog.close}>
              {content.button}
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>,
    openWithContent,
    setContent,
    dialog,
  ] as const;
}
