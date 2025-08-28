import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  users: defineTable({
    email: v.string(),
    userName: v.string(),
    imageUrl: v.string(),
  }),
  pdfFiles: defineTable({
    fileId: v.string(),
    fileName: v.string(),
    fileURL: v.string(),
    storageId: v.string(),
    createdBy: v.string(),
  }),
});
