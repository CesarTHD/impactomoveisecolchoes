const data4 = {
  "sequential": [
    { "n": 1000000, "q": 100, "time": 2.387 },
    { "n": 1000000, "q": 1000, "time": 23.894 },
    { "n": 1000000, "q": 10000, "time": 271.664 },
    { "n": 1000000, "q": 100000, "time": 2991.659 }
  ],
  "optimized_sequential": [
    { "n": 1000000, "q": 100, "time": 1.756 },
    { "n": 1000000, "q": 1000, "time": 17.782 },
    { "n": 1000000, "q": 10000, "time": 178.710 },
    { "n": 1000000, "q": 100000, "time": 1922.142 }
  ],
  "binary_search": [
    { "n": 1000000, "q": 100, "time": 1.804 },
    { "n": 1000000, "q": 1000, "time": 18.432 },
    { "n": 1000000, "q": 10000, "time": 181.906 },
    { "n": 1000000, "q": 100000, "time": 2229.831 }
  ]
};

const config4 = {
  type: 'line',
  data: {
    labels: data4.sequential.map(item => item.q),
    datasets: [
      {
        label: 'Sequential Search',
        data: data4.sequential.map(item => item.time),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Optimized Sequential Search',
        data: data4.optimized_sequential.map(item => item.time),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Binary Search',
        data: data4.binary_search.map(item => item.time),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
      }
    ]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Time (s)'
        },
        ticks: {
          stepSize: 100,
        }
      },
      x: {
        title: {
          display: true,
          text: 'Number of Queries (q)'
        }
      }
    },
    plugins: {
      title: {
        display: true,
        text: 'Search Method Performance for n=10^6'
      }
    }
  }
};

const myChart4 = new Chart(
  document.getElementById('graph4'),
  config4
);
