import React from "react"
import { Select } from 'antd';

function SelectSetting({nationalities}) {
    const { Option } = Select;

    function handleChange(value) {
  console.log(`selected ${value}`);
}

    return(
        <div>
             <Select defaultValue="lucy" style={{ width: 120 }} onChange={handleChange}>
                 {
                     nationalities.map(nationality => (
                         <Option value={nationality}>{nationality}</Option>
                     ))
                 }
            </Select>
        </div>
    )
}

export default SelectSetting