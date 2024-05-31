import type { MarkdownConfig } from "@lezer/markdown";

const RemoveHTML: MarkdownConfig = {
    remove: ['HTMLBlock', 'HTMLTag']
};

export default RemoveHTML;