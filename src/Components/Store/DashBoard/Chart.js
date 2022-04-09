import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
export default function Chart() {
  const chartData = {
    chart: {
      type: "column",
      height: "200px",
    },
    credits: {
      enabled: false,
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        // "Aug",
        // "Sep",
        // "Oct",
        // "Nov",
        // "Dec",
      ],
      crosshair: true,
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "",
        color: "#000",
        data: [4.9, 7.5, 7.4, 6.2, 6.0, 5.0, 10.6],
      },
      {
        name: "",
        color: "#FF842E",
        data: [4.9, 7.5, 7.4, 6.2, 6.0, 5.0, 10.6],
      },
    ],
  };

  return (
    <div>
      <HighchartsReact highcharts={Highcharts} options={chartData} />
    </div>
  );
}
