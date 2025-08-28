import { NextResponse } from "next/server";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";

export async function GET() {
  // Load the pdf
  const pdfURL =
    "https://harmless-gnat-671.convex.cloud/api/storage/3e77a12a-c7c5-4aaa-bf57-2d108e4fbbe1";
  const response = await fetch(pdfURL);
  const data = await response.blob();
  const loader = new WebPDFLoader(data);
  const docs = await loader.load();

  let pdfTextContent = "";
  docs.forEach((doc) => {
    pdfTextContent = pdfTextContent + doc.pageContent;
  });

  // 2. Split the text into small chunks
  const splitter = new RecursiveCharacterTextSplitter({
    chunkSize: 100,
    chunkOverlap: 20,
  });
  const output = await splitter.createDocuments([pdfTextContent]);

  return NextResponse.json({ docs: output });
}
