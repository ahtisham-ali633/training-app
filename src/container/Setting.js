import React from "react";
import {useSelector, useDispatch} from 'react-redux'
import AppHeader from "../components/common/header";
import { Typography, Row, Col } from 'antd';
import SelectSetting from "../components/setting/SelectSetting";
import {settingAction} from "../redux/actions/settingAction";

function Setting() {
    const { Title } = Typography;
    const nationalities = [ "CH", "ES", "FR", "GB"]
    const dispatch = useDispatch()

    const onChangeHandler = () => {
        dispatch(settingAction())
    }
    return(
        <div>
            <AppHeader /><br />
             <Row>
                <Col span={6}><Title level={2}>Setting</Title></Col>
                <Col span={6}><SelectSetting nationalities={nationalities}/></Col>
            </Row>



        </div>
    )
}

export default Setting