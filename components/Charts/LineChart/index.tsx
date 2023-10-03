import { ApexOptions } from "apexcharts"
import ReactApexChart from "react-apexcharts"
import { BsGraphUp } from "react-icons/bs"

const options: ApexOptions = {
  colors: ["#00CC99"],
  stroke: {
    curve: "smooth",
  },
  grid: {
    borderColor: "#6B7280",
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 5,
    colors: "#fff",
    strokeColors: ["#007A5B"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },
  xaxis: {
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    labels: {
      show: false,
      style: {
        colors: "#999999",
      },
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#999999",
      },
    },
  },
}

interface LineChartProps {
  name: string
  data: number[]
}

export default function LineChart({ name, data }: LineChartProps) {
  const seriesData = {
    series: [
      {
        name: name,
        data: data,
      },
    ],
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-700 rounded-md border border-solid dark:border-gray-600 border-gray-400 p-8 sm:p-4 xl:col-span-8 col-span-12 text-gray-700">
      <div className="text-md md:text-xl font-bold p-4 text-gray-600 dark:text-gray-200 flex items-center">
        <BsGraphUp />
        <div className="ml-4">{name}</div>
      </div>

      <div>
        <ReactApexChart
          options={options}
          series={seriesData.series}
          type="area"
          height={350}
        />
      </div>
    </div>
  )
}
