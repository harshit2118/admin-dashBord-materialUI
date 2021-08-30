import React, {useState, useEffect} from 'react'
import http from '../../services/httpServices';
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBattery3,
  cilBattery5,
  cilBatteryAlert,
  cilMemory,
  cilTask,
  cilCreditCard,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/10.jpg'

const AppHeaderDropdown = () => {
  let [systemData={},setSystemData] = useState(null);
  useEffect(async () => {
    let response = await http.get('/systemDetails')
    let { data } = response
    setSystemData(data)
  }, [])
  console.log(systemData);
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Battery</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={systemData?systemData.batteryDetails.isCharging?cilBattery5:cilBatteryAlert:""} className="me-2" />
          {systemData?systemData.batteryDetails.isCharging?'In Power':'Power Out':''}
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={systemData?systemData.batteryDetails.percent>=80?cilBattery5:systemData.batteryDetails.percent>=20?cilBattery3:cilBatteryAlert:""} className="me-2" />
          Battery Percntage
          <CBadge color={systemData?systemData.batteryDetails.percent>=80?"success":systemData.batteryDetails.percent>=20?"warning":"danger":""} className="ms-2">
            {systemData?systemData.batteryDetails.percent+' %':''}
          </CBadge>
        </CDropdownItem>
        <CDropdownHeader className="bg-light fw-semibold py-2">System</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilMemory} className="me-2" />
          Free Memeory
          <CBadge color="warning" className="ms-2">{systemData?systemData.freeMemory:''}</CBadge>
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilTask} className="me-2" />
          Running Process
          <CBadge color="warning" className="ms-2">{systemData?systemData.processes.length:''}</CBadge>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
