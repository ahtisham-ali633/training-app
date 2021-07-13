import React, { useRef } from "react";
import AppHeader from "../components/common/header";
import { useSelector, useDispatch } from "react-redux";
import { fetchPeople } from "../redux/actions/peopleAction";
import { selectPeople } from "../redux/selectors/filterPeople";
import PeopleList from "../components/home/peopleList/PeopleList";
import { getPeople } from "../redux/selectors/filterPeople";
import { Progress } from 'antd';
import ProgressBar from "../components/home/progressBar/ProgressBar";
import { isEmpty, isUndefined } from "../utils/flags";
import PersonalDetailModal from "../components/home/personDetailModel/PersonDetailModel";
import PeopleSearchBar from "../components/home/peopleSearchBar/PeopleSearchBar";
import { SET_SEARCH_TERM } from "../redux/types/peopleTypes";
import {
    PERSON_MODAL_OPEN,
    PERSON_MODAL_CLOSE,
} from "../redux/types/ModelTypes";

function Home() {
    const dispatch = useDispatch();
    const people = useSelector((state) => selectPeople(state));
    const hasMore = useSelector((state) => state.peopleReducer.hasMore);
    const loading = useSelector((state) => state.peopleReducer.loading);
    const pageNo = useSelector((state) => state.peopleReducer.pageNo);
    const observer = useRef();
    const person = useSelector((state) => getPeople(state));

    console.log("peoples",person)

    let personalDetails = [];
    if (!isUndefined(person)) {
        personalDetails = [
            "Name: " + person.name.first + " " + person.name.last,
            "Street: " +
            person.location.street.number +
            " " +
            person.location.street.name,
            "City: " + person.location.city,
            "State: " + person.location.state,
            "Post Code: " + person.location.postcode,
            "Phone: " + person.phone,
            "Cell: " + person.cell,
            "Nationality: " + person.nat,
        ];
    }
    const personModalOpen = useSelector((state) => state.modalReducer.personModal.modalOpen);

    console.log("personModel ", personModalOpen) 

    const lastPersonRef = (node) => {
        if (loading) return;
        if (observer.current) {
            observer.current.disconnect();
        }
        observer.current = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                if (hasMore) {
                    dispatch(fetchPeople(pageNo));
                }
            }
        });
        if (node) {
            observer.current.observe(node);
        }
    };

    return (
        <>
            <AppHeader />
            <PeopleSearchBar
                dispatchSearchAction={(searchTerm) =>
                    dispatch({
                        type: SET_SEARCH_TERM,
                        payload: searchTerm,
                    })
                }
            />
            <br />

            {
                !isEmpty(people) ? (
                    <>
                        <PeopleList people={people} openPersonModalAction={(e) =>
                            dispatch({
                                type: PERSON_MODAL_OPEN,
                                payload: e.target.id,
                            })
                        } />
                        <div ref={lastPersonRef} />
                        <PersonalDetailModal
                            personalDetails={personalDetails}
                            personPicture={person?.picture.large}
                            personModalOpen={personModalOpen}
                            closePersonModal={() => dispatch({ type: PERSON_MODAL_CLOSE })}
                        />
                        <ProgressBar loading={loading} hasMore={hasMore} />
                    </>
                ) : (
                    <Progress type="line" percent={60} status='active' strokeColor='grey' style={{ marginLeft: 500 }} />
                )

            }
        </>
    )
}

export default Home