import React, { useState } from "react";
import { Card, Typography, Divider, Modal } from 'antd';

function PersonalDetailModal({
    personModalOpen,
    closePersonModal,
    personPicture,
    personalDetails,
}) {

    const { Meta } = Card;
    const { Title } = Typography;

    return (
        personModalOpen && (
            <Modal visible={personModalOpen} onOk={closePersonModal} onCancel={closePersonModal}>
                <Card
                    hoverable
                    cover={<img src={personPicture} alt="image" />}
                >
                    <Meta description={personalDetails.map((details) => {
                        return (
                            <div key={details}>
                                <Divider />
                                <Title level={4}>{details}</Title>
                            </div>
                        );
                    })} />
                </Card>
            </Modal>
        )
    );
}

export default PersonalDetailModal;
