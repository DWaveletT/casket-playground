import type { MarkdownConfig } from "@lezer/markdown";

export const RemoveHTML: MarkdownConfig = {
    remove: ['HTMLBlock', 'HTMLTag']
};