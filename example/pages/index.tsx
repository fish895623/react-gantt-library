import type { NextPage } from "next";
import { Gantt } from "react-gantt-library";

const Home: NextPage = () => {
  return (
    <>
      <Gantt
        label="label..."
        start_date={new Date("2017-01-26").toString()}
        due_date={new Date().toString()}
      />
    </>
  );
};

export default Home;
