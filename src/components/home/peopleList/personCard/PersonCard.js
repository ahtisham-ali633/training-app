import React from "react";
import { Card } from 'antd';


function PersonCard({ openPersonModalAction, personName, personPicture, personId }) {
    const { Meta } = Card;

    return (
        <>
            <Card
                hoverable
                style={{ width: 640 }}
                cover={<img id={personId} onClick={openPersonModalAction} src={personPicture} alt="image " />}
            >
                <Meta title={personName} onClick={openPersonModalAction} />
            </Card>

        </>
    )
}

export default PersonCard