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
import { type RequiredKeys } from "~/utilTypes";

type ButtonVariants = React.ComponentProps<typeof Button>["variant"];

export type AlertDialogContent = {
  title?: React.ReactNode;
  body?: React.ReactNode;
  button?: React.ReactNode;
  buttonVariant?: ButtonVariants;
};

export type AlertDialogOptions = {
  isOpen?: boolean;
  content?: AlertDialogContent;
};

export type OpenDialogWithContentParam = RequiredKeys<
  AlertDialogContent,
  "title" | "body"
>;

const DEFAULT_BUTTON_TEXT = "OK";
const DEFAULT_BUTTON_VARIANT: ButtonVariants = "default";

export function useAlertDialog({
  isOpen,
  content: _contentOnInit = {},
}: AlertDialogOptions = {}) {
  const id = useId();
  const dialog = useDialogState(isOpen);
  const [content, setContent] = useState<AlertDialogContent>({
    title: _contentOnInit.title ?? "",
    body: _contentOnInit.body ?? "",
    button: _contentOnInit.button ?? DEFAULT_BUTTON_TEXT,
    buttonVariant: _contentOnInit.buttonVariant ?? DEFAULT_BUTTON_VARIANT,
  });

  const openWithContent = useCallback(
    (content: OpenDialogWithContentParam) => {
      setContent({
        button: DEFAULT_BUTTON_TEXT,
        buttonVariant: DEFAULT_BUTTON_VARIANT,
        ...content,
      });
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
            <Button
              type="button"
              onClick={dialog.close}
              variant={content.buttonVariant}
            >
              {content.button}
            </Button>
          </DialogFooter>
        </DialogContent>
      </DialogPortal>
    </Dialog>,
    openWithContent,
    dialog,
    setContent,
  ] as const;
}
