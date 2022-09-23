import CodeMirror from '@uiw/react-codemirror'
import { dracula } from '@uiw/codemirror-theme-dracula'

import * as ThemeContext from '@/contexts/ThemeContext'

type CodeProps = {
  code: string
  language: string
}

export function Code({ code, language }: CodeProps) {
  const { isDark } = ThemeContext.useTheme()

  const codeString = code.replace(/-n/g, '\n')

  return (
    <CodeMirror
      className="w-full text-slate-800 dark:text-white"
      width="100%"
      value={codeString}
      theme={isDark ? dracula : 'light'}
      readOnly={true}
    />
  )
}
