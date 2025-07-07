import { Fragment, useCallback, useState } from 'react'
import type { FC } from 'react'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import Tooltip from './tooltip'
import ProgressTooltip from './progress-tooltip'
import type { Resources } from './index'
import {
  PortalToFollowElem,
  PortalToFollowElemContent,
  PortalToFollowElemTrigger,
} from '@/app/components/base/portal-to-follow-elem'
import FileIcon from '@/app/components/base/file-icon'
import {
  Hash02,
  Target04,
} from '@/app/components/base/icons/src/vender/line/general'
import { ArrowUpRight } from '@/app/components/base/icons/src/vender/line/arrows'
import {
  BezierCurve03,
  TypeSquare,
} from '@/app/components/base/icons/src/vender/line/editor'

type PopupProps = {
  data: Resources
  showHitInfo?: boolean
}

const Popup: FC<PopupProps> = ({
  data,
  showHitInfo = false,
}) => {
  const [open, setOpen] = useState(false)
  const fileType = data.dataSourceType !== 'notion'
    ? (/\.([^.]*)$/g.exec(data.documentName)?.[1] || '')
    : 'notion'
  
  const handleCitationClick = useCallback(() => {
    let ts = Math.ceil(new Date().getTime()/1000)
    let url = 'http://192.168.100.116/documents/' + data.documentId +'/file-preview?timestamp='+ts+'&nonce=c0044ecdd5462bff3cf8f8b6ec3c426f&sign=pUcrX0oYFrt1vyeHix9A6O5zpTjrAHRCRypZZIFTVb4='
    window.open(url, '_preview', 'menubar=no,location=no,width=800,height=600')
  }, [data])

  return (
    <PortalToFollowElem
      open={open}
      onOpenChange={setOpen}
      placement='top-start'
      offset={{
        mainAxis: 8,
        crossAxis: -2,
      }}
    >
      <PortalToFollowElemTrigger onClick={handleCitationClick}>
        <div className='flex h-7 max-w-[240px] items-center rounded-lg bg-components-button-secondary-bg px-2'>
          <FileIcon type={fileType} className='mr-1 h-4 w-4 shrink-0' />
          <div className='truncate text-xs text-text-tertiary'>{data.documentName}</div>
        </div>
      </PortalToFollowElemTrigger>
    </PortalToFollowElem>
  )
}

export default Popup
