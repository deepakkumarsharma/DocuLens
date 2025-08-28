"use client";

import { v4 as uuidv4 } from "uuid";
import { ChangeEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogTrigger,
  DialogFooter,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { DialogClose } from "@radix-ui/react-dialog";

import { useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { Loader2Icon } from "lucide-react";
import { useUser } from "@clerk/nextjs";

const UploadPDFDialog = ({ children }: { children: React.ReactNode }) => {
  const { user } = useUser();
  const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl);
  const addFileEntryToDb = useMutation(api.fileStorage.addFileEntryToDb);
  const getFileURL = useMutation(api.fileStorage.getFileUrl);

  const [fileName, setFileName] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0] ?? null;
    setFile(selectedFile);
  };

  const handleFileNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFileName(event.target.value);
  };

  const onUploadFile = async (event: {
    preventDefault: () => void;
  }): Promise<void> => {
    event.preventDefault();
    setIsLoading(true);

    const postUrl = await generateUploadUrl();
    const result = await fetch(postUrl, {
      body: file,
      method: "POST",
      headers: { "Content-Type": file?.type ?? "application/pdf" },
    });
    const { storageId } = await result.json();
    const fileURL = await getFileURL({ storageId });
    const fileId = uuidv4();

    const response = await addFileEntryToDb({
      fileId,
      storageId,
      fileURL: fileURL ?? "",
      fileName: fileName ?? "UnTitle file",
      createdBy: user?.primaryEmailAddress?.emailAddress ?? "",
    });

    setIsLoading(false);
    setFile(null);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            Upload <span className="text-[var(--text-primary)]">PDF</span> file
          </DialogTitle>
          <DialogDescription asChild>
            <div className="py-4">
              <div className="flex flex-col gap-2">
                Select a file to Upload
                <Input
                  type="file"
                  accept="application/pdf"
                  onChange={(event) => onFileSelect(event)}
                />
              </div>
              <div>
                <div className="mt-4">File name</div>
                <Input
                  placeholder="File name"
                  onChange={handleFileNameChange}
                />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <div className="flex gap-2">
              <Button variant="outline">Cancel</Button>
              <Button variant="default" onClick={onUploadFile}>
                {isLoading ? (
                  <Loader2Icon className="animate-spin" />
                ) : (
                  "Upload"
                )}
              </Button>
            </div>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadPDFDialog;
