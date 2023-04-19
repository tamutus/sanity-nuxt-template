import { z } from "zod";

export const slugZ = z.object({
  _type: z.literal("slug"),
  current: z.string(),
});
export type SlugZ = z.infer<typeof slugZ>;

export const baseZ = z
  .object({
    _createdAt: z.string().nullable(),
    _id: z.string().nullable(),
    _rev: z.string().nullable(),
    _type: z.string().nullable(),
    _updatedAt: z.string().nullable(),
  })
  .passthrough();
export type BaseZ = z.infer<typeof baseZ>;

export const spanZ = z.object({
  _key: z.string(),
  _type: z.literal("span"),
  marks: z.array(z.string()),
  text: z.string(),
});
export type SpanZ = z.infer<typeof spanZ>;

export const blockZ = z.object({
  _key: z.string(),
  _type: z.literal("block"),
  children: z.array(spanZ),
  markDefs: z.array(z.any()),
  style: z.enum(["normal", "h1", "h2", "h3", "h4", "blockquote"]),
  level: z.number().optional(),
  listItem: z.string().optional(),
});
export type BlockZ = z.infer<typeof blockZ>;

export const referenceZ = z.object({
  _type: z.literal("reference"),
  _ref: z.string(),
});
export type ReferenceZ = z.infer<typeof referenceZ>;

export const imageZ = z.object({
  _type: z.literal("image"),
  _key: z.string(),
  asset: referenceZ,
});
export type ImageZ = z.infer<typeof imageZ>;

export const mainImageZ = z.object({
  _type: z.literal("image"),
  asset: referenceZ,
});
export type MainImageZ = z.infer<typeof mainImageZ>;

export const authorZ = z.object({
  name: z.string(),
  slug: slugZ,
  image: mainImageZ,
});
export type AuthorZ = z.infer<typeof authorZ>;

export const categoryZ = baseZ.extend({
  description: z.string(),
  title: z.string(),
});
export type CategoryZ = z.infer<typeof categoryZ>;

export const postZ = baseZ.extend({
  author: z.union([referenceZ, authorZ]),
  body: z.array(blockZ.or(imageZ)).nullable(),
  categories: z.array(referenceZ.or(categoryZ)).nullable(),
  mainImage: mainImageZ.nullable(),
  slug: slugZ.nullable(),
  title: z.string(),
  description: z.string().nullable(),
});
export type PostZ = z.infer<typeof postZ>;
