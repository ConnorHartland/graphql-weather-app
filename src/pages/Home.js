import React, { useState } from "react";
import styled from "styled-components";
import { GET_WEATHER } from "../graphql/Queries";
import { useLazyQuery } from "@apollo/client";
import { Button } from "@mui/material";

function Home() {
  const [citySearched, setCitySearched] = useState();
  const [getWeather, { loading, data, error }] = useLazyQuery(GET_WEATHER, {
    variables: { name: citySearched },
  });

  if (error) return <h1>Error found</h1>;
  if (data) {
    console.log(data);
  }
  return (
    <Wrapper>
      <h1>Search For Weather</h1>
      <Input
        type="text"
        placeholder="City name..."
        onChange={(e) => {
          setCitySearched(e.target.value);
        }}
      />
      <Button variant="contained">Container</Button>
    </Wrapper>
  );
}

export default Home;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
`;

const Input = styled.input`
  border: none;
  background-color: blue;
  padding: 2rem;
`;
