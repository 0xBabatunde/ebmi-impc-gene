import React, { useState, useEffect } from "react";
import Heatmap from "../../components/Heatmap";
import Image from "next/image";

const App = () => {
  const handleGeneSelection = (selectedGenes: string[]) => {
    // TODO: Filter the data by selected genes
  };

  const handlePhenotypeSelection = (selectedPhenotypes: string[]) => {
    // TODO: Filter the data by selected phenotypes
  };

  const handlePercentileSelection = (percentile: number) => {
    // TODO: Filter the data by selected percentile
  };

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Gene-Phenotype Heatmap</h1>
          <p>Visualizing gene-phenotype associations using a heatmap.</p>
          <Image src="/logo.svg" className="App-logo" alt="logo" />
        </header>
        <>
          <Heatmap genePhenotypes={[]} />
        </>
      </div>
    </>
  );
};

export default App;
