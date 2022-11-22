import styled from "styled-components";
import config from '../../config.json'

export default function Header (){

  const StyledHeader = styled.div`
    .user-info > img {
      width: 80px;
      height: 80px;
      border-radius: 50%;
    }
    .user-info{
      display: flex;
      align-items: center;
      width: 100%;
      padding: 16px 32px;
      gap: 5px;
    }
    .banner{
      width: 100%;
    }
    .banner > img {
      width: 100%;
      height: 30vh;
      overflow: hidden;
      object-fit: cover;
    }
  `
  return (
    <StyledHeader>
      <section className="banner">
        <img src={config.banner}/>
      </section>
      <section className="user-info">
      <img src={`https://github.com/${config.github}.png`}/>
      <div>
        <h2>{config.name}</h2>
        <p>{config.job}</p>
      </div>
      </section>
    </StyledHeader>
  )
}