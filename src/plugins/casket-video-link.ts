import { EditorSelection } from "@codemirror/state";
import type { EditorView } from "@codemirror/view";
import { defaultIcons, type CasketView, type Tool } from "@lfe/casket-star";
import { createVNode, render } from "vue";

import DLink from '~/components/ToolVideoLink.vue';

const ToolVideoLink: Tool = {
    name: 'video-link',
    icon: defaultIcons['link'],
    func: (codemirror: EditorView, casketstar: CasketView, container: HTMLDivElement) => {
        function insertLink(type: string, url: string, alt: string){
            const state = codemirror.state;
            const trans = state.update(state.changeByRange( range => {
                const text = (() => {
                    if(type === 'link')
                        return `[${alt}](${url})`;
                    else 
                    if(type === 'bilibili')
                        return `::bilibili[${alt}]{${url}}`;
                    else 
                        return ``;
                })();
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
            DLink, {
                confirm: insertLink,
                container: container
            }
        );

        render(dialog, container);
    }
};

export default ToolVideoLink;