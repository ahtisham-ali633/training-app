import React from "react";
import PersonCard from "./personCard/PersonCard";
import { Row, Col } from 'antd';

function PeopleList({ people, openPersonModalAction }) {
    return (
        <>
            <div style = {{ paddingTop: '12px', marginTop: '-20px',  marginLeft: '350px', marginRight: '-400px'}}>
            <Row gutter={[16, 16]}>

                {people.map((person) => {
                    return (
                        <Col span={8} key={person.login.uuid}>
                        <PersonCard
                            personPicture={person.picture.large}
                            personId={person.login.uuid}
                            personName={person.name.first + " " + person.name.last}
                            openPersonModalAction={openPersonModalAction}
                        />
                        </Col>
                    );
                })}

                </Row>
            </div>
        </>
    )
}

export default PeopleList