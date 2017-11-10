// import React, { Component } from 'react';
import styled from 'styled-components';
import React from 'react';
import SwipeableContent from '../SwipeableContent';
import ControlButtons from './ControlButtons';
import Image from './Image';
import CardFooter from './CardFooter';
// import Swipeable from 'react-swipeable';

const Container = styled.div`
  text-align: left;
  width: 95%;
  max-width: 25rem;
`;

const trimTitle = (titleString, length) => {
  if (titleString.length > length) {
    return `${titleString.substring(0, length)}...`;
  }
  return titleString;
};

const CardContainer = (props) => {
  const { preview, title, permalink } = props.post;
  return (
    <Container>
      <SwipeableContent styleClass="card" {...props}>
        {preview ? (
          <Image preview={preview} alt={`for ${trimTitle(title, 50)}`} />
        ) : null}
        <div className="card-body">
          {props.children}
          <ControlButtons
            post={props.post}
            unsavePost={props.unsavePost}
            keepPost={props.keepPost}
          />
        </div>
        <CardFooter permalink={permalink} />
      </SwipeableContent>
    </Container>
  );
};
export default CardContainer;
