import { Disclosure } from '@headlessui/react'
import { ReactNode, Ref } from 'react'
import { ChevronUp } from './icons/ChevronUp'

type AccordionProps = {
  id: string
  title: string
  content: ReactNode
  defaultOpen?: boolean
  elementRef: Ref<HTMLButtonElement>
  hideOther?: () => void
}

export function Accordion({
  id,
  title,
  content,
  defaultOpen = false,
  elementRef,
  hideOther,
}: AccordionProps) {
  return (
    <div className={`w-full`}>
      <Disclosure defaultOpen={defaultOpen}>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`flex w-full items-center justify-between text-left font-semibold`}
              ref={elementRef}
              data-id={id}
              onClick={() => {
                if (hideOther) hideOther()
              }}
            >
              <span className="font-display text-sm font-medium text-slate-900 dark:text-white">
                {title}
              </span>
              <ChevronUp
                className={`transform ${
                  open ? 'rotate-180' : 'rotate-90'
                } h-5 w-5 text-slate-900 dark:text-white`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 py-3 text-sm ">
              {content}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
