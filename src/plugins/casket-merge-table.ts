import { EditorSelection } from "@codemirror/state";
import type { EditorView } from "@codemirror/view";
import { defaultIcons, type CasketView, type Tool } from "casket-star";
import { createVNode, render } from "vue";

import DTable, { type Node } from '~/components/ToolMergeTable.vue';

const ToolMergeTable: Tool = {
    name: 'merge-table',
    icon: defaultIcons['table'],
    func: (codemirror: EditorView, casketstar: CasketView, container: HTMLDivElement) => {
        
        function insertTable(row: number, col: number, table: Node[][]){
            const state = codemirror.state;
            const trans = state.update(state.changeByRange( range => {
                let text = "\n\n";

                for(let i = 0;i < row;i ++){
                    for(let j = 0;j < col;j ++){
                        const node = table[i][j];
                        if(!node.merged && !(node.row === 1 && node.col === 1)){
                            const data = node.data;
                            for(let a = i;a < i + node.row;a ++){
                                for(let b = j;b < j + node.col;b ++){
                                    if(a === i && b + 1 === j + node.col){
                                        table[a][b].data = data;
                                    } else 
                                    if(a === i){
                                        table[a][b].data = '>';
                                    } else 
                                        table[a][b].data = '^';
                                }
                            }
                        }
                    }
                }

                for(let i = 0;i < row;i ++){
                    for(let j = 0;j < col;j ++){
                        text += '|' + table[i][j].data
                    }
                    text += '|\n';

                    if(i === 0){
                        for(let j = 0;j < col;j ++)
                            text += '|:-:';
                        text += '|\n';
                    }
                }

                text += '\n';

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
            DTable, {
                confirm: insertTable,
                container: container
            }
        );

        render(dialog, container);
    }
};

export default ToolMergeTable;