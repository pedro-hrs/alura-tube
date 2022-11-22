import styled from "styled-components";

export const StyledTimeline = styled.div`
  flex: 1;
  width: 100%;
  /* padding: 16px; */
  overflow: hidden;
  .card-video{
    display: flex;
    flex-direction: column;
    background-color: #f5f5f5;
    padding: 5px;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 15px ;
    border: 1px solid #e0e0e0;
  }
  .card-video > span {
    font-size: 0.9em;
    font-weight: 600;
    padding: 10px 0;
  }
  h2 {
    font-size: 16px;
    padding: 20px;
    text-transform: capitalize;
  }
  img {
    aspect-ratio: 16/9;
    font-weight: 500;
    object-fit: cover;
    width: 100%;
    /* max-width: 210px; */
    border-radius: 5px;
    height: auto;
  }
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    div {
      padding: 0 20px;
      width: calc(100vw - 16px * 4);
      display: grid;
      grid-gap: 16px;
      grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
      grid-auto-flow: column;
      grid-auto-columns: minmax(200px,1fr);
      overflow-x: scroll;
      scroll-snap-type: x mandatory;
      a {
        scroll-snap-align: start;
        span {
          padding-top: 8px;
          display: block;
          /* padding-right: 24px; */
          color: ${({ theme }) => theme.textColorBase || "#222222"};
        }
      }
    }
  }
`;