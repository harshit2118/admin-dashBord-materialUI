import React, {useState, useEffect} from 'react'
import http from 'src/services/httpServices'
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCardHeader,
  CCol,
  CLink,
  CRow,
  CWidgetStatsB,
  CWidgetStatsC,
  CWidgetStatsE,
  CWidgetStatsF,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cilArrowRight,
  cilBasket,
  cilBell,
  cilChartPie,
  cilMoon,
  cilLaptop,
  cilPeople,
  cilSettings,
  cilSpeech,
  cilSpeedometer,
  cilUser,
  cilUserFollow,
} from '@coreui/icons'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import { DocsExample } from 'src/components'

import WidgetsBrand from './WidgetsBrand'
import OSWidgets from './OSWidgets'
import CPUWidgets from './CPUWidgets'
import BatteryWidget from './BatteryWidget'

const Widgets = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)
  let [systemData = {}, setSystemData] = useState(null)
  useEffect(async () => {
    let response = await http.get('/systemDetails')
    let { data } = response
    setSystemData(data)
  }, [])
  return (
    <CCard>
      <CCardHeader>Some used widgets</CCardHeader>
      <CCardBody>
        <DocsExample href="/components/widgets/#cwidgetstatsa">
          <OSWidgets systemData={systemData}/>
        </DocsExample>
        <DocsExample href="/components/widgets/#cwidgetstatsb">
          <CPUWidgets systemData={systemData}/>
        </DocsExample>
        <DocsExample href="/components/widgets/#cwidgetstatsb">
          <BatteryWidget systemData={systemData}/>
        </DocsExample>
      </CCardBody>
    </CCard>
  )
}

export default Widgets
