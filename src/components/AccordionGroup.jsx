import { createRef, useRef } from 'react'
import { Accordion } from './Accordion'

export function AccordionGroup({ accordionsData, hideSelf = false }) {
  const elementsRef = useRef(accordionsData?.map(() => createRef()))

  const hideOther = (id) => {
    let tabIsOpen = false
    const items = elementsRef.current.filter((elm) => {
      if (elm?.current?.getAttribute('data-id') !== id.toString()) {
        if (elm?.current?.getAttribute('aria-expanded') === 'true') {
          tabIsOpen = true
        }
        return true
      }
      return false
    })

    if (tabIsOpen || hideSelf) {
      items.forEach((elm) => {
        if (elm?.current?.getAttribute('aria-expanded') === 'true') {
          elm?.current?.click()
        }
      })
      return
    }

    elementsRef.current.forEach((elm) => {
      if (elm?.current?.getAttribute('aria-expanded') === 'true') {
        elm?.current?.click()
      }
    })
  }

  return (
    <div className={`w-full space-y-8`}>
      {accordionsData.map((accordionData, idx) => {
        return (
          <div
            onClick={() => {
              accordionData.action()
            }}
            key={idx}
          >
            <Accordion
              title={accordionData.title}
              content={accordionData.content}
              defaultOpen={accordionData.defaultOpen}
              elementRef={elementsRef.current[idx]}
              id={accordionData.id}
              hideOther={() => hideOther(accordionData.id)}
            />
          </div>
        )
      })}
    </div>
  )
}
