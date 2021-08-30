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

const BatteryWidget = (props) => {
  let impProps = { ...props }
  console.log(impProps)
  let { systemData = {} } = impProps
  return (
    <React.Fragment>
    <CRow>
      <CCol sm={12} lg={4}>
            <CWidgetStatsA
            style={{height:"200px"}}
            className="mb-4"
            color="info"
            value={<>{systemData ? systemData.batteryDetails.isCharging?'In Charging' : 'On Battery':''}</>}
            title="Power Status"
            chart={
              <CChartLine
                className="mt-3 mx-3"
                style={{ height: '70px' }}
                data={{
                  datasets: [
                    {
                      label: 'Process',
                      backgroundColor: 'transparent',
                      borderColor: systemData ? systemData.batteryDetails.isCharging?'warning' : 'danger':'',
                      data: systemData ? systemData.batteryDetails.isCharging?[3,6,9,12]:[12,9,6,3]:[],
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
                    point:{
                        radius: 0,
                        hitRadius: 10,
                        hoverRadius: 4,
                        hoverBorderWidth: 3,
                    },
                  },
                }}
              />
            }
          />
      </CCol>  
      <CCol sm={12} lg={8}>
        <CWidgetStatsA
          style={{height:"200px"}}
          className="mb-4"
          color={systemData?systemData.batteryDetails.percent>=80?"success":systemData.batteryDetails.percent>=20?"warning":"danger":""}
          value={<>{systemData ? systemData.batteryDetails.percent + '%' : ''}</>}
          title="Remaining Battery"
          chart={
            <CChartPie
              className=""
              style={{ height: '120PX' }}
              data={{
                labels: ['Remaining Battery', 'Used Battery'],
                datasets: [
                  {
                    label: 'Battery Remaining',
                    backgroundColor: ['rgb(102, 255, 51)', 'rgb(255, 0, 0)'],
                    borderColor: ['rgb(0, 102, 0)', 'rgb(153, 0, 51)'],
                    pointBackgroundColor: getStyle('rgb(255, 255, 255)'),
                    data: systemData?[systemData.batteryDetails.percent, 100 - systemData.batteryDetails.percent]:[],
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
      </CRow>
      <CRow>
      <CCol sm={12} lg={12}>
        <CWidgetStatsA
          style={{height:"200px"}}
          className="mb-4"
          color="secondary"
          value={<>{systemData?`Current Capacity :${systemData.batteryDetails.currentCapacity} mWh`:''}</>}
          title="Up Time"
          chart={
            <CChartLine
              className="mt-3"
              style={{ height: '70px' }}
              data={{
                labels: ['Current Capacity', 'Maximum Capacity', 'Designed Capacity'],
                datasets: [
                  {
                    label: 'Battery Capacity',
                    backgroundColor: 'rgba(255,255,255,.2)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: systemData?[systemData.batteryDetails.currentCapacity,systemData.batteryDetails.maxCapacity,systemData.batteryDetails.designedCapacity]:[],
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
      </CRow>
    </React.Fragment>
  )
}

export default BatteryWidget
