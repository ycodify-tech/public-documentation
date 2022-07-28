import { Disclosure } from '@headlessui/react'
import { useRouter } from 'next/router'
import { ChevronUp } from './icons/ChevronUp'

export function Accordion({ title, children }) {
  let router = useRouter()
  return (
    <div className="w-full">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between gap-x-4">
              <h2 className="font-display font-medium text-slate-900 dark:text-white">
                {title}
              </h2>
              <ChevronUp className={`h-5 w-5 ${open && 'rotate-180'}`} />
            </Disclosure.Button>
            <Disclosure.Panel className="">{children}</Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  )
}
