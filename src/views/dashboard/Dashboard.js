import React, { lazy, useState, useEffect } from 'react'
import http from '../../services/httpServices'
import {
  CAvatar,
  CButton,
  CButtonGroup,
  CBadge,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilApps,
  cilUser,
  cilUserFemale,
} from '@coreui/icons'
import CPUWidgets from '../components/widgets/CPUWidgets.js'

const OSWidgets = lazy(() => import('../components/widgets/OSWidgets.js'))
const CPUWidgetsDropdown = lazy(() => import('../components/widgets/CPUWidgets.js'))
const WidgetsBrand = lazy(() => import('../components/widgets/WidgetsBrand.js'))

const Dashboard = () => {
  let [app1Time = [], setApp1Time] = useState([])
  let [app2Time = [], setApp2Time] = useState([])
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  let [systemData = {}, setSystemData] = useState(null)
  useEffect(async () => {
    let data2 = [
      random(0, 23),
      random(0, 23),
      random(0, 23),
      random(0, 23),
      random(0, 23),
      random(0, 23),
      random(0, 23),
      random(0, 23),
    ]
    setApp2Time(data2)
    let data1 = [
      random(0, 23),
      random(0, 23),
      random(0, 23),
      random(0, 23),
      random(0, 23),
      random(0, 23),
      random(0, 23),
      random(0, 23),
    ]
    setApp1Time(data1)
    let response = await http.get('/systemDetails')
    let { data } = response
    setSystemData(data)
  }, [])
  console.log(app1Time)
  console.log(app2Time)
  let averageNum = (arr, length) => {
    let avg = arr.reduce((acc, curr) => acc + curr, 0) / length
    return avg
  }
  //console.log(systemData)
  return (
    <>
      <CCard className="mb-4 p-4">
        <CRow>
          <CCol sm={5}>
            <h4 id="os" className="card-title mb-0">
              OS Details
            </h4>
          </CCol>
        </CRow>
        <CRow className="mt-3">
          <OSWidgets systemData={systemData} />
        </CRow>
      </CCard>
      <CCard className="mb-4 p-4">
        <CRow>
          <CCol sm={5}>
            <h4 id="os" className="card-title mb-0">
              CPU Details
            </h4>
          </CCol>
        </CRow>
        <CRow className="mt-3">
          <CPUWidgets systemData={systemData} />
        </CRow>
      </CCard>
      <CCard className="mb-4 p-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                System Details
              </h4>
              <div className="small text-medium-emphasis">January - August 2021</div>
              <div className="small text-medium-emphasis">
                <span>
                  {systemData
                    ? `Architecture : ${systemData.architecture} || Platform : ${systemData.platform} || Type : ${systemData.osType}`
                    : ''}
                </span>
                <br />
                <span>
                  <b>{systemData ? `Total Memory : ${systemData.totalMemory}` : ''}</b>
                </span>
                <br />
                <span>{systemData ? `Free Memory : ${systemData.freeMemory}` : ''}</span>
              </div>
            </CCol>
          </CRow>
          <CRow>
            <CCol sm={12} lg={12}>
              <div className="mt-3">
                <CTable hover responsive align="middle" className="mb-0 border">
                  <CTableHead color="light">
                    <CTableRow>
                      <CTableHeaderCell className="text-center">UID</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">GID</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">User Name</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">Home Directory</CTableHeaderCell>
                      <CTableHeaderCell className="text-center">Shell</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {systemData ? (
                      <CTableRow>
                        <CTableDataCell className="text-center">
                          {JSON.parse(systemData.userInformation).uid}
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          {JSON.parse(systemData.userInformation).gid}
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          {JSON.parse(systemData.userInformation).username}
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          {JSON.parse(systemData.userInformation).homedir}
                        </CTableDataCell>
                        <CTableDataCell className="text-center">
                          {JSON.parse(systemData.userInformation).shell}
                        </CTableDataCell>
                      </CTableRow>
                    ) : (
                      ''
                    )}
                  </CTableBody>
                </CTable>
              </div>
            </CCol>
          </CRow>
        </CCardBody>
      </CCard>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Most App Use
              </h4>
              <div className="small text-medium-emphasis">January - August 2021</div>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August'],
              datasets: [
                {
                  label: 'Chrome',
                  backgroundColor: hexToRgba(getStyle('--cui-info'), 10),
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: app1Time.length ? app1Time : [],
                  fill: true,
                },
                {
                  label: 'VS Code',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: app2Time.length ? app2Time : [],
                },
                {
                  label: 'My Third dataset',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [5, 5, 5, 5, 5, 5, 5, 5],
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
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            <CCol sm={12} md={4} className="mb-sm-4 mb-0">
              <strong>VS Code</strong>
              <CProgress
                thin
                className="mt-2"
                precision={1}
                color="success"
                value={app1Time.length ? averageNum(app1Time, app1Time.length) : 0}
              />
            </CCol>
            <CCol sm={12} md={4} className="mb-sm-4 mb-0">
              <strong>Chrome</strong>
              <CProgress
                thin
                className="mt-2"
                precision={1}
                color="info"
                value={app2Time.length ? averageNum(app2Time, app2Time.length) : 0}
              />
            </CCol>
            <CCol sm={12} md={4} className="mb-sm-4 mb-0">
              <strong>Average Process Hour</strong>
              <CProgress thin className="mt-2" precision={1} color="danger" value={20} />
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>
      <CRow>
        <CCol xs>
          <CCard className="p-4">
            <CCol sm={5}>
              <h4 id="traffic" className="card-title">
                Running Process
                <CBadge color="info" className="ms-2">
                  {systemData ? systemData.processes.length : ''}
                </CBadge>
              </h4>
              <div className="small text-medium-emphasis">Processes running in my system</div>
            </CCol>
            <CCardBody>
              <br />
              <CTable hover responsive align="middle" className="mb-0 border">
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">
                      <CIcon icon={cilApps} />
                    </CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Process Name</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Process ID</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {systemData
                    ? systemData.processes.map((process, index) => (
                        <CTableRow key={index}>
                          <CTableDataCell className="text-center">{index + 1}</CTableDataCell>
                          <CTableDataCell className="text-center">{process.name}</CTableDataCell>
                          <CTableDataCell className="text-center">{process.pid}</CTableDataCell>
                        </CTableRow>
                      ))
                    : ''}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
