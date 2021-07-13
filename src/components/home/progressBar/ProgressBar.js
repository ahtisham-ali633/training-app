import React from "react";
import { Progress } from 'antd';
import { Typography } from 'antd';

function ProgressBar({ loading, hasMore }) {
    const { Title } = Typography;
    if (loading) {
        return <Progress type="line" percent={60} status='active' strokeColor='grey' style={{ marginLeft: 500 }} />
    }
    if (!hasMore) {
        return (
            <Title style={{ marginLeft: 800 }} level={4}>End of users catalog</Title>
        );
    } else {
        return null;
    }
}

export default ProgressBar