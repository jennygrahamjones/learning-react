import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";

// it's recommended that you locate the queries in the actual file where you're doing the querying
export const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY {
    items {
      id
      title
      price
      description
      image
      largeImage
    }
  }
`;

const Centre = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

export default class Items extends Component {
  render() {
    return (
      <Centre>
        <p>items</p>
        <Query query={ALL_ITEMS_QUERY}>
          {/* 
          the only child of query component MUST be a function. 
          it receives a payload, and can be destructured... 
          */
          ({ data, error, loading }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error: {error.messages}</p>;
            return (
              <ItemsList>
                {data.items.map(item => (
                  <p key={data.items.indexOf(item)}>{item.title}</p>
                ))}
              </ItemsList>
            );
          }}
        </Query>
      </Centre>
    );
  }
}
