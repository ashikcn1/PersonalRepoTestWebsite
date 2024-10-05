import React from "react";

function Address({
  addresses,
}: {
  addresses: {
    location: string;
    localAddress: string;
    broaderAddress: string;
  }[];
}) {
  return addresses.map((address) => {
    <div>
      <div className="location">{address.location}</div>
      <div className="local-area">{address.localAddress}</div>
      <div className="broader-area">{address.broaderAddress}</div>
    </div>;
  });
}

export default Address;
