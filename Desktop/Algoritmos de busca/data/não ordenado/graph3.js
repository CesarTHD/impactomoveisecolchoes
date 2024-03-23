const data3 = {
  "sequential": [
    { "n": 100000, "q": 100, "time": 0.174742 },
    { "n": 100000, "q": 1000, "time": 1.846 },
    { "n": 100000, "q": 10000, "time": 18.552 },
    { "n": 100000, "q": 100000, "time": 187.408 },
  ],
  "optimized_sequential": [
    { "n": 100000, "q": 100, "time": 1.774 },
    { "n": 100000, "q": 1000, "time": 17.791 },
    { "n": 100000, "q": 10000, "time": 178.500 },
    { "n": 100000, "q": 100000, "time": 1791.841 },
  ],
  "binary_search": [
    { "n": 100000, "q": 100, "time": 1.774 },
    { "n": 100000, "q": 1000, "time": 17.756 },
    { "n": 100000, "q": 10000, "time": 177.538 },
    { "n": 100000, "q": 100000, "time": 1783.643 },
  ]
};

const config3 = {
  type: 'line',
  data: {
    labels: data3.sequential.map(item => item.q),
    datasets: [
      {
        label: 'Sequential Search',
        data: data3.sequential.map(item => item.time),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Optimized Sequential Search',
        data: data3.optimized_sequential.map(item => item.time),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Binary Search',
        data: data3.binary_search.map(item => item.time),
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
          stepSize: 400,
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
        text: 'Search Method Performance for n=10^5'
      }
    }
  }
};

const myChart3 = new Chart(
  document.getElementById('graph3'),
  config3
);
