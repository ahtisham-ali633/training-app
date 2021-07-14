import React from "react";
import { Card, Divider } from 'antd';


function PersonCard({ openPersonModalAction, personName, personPicture, personId }) {
    const { Meta } = Card;

    return (
        <>
            <Card
                hoverable
                style={{ width: 200 }}
                cover={<img id={personId} onClick={openPersonModalAction} src={personPicture} alt="not found" />}
            >
                <Meta title={personName} onClick={openPersonModalAction} />
            </Card>
            <Divider/>
        </>
    )
}

export default PersonCard