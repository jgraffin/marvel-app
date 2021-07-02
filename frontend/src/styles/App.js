import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  width: 100%;

  .App-logo {
    display: block;
    height: auto;
    width: 96px;

    img {
      display: block;
      width: 100%;
    }
  }

  .App-text {
    align-items: center;
    display: flex;
    min-width: 300px;

    h2 {
      font-size: 14px;
      font-weight: 600;

      strong {
        font-weight: 300;
      }
    }

    span {
      align-items: center;
      justify-content: center;
      display: flex;
      background: #f5f5f5;
      border-radius: 4px;
      height: 32px;
      width: 32px;
      font-weight: 600;
      font-size: 15px;
      color: #555555;
      margin-left: 16px;
    }
  }
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  background: #e5e5e5;

  .container {
    margin: 0 auto;
    width: 100%;

    @media (min-width: 768px) {
      width: 750px;
    }

    @media (min-width: 992px) {
      width: 920px;
    }

    @media (min-width: 1200px) {
      width: 1140px;
    }

    .App-characters__list {
      display: flex;
      flex-direction: column;
      width: 100%;

      @media (max-width: 768px) {
        padding: 0 24px;
      }

      > li {
        width: 100%;

        button {
          cursor: pointer;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          background: #ffffff;
          margin-bottom: 8px;
          padding: 24px;
          border-radius: 4px;
          box-shadow: 0px 1px 4px #00000033;
          width: 100%;
          text-align: left;
          transition: ease-in-out 0.3s;

          &:hover {
            box-shadow: 0px 0px 10px #00000066;
          }

          @media (max-width: 768px) {
            grid-template-columns: 1fr;
          }
        }

        &:first-of-type {
          .character,
          .series,
          .events {
            position: relative;
            &::before {
              content: "Personagem";
              position: absolute;
              left: 72px;
              top: -45px;
              font-size: 12px;
              color: #8e8e8e;
            }
          }

          .series {
            &::before {
              content: "Séries";
              left: 0;
            }
          }

          .events {
            &::before {
              content: "Eventos";
              left: 0;
            }
          }
        }
      }

      img {
        border-radius: 4px;
        width: 48px;
        height: auto;
        display: inline-block;
        vertical-align: middle;
        margin-right: 24px;

        + h3 {
          color: #555555;
          font-size: 14px;
          display: inline-block;
          vertical-align: middle;

          @media (min-width: 769px) {
            font-size: 16px;
          }
        }
      }

      h3 {
        word-break: break-all;
        width: 150px;
      }

      .series,
      .events {
        @media (max-width: 768px) {
          display: none;
        }

        li {
          color: #555555;
          font-size: 14px;
          line-height: 16px;
        }
      }
    }
  }
`;
export const Footer = styled.footer``;
