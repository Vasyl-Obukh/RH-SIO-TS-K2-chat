import * as React from 'react';
import * as Styles from './styles';

function CardNew() {
  const [isOpen, toggle] = React.useState(false);
  const room = React.createRef();
  const handleSubmit = event => {
    event.preventDefault();
    // props.handleSubmit(room.current)
    // @ts-ignore:
    room.current.value = '';
    toggle(false);
  };

  return (
    <Styles.Container>
      {isOpen ? (
        <Styles.Form onSubmit={handleSubmit}>
          <Styles.Input type='text' ref={room} placeholder='Enter name of the room...' autoComplete="off" required />
          <Styles.Button type='submit'>Create</Styles.Button>
          <Styles.Close onClick={() => toggle(false)}>&times;</Styles.Close>
        </Styles.Form>
      ) : (
        <Styles.Button onClick={() => toggle(true)}>Create new room +</Styles.Button>
      )}
    </Styles.Container>
  );
}

export default CardNew;