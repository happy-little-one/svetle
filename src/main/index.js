import { injectGlobal } from '@emotion/css'

import App from './app.svelte'

new App({ target: document.body })

injectGlobal`
  *, ::before, ::after {
    box-sizing: border-box;
  }

  * {
    out-line: none;
  }

  body {
    margin: 0;
  }

  :root {
    --primary: #1890ff;
    --link: #1890ff;
    --success: #52c41a;
    --error: #f5222d;
    --text: rgb(0 0 0 / 85%);
    --sub-text: rgb(0 0 0 / 65%);
    --disabled: rgb(0 0 0 / 45%);
    --border: #d9d9d9;
    --bg: #f5f5f5;
  
    --radius: 4px;
  
    --shadow: 0 3px 6px -4px rgba(250, 169, 169, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08),0 9px 28px 8px rgba(0, 0, 0, 0.05);
  }
`
