import styled from 'styled-components';

const StickyBar = styled.div`
  display: flex;
  justify-content: space-between;
  height: 3rem;
  padding: 1rem;
  background-color: rgb(96, 125, 139);
  color: white;
  font-size: 3rem;
  font-weight: bold;
  position: sticky;
  top: 0;

  & img {
    height: 3rem;
  }
`;

export default StickyBar;
