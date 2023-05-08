export type Gene = {
    id: string;
    phenotypes: {
      id: string;
      value: number;
    }[];
  };
  
  export type Data = Gene[];
  
  export type FilterProps = {
    data: Data;
    onGeneSelection: (selectedGenes: string[]) => void;
    onPhenotypeSelection: (selectedPhenotypes: string[]) => void;
    onPercentileSelection: (percentile: number) => void;
  };
  
  export type HeatmapProps = {
    data: Data;
  };
  