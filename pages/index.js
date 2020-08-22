import React from "react";
import useSWR from "swr";
import axios from "axios";

const fetcher = (...props) => {
  fetch(...props).then((resp) => console.log(resp.json()));
};

const Index = () => {
  const { data, error } = useSWR("/api/app", fetcher);
  if (error) {
    return (
      <div className="body_section">
        <h1>ERRO:{error}</h1>
      </div>
    );
  }
  if (!data) {
    return (
      <>
        <div className="body_section">
          <h1>Loading...</h1>
          <pre>{JSON.stringify(data)}</pre>
        </div>
      </>
    );
  }
  // if (data) {
  //   <>
  //     <div className="body_section">
  //       {data && JSON.stringify(data)}
  //       <button className="get-info">Get Info</button>
  //     </div>
  //   </>;
  // }
};

export default Index;
