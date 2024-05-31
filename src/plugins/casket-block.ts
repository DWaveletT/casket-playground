import { EditorSelection } from "@codemirror/state";
import type { EditorView } from "@codemirror/view";
import { defaultIcons, type CasketView, type Tool } from "casket-star";
import { createVNode, render } from "vue";

import DBlock from '~/components/ToolBlock.vue';

const ToolBlock: Tool = {
    name: 'block',
    icon: defaultIcons['block'],
    func: (codemirror: EditorView, casketstar: CasketView, container: HTMLDivElement) => {
        
        function insertBlock(type: string, title: string, code: string){
            const state = codemirror.state;
            const trans = state.update(state.changeByRange( range => {
                const text = `\n:::${type}${ title.trim().length >= 1 ? `[${title}]` : ''}\n${code}\n:::\n`;
                return {
                    changes: [
                        { from: range.from, to: range.to},
                        { from: range.from, insert: text},
                    ],
                    range: EditorSelection.range(range.from + text.length, range.from + text.length)
                }
            }));
            
            codemirror.update([trans]);
            codemirror.focus();
        }
        
        const dialog = createVNode(
            DBlock, {
                confirm: insertBlock,
                container: container
            }
        );

        render(dialog, container);
    }
};

export default ToolBlock;