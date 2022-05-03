import * as Swetrix from 'swetrix'
import { useEffect } from 'react'

// TODO: Define types of Swetrix.LibOptions and Swetrix.PageViewsOptions in the useSwetrix hook.
/**
 * React hook for automatically tracking navigation changes on Next.js apps.
 *
 * @param pid the Swetrix Project ID.
 * @param initOptions configuration of the Swetrix init method.
 * @param pageViewsOptions configuration of the Swetrix trackViews method.
 */
export const useSwetrix = (pid: string, initOptions = {}, pageViewsOptions = {}) => {
  useEffect(() => {
    Swetrix.init(pid, initOptions)
    Swetrix.trackViews(pageViewsOptions)
  }, [pid])
}
