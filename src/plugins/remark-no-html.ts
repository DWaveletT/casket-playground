import type { Processor } from "unified"


export default function remarkNoHtml(this: Processor) {
    
    const self = this
    const data = self.data()
  
    // @ts-ignore
    const micromarkExtensions = data.micromarkExtensions || (data.micromarkExtensions = [])

    micromarkExtensions.push({ disable: { null: ['htmlText', 'htmlFlow']}});
}