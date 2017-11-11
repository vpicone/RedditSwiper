import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';
import SwipeableContent from '../SwipeableContent';
import ControlButtons from './ControlButtons';
import Image from './Image';
import CardFooter from './CardFooter';

const fadeInAnimation = keyframes`${fadeIn}`;

const Container = styled.div`
  animation: 1s ${fadeInAnimation};
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
        <CardFooter
          permalink={permalink}
          undoLastAction={props.undoLastAction}
        />
      </SwipeableContent>
    </Container>
  );
};
export default CardContainer;
