import clsx from 'clsx'
import React from 'react'

import { SITE_FULL_NAME } from '@/utilities/siteConfig'

interface Props {
  className?: string
}

/**
 * IDEA logo (from "idea logo.svg"). Uses `currentColor`, so set the colour
 * with a text-* class, e.g. <Logo className="h-8 text-primary" />.
 */
export const Logo = ({ className }: Props) => {
  return (
    <svg
      aria-label={SITE_FULL_NAME}
      className={clsx('h-8 w-auto', className)}
      fill="currentColor"
      role="img"
      viewBox="0 0 210 68.476"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        transform="translate(0,-53.734449)"
        d="M -2.1013113e-5,122.0788 V 109.95383 H 8.4874411 V 82.066524 54.179143 H 21.824851 v 27.810534 27.810543 l 8.562943,0.13058 0.05717,12.14792 z m 40.012273013113,0 V 94.191455 h 13.524977 v 14.424275 c 13.514614,0 24.382491,-4.15134 24.382491,-20.486738 0,-16.335362 -10.911989,-20.639705 -24.426348,-20.639705 l 0.03842,14.577237 H 40.012763 V 54.179143 h 23.80974 c 13.897308,0 27.434495,14.090087 27.434495,33.949849 0,18.311438 -12.481354,33.923568 -27.600559,33.923568 z m 63.049658,0 V 54.179143 h 34.07653 l 3e-5,13.472756 -19.52663,-0.03413 v 13.235388 h 26.67481 v 13.337488 h -26.67481 v 14.447865 h 19.52663 l -3e-5,13.43943 z m 52.22425,0.13148 L 182.64307,53.734449 210,122.21022 l -13.93118,-5e-5 -13.42575,-35.417779 c 0,0 -9.49419,23.993899 -13.42568,35.417829 z"
      />
    </svg>
  )
}
