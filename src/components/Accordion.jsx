import { Disclosure } from '@headlessui/react'
import { ChevronUp } from './icons/ChevronUp'

export function Accordion({
  id,
  title,
  content,
  defaultOpen = false,
  elementRef,
  hideOther,
}) {
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
                className={`${
                  open ? 'rotate-180 transform' : ''
                } h-5 w-5 text-slate-900 dark:text-white`}
              />
            </Disclosure.Button>
            <Disclosure.Panel className=" px-4 py-3 text-sm  ">
              {content}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
