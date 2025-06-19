import "./barChartBox.scss";
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  title: string;
  chartData: object[];
  dataKey: string;
  color: string;
};

const BarChartBox = ({ title, chartData, dataKey, color }: Props) => {
  return (
    <div className="barChartBox">
      <h1>{title}</h1>
      <div className="charts">
        <ResponsiveContainer width="99%" height={150}>
          <BarChart data={chartData}>
            <Tooltip
              contentStyle={{ background: "#2a3447", borderRadius: "10px" }}
              labelStyle={{ display: "none" }}
              cursor={{ fill: "none" }}
            />
            <Bar dataKey={dataKey} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartBox;
