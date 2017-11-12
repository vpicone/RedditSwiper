import React from 'react';
import styled from 'styled-components';
import SwipeableContent from '../SwipeableContent';
import ControlButtons from './ControlButtons';
import Image from './Image';
import CardFooter from './CardFooter';

const Container = styled.div`
  text-align: left;
  width: 95%;
  max-width: 25rem;
`;

const CardContainer = (props) => {
  const { preview, title, permalink } = props.post;
  return (
    <Container>
      <SwipeableContent styleClass="card" {...props}>
        {preview ? (
          <Image preview={preview} alt={`for ${title.slice(0, 50)}`} />
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
