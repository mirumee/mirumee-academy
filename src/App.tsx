import React from "react";
import { useQuery } from "@tanstack/react-query";
import { request, gql } from "graphql-request";

import { Button } from "./components/Button";

const GRAPHQL_URI =
  "https://swapi-graphql.netlify.app/.netlify/functions/index";
// const REST_URI = "https://swapi.dev/api";

const containerStyles = {
  display: "flex",
  justifyContent: "center",
  marginTop: "1rem",
};

function App() {
  const [clickNumber, setClickNumber] = React.useState(0);
  const [reset, setReset] = React.useState(false);

  const { isError, data, error, refetch, isFetching } = useFilms();

  return (
    <div className="appContainer">
      <div style={{ marginBottom: "1rem" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Button
            onClick={() => {
              setReset(false);
              setClickNumber(clickNumber + 1);
            }}
            style={{ marginRight: "1rem" }}
          >
            Click me
          </Button>
          <Button
            variant="error"
            onClick={() => {
              setReset(true);
              setClickNumber(0);
            }}
          >
            Reset
          </Button>
        </div>
        {!!clickNumber && (
          <div style={containerStyles}>
            <span>Button was clicked {clickNumber} times</span>
          </div>
        )}
        {reset && (
          <div style={containerStyles}>
            <span>
              Number of clicks was reset and now shows {clickNumber} clicks
            </span>
          </div>
        )}
      </div>

      <div style={{ margin: "0 auto" }}>
        <Button onClick={() => refetch()}>Fetch Films</Button>
      </div>
      <div style={{ margin: "0 auto" }}>
        {data && (
          <ul>
            {/* @ts-ignore */}
            {data.films.map((film) => (
              <li key={film.id}>{film.title}</li>
            ))}
          </ul>
        )}
        {isError && (
          /* @ts-ignore */
          <span>Error: {error.message}</span>
        )}
        <div>{isFetching && "Fetching..."}</div>
      </div>
    </div>
  );
}

function useFilms() {
  return useQuery(
    ["getFilms"],
    async () => {
      const data = await request(
        GRAPHQL_URI,
        gql`
          query {
            allFilms {
              films {
                id
                title
              }
            }
          }
        `
      );
      return data.allFilms;
    },
    { enabled: false }
  );
}

export default App;
