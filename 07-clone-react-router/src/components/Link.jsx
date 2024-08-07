import { EVENTS } from "../const/events"

export const navigate = (href) => {
  window.history.pushState({}, '', href)
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}


export function Link({ target, to, ...props }) {
  const handleClick = (e) => {

    //check if the ways of open the link can do in SPA form
    const isMainEvent = e.button === 0
    const isManageableEvent = target === undefined || target === '_self'
    
    //events that <a> do by default
    const isModifiedEvent = e.metaKey || e.altKey || e.ctrlKey || e.shiftKey

    //check if the link open for SPA or default
    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      e.preventDefault()
      navigate(to)
    }
  }

  return (
    <a
      onClick={handleClick}
      href={to}
      target={target}
      {...props}
    />
  )
}