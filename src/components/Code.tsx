import CodeMirror from '@uiw/react-codemirror'
import { dracula } from '@uiw/codemirror-theme-dracula'
import { EditorView } from '@codemirror/view'
import { json } from '@codemirror/lang-json'

import * as ThemeContext from '@/contexts/ThemeContext'

type CodeProps = {
  code: string
  language: string
}

export function Code({ code, language }: CodeProps) {
  const { isDark } = ThemeContext.useTheme()

  return (
    <CodeMirror
      className="w-full text-slate-800 dark:text-white"
      width="100%"
      value={code}
      theme={isDark ? dracula : 'light'}
      readOnly={true}
    />
  )
}
