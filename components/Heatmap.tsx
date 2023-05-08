import React from "react";
import * as d3 from "d3";
import { ResponsiveHeatMapCanvas } from "@nivo/heatmap";

export async function getStaticProps() {
  const res = await fetch(
    "https://raw.githubusercontent.com/mpi2/EBI02126-web-developer/main/gene_phenotypes.json"
  );
  const data = await res.json();

  return {
    props: {
      genePhenotypes: data,
    },
  };
}

type GenePhenotypes = {
  id: number;
  marker_symbol: number;
  gene: number;
  phenotype_count: number;
  marker_accession_id: string;
  procedures: string;
  phenotype_terms: string;
};

function Heatmap({ genePhenotypes }: { genePhenotypes: GenePhenotypes[] }) {
  const transformedData = genePhenotypes.map((genePhenotype) => {
    return {
      x: genePhenotype.marker_symbol,
      y: genePhenotype.gene,
      value: genePhenotype.phenotype_count,
      metadata: {
        marker_accession_id: genePhenotype.marker_accession_id,
        procedures: genePhenotype.procedures,
        phenotype_terms: genePhenotype.phenotype_terms,
      },
    };
  });

  console.log(transformedData);

  const groupedData = Array.from(
    d3.group(transformedData, (d) => d.y),
    ([id, data]) => ({
      id: id.toString(),
      data,
    })
  );

  return (
    <div style={{ height: 600 }}>
      <ResponsiveHeatMapCanvas
        data={groupedData}
        margin={{ top: 80, right: 60, bottom: 80, left: 100 }}
        forceSquare={true}
        axisTop={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: -90,
          legend: "",
          legendOffset: 36,
        }}
        axisRight={null}
        axisBottom={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "",
          legendOffset: -40,
        }}
        enableLabels={false}
        hoverTarget="cell"
        theme={{
          tooltip: {
            container: {
              background: "white",
            },
          },
        }}
      />
    </div>
  );
}

export default Heatmap;
