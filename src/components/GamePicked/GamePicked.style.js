import styled from "styled-components";
import { BtnWrapper } from "../GameChoice/GameChoice.style";

export const GamePickedWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 72px;

  .player-picked,
  .ia-picked {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      font-weight: 700;
      font-size: 24px;
      letter-spacing: 3px;
      color: #ffffff;
      text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
      text-transform: uppercase;
      margin-bottom: 63px;
    }
  }

  .loading-ia {
    width: 224.63px;
    height: 224.63px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.1);
  }

  .player-picked {
    margin-right: 72px;
  }

  .result {
    display: flex;
    flex-direction: column;
    gap: 16px;

    h2 {
      font-weight: 700;
      font-size: 56px;
      line-height: 67px;
      text-align: center;
      text-transform: uppercase;
      color: #ffffff;
      text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
    }
  }
`;

export const BtnPicked = styled(BtnWrapper)`
  position: initial;
  width: 292.61px;
  height: 300px;

  &.btnWrapper-paper {
    left: initial;
  }
  &.btnWrapper-scissors {
    right: initial;
  }
  &.btnWrapper-rock {
    bottom: initial;
    left: initial;
    transform: initial;
  }

  .content-btn {
    width: 292.61px;
    height: 286.7px;
  }

  .shadow-btn {
    width: 224.63px;
    height: 224.63px;
  }

  .btn {
    position: initial;
    width: 224.63px;
    height: 212.81px;
    background-size: 90px 118px;
  }

  .paper {
    width: 79px;
    height: 118px;
  }
  .scissors {
    width: 60.21px;
    height: 80px;
  }
  .rock {
    width: 64px;
    height: 64px;
  }
`;
