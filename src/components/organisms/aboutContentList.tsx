import { FC } from "react";
//import { AboutContent } from "../../domains/type";
import { aboutContentData } from "../../data/aboutcontents";
import startStyle from "./start.module.css";
import middleStyle from "./middle.module.css";
import endStyle from "./end.module.css";

const AboutContentList: FC = () => {
  return (
    <div>
      {aboutContentData.map((content) => {
        switch (content.id) {
          case "start":
            return (
              <div className={startStyle.component}>
                <div className={startStyle.overlap}>
                  <div className={startStyle.textWrapper}>{content.detail}</div>
                  <div className={startStyle.div}>{content.comment}</div>
                  <div className={startStyle.overlapGrupe}>
                    <img
                      className={startStyle.ellipse}
                      alt="photo"
                      src={content.img}
                    />
                    <div className={startStyle.line} />
                    <div className={startStyle.border} />
                    <div className={startStyle.line2} />
                  </div>
                  <img
                    className={startStyle.sms}
                    alt="Sms"
                    src="../../../public/assets/sms.svg"
                  />
                </div>
              </div>
            );
          case "middle":
            return (
              <div className={middleStyle.component}>
                <div className={middleStyle.overlap}>
                  <div className={middleStyle.textWrapper}>
                    {content.detail}
                  </div>
                  <div className={middleStyle.div}>{content.comment}</div>
                  <div className={middleStyle.overlapGrupe}>
                    <img
                      className={middleStyle.ellipse}
                      alt="photo"
                      src={content.img}
                    />
                    <div className={middleStyle.line} />
                    <div className={middleStyle.border} />
                    <div className={middleStyle.line2} />
                  </div>
                  <img
                    className={middleStyle.sms}
                    alt="Sms"
                    src="../../../public/assets/sms.svg"
                  />
                </div>
              </div>
            );
          case "end":
            return (
              <div className={endStyle.component}>
                <div className={endStyle.overlap}>
                  <div className={endStyle.textWrapper}>{content.detail}</div>
                  <div className={endStyle.div}>{content.comment}</div>
                  <div className={endStyle.overlapGrupe}>
                    <img
                      className={endStyle.ellipse}
                      alt="photo"
                      src={content.img}
                    />
                    <div className={endStyle.line} />
                    <div className={endStyle.border} />
                    <div className={endStyle.border2} />
                    <div className={endStyle.line2} />
                  </div>
                  <img
                    className={endStyle.sms}
                    alt="Sms"
                    src="../../../public/assets/sms.svg"
                  />
                </div>
              </div>
            );
        }
      })}
    </div>
  );
};

export default AboutContentList;
