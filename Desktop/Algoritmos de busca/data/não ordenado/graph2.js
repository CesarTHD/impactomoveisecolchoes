const data2 = {
  "sequential": [
    { "n": 10000, "q": 100, "time": 0.015541 },
    { "n": 10000, "q": 1000, "time": 0.128376 },
    { "n": 10000, "q": 10000, "time": 1.109 },
    { "n": 10000, "q": 100000, "time": 11.368 },
  ],
  "optimized_sequential": [
    { "n": 10000, "q": 100, "time": 0.163069 },
    { "n": 10000, "q": 1000, "time": 1.639 },
    { "n": 10000, "q": 10000, "time": 16.362 },
    { "n": 10000, "q": 100000, "time": 164.605 },
  ],
  "binary_search": [
    { "n": 10000, "q": 100, "time": 0.164012 },
    { "n": 10000, "q": 1000, "time": 1.639 },
    { "n": 10000, "q": 10000, "time": 16.276 },
    { "n": 10000, "q": 100000, "time": 162.530 },
  ]
};

const config2 = {
  type: 'line',
  data: {
    labels: data2.sequential.map(item => item.q),
    datasets: [
      {
        label: 'Sequential Search',
        data: data2.sequential.map(item => item.time),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Optimized Sequential Search',
        data: data2.optimized_sequential.map(item => item.time),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
      {
        label: 'Binary Search',
        data: data2.binary_search.map(item => item.time),
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
          stepSize: 20,
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
        text: 'Search Method Performance for n=10^4'
      }
    }
  }
};

const myChart2 = new Chart(
  document.getElementById('graph2'),
  config2
);
