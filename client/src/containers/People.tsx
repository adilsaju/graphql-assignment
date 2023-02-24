import { FC, useEffect, useState } from "react";
import { PersonCard } from "../components/cards/PersonCard";
import { SecondaryHeading } from "../headings/SecondaryHeading";
import { Styles } from "../types";

export const People: FC<{ peoples: any }> = ({ peoples }) => {
  const [, forceUpdate] = useState({});

  useEffect(() => {
    forceUpdate({});
  }, [peoples]);

  const styles: Styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
  };

  return (
    <>
      <SecondaryHeading text="Records" />
      <div style={styles.container}>
        {peoples.map((person: any, index: number) => {
          return <PersonCard person={person!} key={index} />;
        })}
      </div>
    </>
  );
};
