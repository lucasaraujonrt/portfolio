import React from "react";
import Lottie from "lottie-react-web";
import Me from "../../assets/animation/me_coding.json";
import Typist from "react-typist";
import { Typography } from "../../components";

import * as S from "./styles";

const Introduction: React.FC = () => {
  return (
    <S.Container>
      <S.NavBar>
        <Typist
          cursor={{
            show: true,
          }}
        >
          <a
            target="_blank"
            href="https://www.linkedin.com/in/lucasaraujonrt/"
            rel="noreferrer"
          >
            <Typography color="white" font="medium" size="medium">
              @lucasaraujonrt
            </Typography>
          </a>
        </Typist>
      </S.NavBar>
      <S.AboutMeContainer>
        <S.WrapperMe>
          <Typist>
            <Typography color="white" font="medium" size="medium">
              Mid-Level Front end Developer
            </Typography>
          </Typist>
          <div style={{ paddingTop: 10 }}>
            <Typography color="white" font="medium" size="small">
              Software Engineering Student
            </Typography>
          </div>
          <div style={{ paddingTop: 20 }}>
            <Typography color="white" font="medium" size="small">
              Always helping people when they need them.
            </Typography>
          </div>
          <div style={{ paddingTop: 5 }}>
            <Typography color="white" font="medium" size="small">
              Enthusiast of mobile development. React Native Lover 💜
            </Typography>
          </div>
          <div style={{ paddingTop: 30 }}>
            <Typography color="white" font="medium" size="small">
              First I will introduce myself to you. 🚀
            </Typography>
          </div>
        </S.WrapperMe>
        <S.WrapperAnimation>
          <Lottie
            options={{
              animationData: Me,
              loop: true,
            }}
          />
        </S.WrapperAnimation>
      </S.AboutMeContainer>
    </S.Container>
  );
};

export default Introduction;
