import { cpp } from '@codemirror/lang-cpp'
import { python } from '@codemirror/lang-python'
import { java } from '@codemirror/lang-java'
import { css } from '@codemirror/lang-css'
import { go } from '@codemirror/lang-go'
import {html} from '@codemirror/lang-html'
import {javascript} from "@codemirror/lang-javascript"
import {less} from "@codemirror/lang-less"
import {php} from "@codemirror/lang-php"
import {sql} from "@codemirror/lang-sql"
import {xml} from "@codemirror/lang-xml"
import {yaml} from "@codemirror/lang-yaml"
import {vue} from "@codemirror/lang-vue"
import {rust} from "@codemirror/lang-rust"
import {json} from "@codemirror/lang-json"

let langMode = {
    'cpp': cpp(),
    'c': cpp(),
    'css': css(),
    'py': python(),
    'python': python(),
    'java': java(),
    'go': go(),
    'html': html(),
    'js': javascript(),
    'ts': javascript(),
    'less': less(),
    'php': php(),
    'sql': sql(),
    'mysql': sql(),
    'xml': xml(),
    'yaml': yaml(),
    'yml': yaml(),
    'vue': vue(),
    'rs': rust(),
    'rust': rust(),
    'json': json(),
}

export {
    langMode
}