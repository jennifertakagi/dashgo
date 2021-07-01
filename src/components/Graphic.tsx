import dynamic from 'next/dynamic';
import { Box, Text, theme } from '@chakra-ui/react';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      '2021-06-27T00:00:00.00Z',
      '2021-06-28T00:00:00.00Z',
      '2021-06-29T00:00:00.00Z',
      '2021-06-30T00:00:00.00Z',
      '2021-07-01T00:00:00.00Z',
      '2021-07-02T00:00:00.00Z',
      '2021-07-03T00:00:00.00Z',
    ],
  },
  fill: {
    opacity: 0.3,
    type: 'gradient',
    gradient: {
      shade: 'dark',
      opacityFrom: 0.7,
      opacityTo: 0.3,
    },
  },
};

const series = [{ name: 'series1', data: [31, 61, 18, 68, 100, 160, 299] }];

interface GraphicProps {
  title: string;
  type: string;
}

export default function Graphic({ title, type }: GraphicProps): JSX.Element {
  return (
    <Box p={['6', '8']} bg="gray.800" borderRadius={8} pb="4">
      <Text fontSize="lg">{title}</Text>
      <Chart options={options} series={series} type={type} height={160} />
    </Box>
  );
}
