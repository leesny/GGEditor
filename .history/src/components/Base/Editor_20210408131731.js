import GGEditorCore from "./bundle";
import { EVENT_BEFORE_ADD_PAGE } from "@common/constants";
import track from "@helpers/track";
import { uniqueId } from "@utils";
console.log('import GGEditorCore1111111:',GGEditorCore)

console.log('import GGEditorCore:',GGEditorCore)
export default class Editor extends GGEditorCore {
  constructor(options) {
    super(options);

    this.id = uniqueId();

    this.on(EVENT_BEFORE_ADD_PAGE, ({ className }) => {
      track({ c1: className });
    });
  }
}
