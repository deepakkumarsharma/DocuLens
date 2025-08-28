import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Layout, PlusIcon, Shield } from "lucide-react";
import UploadPDFDialog from "./UploadPDFDialog";

const SideBar = () => (
  <div className="border-gray-300 border-r-2 p-2 overflow-hidden">
    <div className="font-extrabold text-2xl text-center">Read my PDF</div>
    <div className="relative h-screen">
      {/* Upload PDF button */}
      <UploadPDFDialog>
        <Button className="mt-10 w-full cursor-pointer">
          <PlusIcon />
          <span className="text-[var(--text-primary)] font-bold">
            Upload PDF
          </span>
        </Button>
      </UploadPDFDialog>
      {/* Dashboard */}
      <div className="flex items-center gap-3 p-3 mt-10 cursor-pointer hover:bg-slate-200 rounded-lg">
        <Layout />
        <h2>Dashboard</h2>
      </div>
      {/* Upgrade */}
      <div className="flex items-center gap-3 p-3 mt-1 cursor-pointer hover:bg-slate-200 rounded-lg">
        <Shield />
        <h2>Upgrade</h2>
      </div>
      {/* Progress bar */}
      <div className="absolute w-full bottom-20">
        <Progress value={33} />
        <div className="px-2">
          <div className="mt-3 text-medium">2 out of 5 PDF uploaded</div>
          <div className="mt-1 text-sm text-gray-500">
            Upgrade to upload more PDFs
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SideBar;
