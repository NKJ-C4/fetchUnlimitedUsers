import React, { useEffect, useState } from "react";
import ButtonSection from "./ButtonSection";
import EachUser from "./EachUser";
import Loader from "./Loader";

const UserContainer = props => {
    //Defining States
    const [users, setUsers] = useState([])
    const [numberOfUsers, setNumberOfUsers] = useState(0)
    const [loader, setLoader] = useState(false)


    //Defining useEffects to fetch the users
    useEffect(() => {
        //Function to fetch API for users 
        const getUsers = () => {
            setLoader(true)
            let apiUrl = "http://give-me-users-forever.herokuapp.com/api/users/" + numberOfUsers + "/next";
            fetch(apiUrl, {
                method: "GET"
            })
                .then(res => res.json())
                .then(responseData => {
                    if(responseData){
                        setUsers(responseData?.users.slice(0,10));
                        setLoader(false);
                    }
                })
                .catch(() => {
                    alert("Something went wrong!")
                    setLoader(false);
                })
        }

        getUsers();
    }, [numberOfUsers])


    //Functions
    //Function to update users on click of Previous or next Button
    const updateUsers = (type) => {
        let currentNum = numberOfUsers;
        type === "next" ? setNumberOfUsers(currentNum + 10) : setNumberOfUsers(currentNum - 10);
    }
    return (
        <div className="user-container">
            <div className="users-sub-container">
                {(loader && numberOfUsers === 0 && users.length<1 ) && //users.length < 1 check is to make sure that the global loader doesn't show up except the first time
                    <Loader className="globalLoader" /> 
                }
                {users?.map((item, index) => {
                    return ( 
                        <EachUser 
                            key={item?.id}
                            phone={item?.Phone} 
                            email={item?.Email} 
                            name={item?.FirstNameLastName} 
                            jobTitle={item?.JobTitle} 
                            company={item?.Company} 
                        />
                    )
                })}
            </div>
            <ButtonSection handleMe={(type) => updateUsers(type)} numberOfUsers={numberOfUsers} loader={loader} />
        </div>
    )
}

export default UserContainer;