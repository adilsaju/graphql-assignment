import { FC, useEffect, useState } from "react";

import { AddPerson } from "../containers/AddPerson";
import { AddCar } from "../containers/AddCar";
import { People } from "../containers/People";
import { GET_PEOPLES } from "../queries";
import { useQuery } from "@apollo/client";
import { Styles } from "../types";

export const Top: FC = () => {
  const { loading, data } = useQuery(GET_PEOPLES);
  const [, forceUpd] = useState({});

  useEffect(() => {
    forceUpd({});
  }, []);

  const people = data?.people;
  if (!data || !people) {
    return <></>;
  }
  for (let p of people) {
    if (!p) {
      return <></>;
    }
  }

  const styles: Styles = {
    container: {
      width: "100%",
    },
  };

  return (
    <div style={styles.container}>
      <AddPerson />
      {loading ? <p>Loading...</p> : <></>}
      {people.length > 0 && (
        <>
          <AddCar />
          <People peoples={people} />
        </>
      )}
    </div>
  );
};
