import React from "react";
import UserCard from "./UserCard/UserCard";

export default function Main(props) {
  return (
    <div style={{display:"flex", justifyContent:"space-evenly"}}>
        {props.persons.map(el=><UserCard user={el} />)}
    </div>
  );
}
