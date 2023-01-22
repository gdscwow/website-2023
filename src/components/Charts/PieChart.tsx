import {
  ChartData,
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { FunctionComponent as FC } from "react";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

interface IProps {
  data: ChartData<any>;
  text: string;
}

const PieChart: FC<IProps> = ({ data, text }) => {
  return (
    <Pie
      data={data}
      options={{
        plugins: {
          title: {
            display: true,
            text,
          },
          legend: {
            display: false,
            position: "right",
          },
        },
      }}
    />
  );
};

export default PieChart;
