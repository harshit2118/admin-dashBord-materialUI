import React from 'react'
import {
  CRow,
  CCol,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine, CChartPie, CChartDoughnut } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

const OSWidgets = (props) => {
  let impProps = { ...props }
  console.log(impProps)
  let { systemData = {} } = impProps
  return (
    <CRow>
      <CCol sm={6} lg={6}>
        <CWidgetStatsA
          style={{height:"200px"}}
          className="mb-4"
          color="primary"
          value={<>{systemData ? systemData.freeMemory + 'MB' : ''}</>}
          title="Free Memory"
          chart={
            <CChartDoughnut
              className=""
              style={{ height: '120PX' }}
              data={{
                labels: ['Free Memory', 'Used Memory'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: ['rgb(102, 255, 51)', 'rgb(255, 0, 0)'],
                    borderColor: ['rgb(51, 102, 0)', 'rgb(153, 0, 51)'],
                    pointBackgroundColor: getStyle('rgb(255, 255, 255)'),
                    data: systemData?[systemData.freeMemory, systemData.totalMemory - systemData.freeMemory]:[],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: 30,
                    max: 89,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                    tension: 0.4,
                  },
                  point: {
                    radius: 4,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={6}>
        <CRow>
          <CCol sm={6} lg={6}>
            <CWidgetStatsA
            style={{height:"200px"}}
            className="mb-4"
            color="info"
            value={<>{systemData ? systemData.processes?systemData.processes.length : '':''}</>}
            title="Running Process"
            chart={
              <CChartLine
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  labels: ['p1', 'p2', 'p3', 'p4', 'p5'],
                  datasets: [
                    {
                      label: 'Process',
                      backgroundColor: 'transparent',
                      borderColor: 'rgba(255,255,255,.55)',
                      pointBackgroundColor: getStyle('--cui-info'),
                      data: [1, 18, 9, 17, 34, 22, 11],
                    },
                  ],
                }}
                options={{
                  plugins: {
                    legend: {
                      display: false,
                    },
                  },
                  maintainAspectRatio: false,
                  scales: {
                    x: {
                      grid: {
                        display: false,
                        drawBorder: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                    y: {
                      min: -9,
                      max: 39,
                      display: false,
                      grid: {
                        display: false,
                      },
                      ticks: {
                        display: false,
                      },
                    },
                  },
                  elements: {
                    line: {
                      borderWidth: 1,
                    },
                    point: {
                      radius: 4,
                      hitRadius: 10,
                      hoverRadius: 4,
                    },
                  },
                }}
              />
            }
          />
          </CCol>
          <CCol sm={6} lg={6}>
        <CWidgetStatsA
          style={{height:"200px"}}
          className="mb-4"
          color="warning"
          value={<>{systemData? systemData.osUpTime + ' min' : ''}</>}
          title="Up Time"
          chart={
            <CChartLine
              className="mt-3"
              style={{ height: '70px' }}
              data={{
                labels: ['11AM - 2PM', '2PM - 5PM', '5PM - 8PM'],
                datasets: [
                  {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [78, 81, 80],
                    fill: true,
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    display: false,
                  },
                  y: {
                    display: false,
                  },
                },
                elements: {
                  line: {
                    borderWidth: 2,
                    tension: 0.4,
                  },
                  point: {
                    radius: 0,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
        </CRow>
        
      </CCol>
    </CRow>
  )
}

export default OSWidgets
