import React from "react";

function Persons({
  persons,
}: {
  persons: { name: string; role: string; place: string }[];
}) {
  return persons.map((person) => (
    <div className="person-detail">
      <div className="person-name"> {person.name} </div>
      <div className="role">{person.role}</div>
      <div className="place"> {person.place} </div>
    </div>
  ));
}

export default Persons;
