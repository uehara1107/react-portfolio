import { FC } from "react";
import WorksList from "../organisms/worksList";
import { workContent } from "../../data/works";

const Works: FC = () => (
  <div>
    <WorksList contents={workContent} />
  </div>
);

export default Works;
