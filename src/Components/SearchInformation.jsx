const SearchInformation = ({ dataGoogle, dataYoutube }) => {
  if (dataGoogle === null || dataYoutube === null) {
    return (
        <div className="SearchInfoContainer">
            <h2 className="SearchInfoContainerTitle">Search information</h2>
        </div>
    )
  } else {
    return (
      <div className="SearchInfoContainer">
        <h2 className="SearchInfoContainerTitle">Search information</h2>
        <p>
          <b>Total results: </b>
          {dataYoutube &&
            dataGoogle &&
            (
              dataGoogle.search_information.total_results +
              dataYoutube.search_information.total_results
            ).toLocaleString()}
        </p>
        <p>
          <b>Time: </b>
          {dataYoutube &&
            dataGoogle &&
            (
              dataGoogle.search_information.time_taken_displayed +
              dataYoutube.search_information.time_taken_displayed
            ).toFixed(3) + "s"}
        </p>
        <p>
          <b>Query displayed: </b>
          {dataYoutube &&
            dataGoogle && 
            dataYoutube.search_information.query_displayed}
        </p>
      </div>
    );
  }
};

export default SearchInformation;
