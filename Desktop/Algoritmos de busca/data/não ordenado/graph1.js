const data = {
    "sequential": [
      {"n": 1000, "q": 100, "time": 0.003718},
      {"n": 1000, "q": 1000, "time": 0.012621},
      {"n": 1000, "q": 10000, "time": 0.127457},
      {"n": 1000, "q": 100000, "time": 1.311}
    ],
    "optimized_sequential": [
      {"n": 1000, "q": 100, "time": 0.018772},
      {"n": 1000, "q": 1000, "time": 0.161049},
      {"n": 1000, "q": 10000, "time": 1.608},
      {"n": 1000, "q": 100000, "time": 15.986}
    ],
    "binary_search": [
      {"n": 1000, "q": 100, "time": 0.017796},
      {"n": 1000, "q": 1000, "time": 0.158473},
      {"n": 1000, "q": 10000, "time": 1.601},
      {"n": 1000, "q": 100000, "time": 15.956}
    ]
  };
  
  const config = {
    type: 'line',
    data: {
      labels: data.sequential.map(item => item.q),
      datasets: [
        {
          label: 'Sequential Search',
          data: data.sequential.map(item => item.time),
          borderColor: 'rgb(255, 99, 132)',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
          label: 'Optimized Sequential Search',
          data: data.optimized_sequential.map(item => item.time),
          borderColor: 'rgb(54, 162, 235)',
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
        },
        {
          label: 'Binary Search',
          data: data.binary_search.map(item => item.time),
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
            stepSize: 4,
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
          text: 'Search Method Performance for n=10^3'
        }
      }
    }
  };
  
  const myChart = new Chart(
    document.getElementById('graph1'),
    config
  );
  