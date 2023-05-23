import React from "react";
import Card from "./Card";

const CardList = ({ data }) => {
  if (data === null) {
    return null;
  } else {
    return (
      <div>
        {data.organic_results.map((data, i) => {
          return (
            <Card
              key={i}
              title={data.title}
              link={data.link}
              info={data.publication_info.summary}
              snippet={data.snippet}
              cited={data.inline_links.cited_by.total}
            />
          );
        })}
      </div>
    );
  }
};

export default CardList;
