import React from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine, CChart } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const CPUWidgets = (props) => {
  let impProps = { ...props }
  let { systemData = {} } = impProps
  return (
    <CRow>
      <CCol sm={6} lg={6}>
        <CWidgetStatsA
          style={{height:'200px'}}
          className="mb-4"
          color="danger"
          value={<>{systemData ? systemData.cpuDetails.brand : 'sss'}</>}
          title={systemData ? systemData.cpuDetails.manufacturer : 'sss'}
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['core1', 'core2', 'core3', 'core4', 'core5', 'core6'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [1, 2, 3, 4, 5, 6],
                    barPercentage: 0.6,
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={6}>
        <CWidgetStatsA
          style={{height:'200px'}}
          className="mb-4"
          color="success"
          value={<>{systemData ? systemData.cpuDetails.physicalCores + ' cores' : 'sss'}</>}
          title={systemData ? systemData.cpuDetails.cores + ' threads' : 'sss'}
          chart={
            <CChart
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['core1', 'core2', 'core3', 'core4', 'core5', 'core6'],
                datasets: [
                  {
                    type:'bar',
                    label: 'cores',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [4, 4, 4, 4, 4, 4,4, 4, 4, 4, 4, 4],
                    barPercentage: .8,
                  }
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={6}>
        <CWidgetStatsA
          style={{height:'200px'}}
          className="mb-4"
          color="danger"
          value={<>{systemData ? `l1d: ${systemData.cpuDetails.cache.l1d} MB,l1i: ${systemData.cpuDetails.cache.l1i} MB,l2: ${systemData.cpuDetails.cache.l2/(1024*1024)} MB,l3: ${systemData.cpuDetails.cache.l3/(1024*1024)} MB`:''}</>}
          title='System Cache'
          chart={
            <CChartLine
              className="mt-3 mx-3"
              style={{ height: '70px' }}
              data={{
                labels: ['l1d', 'l1i', 'l2', 'l3'],
                datasets: [
                  {
                    label: 'cache (in MB)',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: systemData?[systemData.cpuDetails.cache.l1d,systemData.cpuDetails.cache.l1i,systemData.cpuDetails.cache.l2/(1024*1024),systemData.cpuDetails.cache.l3/(1024*1024)]:[],
                  },
                ],
              }}
              options={{
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                      drawBorder: false,
                      drawTicks: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={6}>
        <CWidgetStatsA
          style={{height:'200px'}}
          className="mb-4"
          color="success"
          value={<>{systemData ? systemData.cpuDetails.speed + ' GHz' : 'sss'}</>}
          title='CPU Speed'
        />
      </CCol>
    </CRow>
  )
}

export default CPUWidgets
