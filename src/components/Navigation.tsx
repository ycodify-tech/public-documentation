import { useRouter } from 'next/router'
import clsx from 'clsx'
import Link from 'next/link'
import { AccordionGroup } from './AccordionGroup'

type NavigationProps = {
  navigation: {
    title: string
    links: {
      title: string
      href: string
    }[]
  }[]
  className?: string
}

export function Navigation({ navigation, className }: NavigationProps) {
  let router = useRouter()

  const accordionsData = []

  return (
    <nav className={clsx('flex w-full text-base lg:text-sm', className)}>
      <ul role="list" className="w-full">
        <>
          {navigation.map((section, index) => {
            let defaultOpen = false

            accordionsData.push({
              id: index,
              title: section.title,
              content: (
                <ul
                  role="list"
                  className="space-y-2 border-l-2 border-slate-100 dark:border-slate-800 lg:mt-4 lg:space-y-4 lg:border-slate-200"
                >
                  {section.links.map((link) => {
                    if (!defaultOpen) {
                      defaultOpen = link.href === router.pathname
                    }
                    return (
                      <li key={link.href} className="relative">
                        <Link
                          href={link.href}
                          className={clsx(
                            'block w-full pl-3.5 before:pointer-events-none before:absolute before:-left-1 before:top-1/2 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full',
                            link.href === router.pathname
                              ? 'font-semibold text-sky-500 before:bg-sky-500'
                              : 'text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300'
                          )}
                        >
                          {link.title}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              ),
              defaultOpen:
                defaultOpen || (router.pathname == '/' && index == 0),
              action: () => {},
            })
          })}

          <AccordionGroup accordionsData={accordionsData} hideOthers={true} />
        </>
      </ul>
    </nav>
  )
}
