import React from "react";

import { useFilmsQuery } from "../../graphql/generated";
import { Accordion } from "../../components/Accordion";
import { Table } from "../../components/Table";

const columnsWidth = {
  name: 25,
  rotationPeriod: 10,
  orbitalPeriod: 10,
  diameter: 10,
  climates: 15,
  surfaceWater: 10,
  population: 20,
};

export const StarWars: React.FC = () => {
  const { data } = useFilmsQuery();

  return (
    <>
      {data?.allFilms?.films?.map((film, index) => (
        <Accordion
          isOpen={index === 0}
          title={film?.title || ""}
          key={film?.id}
        >
          <Table
            columns={[
              {
                justifyContent: "flex-start",
                content: "Planet Name",
                width: columnsWidth.name,
              },
              {
                content: "Rotation period",
                width: columnsWidth.rotationPeriod,
              },
              { content: "Orbital period", width: columnsWidth.orbitalPeriod },
              { content: "Diameter", width: columnsWidth.diameter },
              { content: "Climate", width: columnsWidth.climates },
              { content: "Surface water", width: columnsWidth.surfaceWater },
              { content: "Population", width: columnsWidth.population },
            ]}
            rows={
              film?.planetConnection?.planets?.map((planet) => ({
                columns: [
                  {
                    justifyContent: "flex-start",
                    content: planet?.name || "",
                    width: columnsWidth.name,
                  },
                  {
                    content: planet?.rotationPeriod || "",
                    width: columnsWidth.rotationPeriod,
                  },
                  {
                    content: planet?.orbitalPeriod || "",
                    width: columnsWidth.orbitalPeriod,
                  },
                  {
                    content: planet?.diameter || "",
                    width: columnsWidth.diameter,
                  },
                  {
                    content: planet?.climates?.[0] || "",
                    width: columnsWidth.climates,
                  },
                  {
                    content: planet?.surfaceWater || "",
                    width: columnsWidth.surfaceWater,
                  },
                  {
                    content: planet?.population || "",
                    width: columnsWidth.population,
                  },
                ],
              })) || []
            }
          />
        </Accordion>
      ))}
    </>
  );
};
