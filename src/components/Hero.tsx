import { Fragment } from 'react'
import clsx from 'clsx'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'

import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import * as ThemeContext from '@/contexts/ThemeContext'

const code2 = `schema biblioteca {
  entity livro (
    accessControl (
      read [
        ROLE_PUBLIC,ROLE_ADMIN
      ]
      write [
        ROLE_ADMIN
      ]
    )
  ) {
  // attribute declaration
}`

const tabs = [
  { name: 'library.txt', isActive: true },
  { name: 'index.tsx', isActive: false },
]

function TrafficLightsIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  )
}

export function Hero() {
  const { isDark } = ThemeContext.useTheme()

  let customTheme = JSON.parse(JSON.stringify(theme))
  customTheme.plain.backgroundColor = '#0f172a'

  return (
    <div className="bg-white dark:-mb-32 dark:mt-[-4.5rem] dark:bg-slate-900 dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]">
      <div className="pb-10 lg:relative lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 px-0 lg:max-w-8xl xl:gap-x-16 2xl:grid-cols-2">
          <div className="relative z-10 flex flex-col gap-y-3 md:text-center lg:text-left">
            <div className="relative">
              <p className="inline bg-gradient-to-r from-indigo-400 via-sky-600 to-indigo-400 bg-clip-text font-display text-3xl tracking-tight text-transparent dark:from-indigo-200 dark:via-sky-400 dark:to-indigo-200">
                Develop your software faster.
              </p>
              <p className="mt-3 text-xl tracking-tight text-slate-600 dark:text-slate-400">
                Reduce significantly the efforts of coding, testing, deployment
                and evolution of a software. Deliver your software products in
                up to 60% shorter timeframes, reducing the costs of software
                production, operation and maintenance.
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                <Button href="https://ycodify.com/register" variant="secondary">
                  Try out
                </Button>
                <Button
                  href="https://github.com/ycodify-tech/documentation"
                  variant="secondary"
                >
                  See on GitHub
                </Button>
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            {isDark && (
              <div className="absolute inset-x-[-50vw] -top-32 -bottom-48 hidden [mask-image:linear-gradient(transparent,white,white)] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:left-[calc(50%+14rem)] lg:right-0 lg:-top-32 lg:-bottom-32 lg:[mask-image:none] lg:dark:[mask-image:linear-gradient(white,white,transparent)] 2xl:block">
                <HeroBackground className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" />
              </div>
            )}
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10" />
              <div className="relative rounded-2xl bg-slate-900 ring-1 ring-sky-400 backdrop-blur dark:ring-white/10">
                <div className="absolute -top-px left-20 right-11 h-px bg-gradient-to-r from-sky-300/0 via-sky-300/70 to-sky-300/0" />
                <div className="absolute -bottom-px left-11 right-20 h-px bg-gradient-to-r from-blue-400/0 via-blue-400 to-blue-400/0" />
                <div className="pt-4 pl-4">
                  <TrafficLightsIcon className="h-2.5 w-auto stroke-slate-400 dark:stroke-slate-400/30" />
                  <div className="mt-4 flex space-x-2 text-xs">
                    {tabs.map((tab) => (
                      <div
                        key={tab.name}
                        className={clsx(
                          'flex h-6 rounded-full',
                          tab.isActive
                            ? 'bg-gradient-to-r from-sky-400/30 via-sky-400 to-sky-400/30 p-px font-medium text-sky-300'
                            : 'text-slate-400 dark:text-slate-500'
                        )}
                      >
                        <div
                          className={clsx(
                            'flex items-center rounded-full px-2.5',
                            tab.isActive && 'bg-slate-800'
                          )}
                        >
                          {tab.name}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-start px-1 text-sm">
                    <div
                      aria-hidden="true"
                      className="select-none border-r border-slate-300/5 pr-4 font-mono text-slate-400 dark:text-slate-600"
                    >
                      {Array.from({
                        length: code2.split('\n').length,
                      }).map((_, index) => (
                        <Fragment key={index}>
                          {(index + 1).toString().padStart(2, '0')}
                          <br />
                        </Fragment>
                      ))}
                    </div>
                    <Highlight
                      {...defaultProps}
                      code={code2}
                      language={'json' as Language}
                      theme={customTheme}
                    >
                      {({
                        className,
                        style,
                        tokens,
                        getLineProps,
                        getTokenProps,
                      }) => (
                        <pre
                          className={clsx(
                            className,
                            '-mt-3 flex overflow-x-auto text-sm'
                          )}
                          style={style}
                        >
                          <code className="px-4">
                            {tokens.map((line, lineIndex) => (
                              <div key={lineIndex} {...getLineProps({ line })}>
                                {line.map((token, tokenIndex) => (
                                  <span
                                    key={tokenIndex}
                                    {...getTokenProps({ token })}
                                  />
                                ))}
                              </div>
                            ))}
                          </code>
                        </pre>
                      )}
                    </Highlight>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
