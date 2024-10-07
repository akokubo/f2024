/* global Chart */

const questions = ['q01', 'q02', 'q03', 'q04', 'q05', 'q06', 'q07', 'q08', 'q09'];

let answers = [];
for (let i = 0; i < questions.length; i += 1) {
    answers[i] = parseInt(sessionStorage.getItem(questions[i]));
}

//console.log(answers);

// ベクトル y を計算する関数
function calculateY(A, x, b) {
  let y = [];

  for (let i = 0; i < A.length; i++) {
    let sum = 0;
    for (let j = 0; j < x.length; j++) {
      sum += A[i][j] * x[j];
    }
    y.push(sum + b[i]);
  }

  return y;
}

//console.log('scores');
//console.log(scores);

// b の部分を取得 (b1, b2, b3, b4)
let b = scores.map(row => row[0]);
//console.log('b');
//console.log(b);

//console.log('answers');
//console.log(answers);

// 残りの行を取得
let A = scores.map(row => row.slice(1));
//console.log('A');
//console.log(A);

const results = calculateY(A, answers, b);
//console.log('results');
//console.log(results);

// シグモイド関数を計算する関数
function sigmoid(x) {
    return 100 - Math.round(1000 / (1 + Math.exp(-x))) / 10;
}

// xの各要素にシグモイド関数を適用してyを求める
let percentages = results.map(sigmoid);

//console.log(percentages);

// 詐欺の種類を表すキー
const frauds = ['オレオレ詐欺', '架空請求詐欺', '還付金等詐欺', '融資保証金詐欺'];

// 配列aとキーを組み合わせてオブジェクトbを作成
let resistans = {};
for (let i = 0; i < percentages.length; i++) {
  resistans[frauds[i]] = parseInt(percentages[i]);
}

//console.log(resistans);

let evalEle;
let valuenow;
let progressBarEle;

valuenow = resistans['オレオレ詐欺'];
evalEle = document.getElementById('evaluation-1');
progressBarEle = document.getElementById('progress-value-1');
progressBarEle.style.width = `${valuenow}%`;
progressBarEle.setAttribute('valuenow', valuenow);
if (valuenow < 20) {
  progressBarEle.classList.add('bg-danger');
  evalEle.innerHTML = '抵抗力が低いです ' + valuenow;
} else if (20 <= valuenow && valuenow < 40) {
  progressBarEle.classList.add('bg-warning');
  evalEle.innerHTML = '抵抗力が低めです ' + valuenow;
} else if (40 <= valuenow && valuenow < 60) {
  progressBarEle.classList.add('bg-info');
  evalEle.innerHTML = '抵抗力は普通です ' + valuenow;
} else if (60 <= valuenow && valuenow < 80) {
  progressBarEle.classList.add('bg-success');
  evalEle.innerHTML = '抵抗力が高めです ' + valuenow;
} else {
  evalEle.innerHTML = '抵抗力が高いです ' + valuenow;
}

valuenow = resistans['架空請求詐欺'];
evalEle = document.getElementById('evaluation-2');
progressBarEle = document.getElementById('progress-value-2');
progressBarEle.style.width = `${valuenow}%`;
progressBarEle.setAttribute('valuenow', valuenow);
if (valuenow < 20) {
  progressBarEle.classList.add('bg-danger');
  evalEle.innerHTML = '抵抗力が低いです ' + valuenow;
} else if (20 <= valuenow && valuenow < 40) {
  progressBarEle.classList.add('bg-warning');
  evalEle.innerHTML = '抵抗力が低めです ' + valuenow;
} else if (40 <= valuenow && valuenow < 60) {
  progressBarEle.classList.add('bg-info');
  evalEle.innerHTML = '抵抗力は普通です ' + valuenow;
} else if (60 <= valuenow && valuenow < 80) {
  progressBarEle.classList.add('bg-success');
  evalEle.innerHTML = '抵抗力が高めです ' + valuenow;
} else {
  evalEle.innerHTML = '抵抗力が高いです ' + valuenow;
}

valuenow = resistans['還付金等詐欺'];
evalEle = document.getElementById('evaluation-3');
progressBarEle = document.getElementById('progress-value-3');
progressBarEle.style.width = `${valuenow}%`;
progressBarEle.setAttribute('valuenow', valuenow);
if (valuenow < 20) {
  progressBarEle.classList.add('bg-danger');
  evalEle.innerHTML = '抵抗力が低いです ' + valuenow;
} else if (20 <= valuenow && valuenow < 40) {
  progressBarEle.classList.add('bg-warning');
  evalEle.innerHTML = '抵抗力が低めです ' + valuenow;
} else if (40 <= valuenow && valuenow < 60) {
  progressBarEle.classList.add('bg-info');
  evalEle.innerHTML = '抵抗力は普通です ' + valuenow;
} else if (60 <= valuenow && valuenow < 80) {
  progressBarEle.classList.add('bg-success');
  evalEle.innerHTML = '抵抗力が高めです ' + valuenow;
} else {
  evalEle.innerHTML = '抵抗力が高いです ' + valuenow;
}

valuenow = resistans['融資保証金詐欺'];
evalEle = document.getElementById('evaluation-4');
progressBarEle = document.getElementById('progress-value-4');
progressBarEle.style.width = `${valuenow}%`;
progressBarEle.setAttribute('valuenow', valuenow);
if (valuenow < 20) {
  progressBarEle.classList.add('bg-danger');
  evalEle.innerHTML = '抵抗力が低いです ' + valuenow;
} else if (20 <= valuenow && valuenow < 40) {
  progressBarEle.classList.add('bg-warning');
  evalEle.innerHTML = '抵抗力が低めです ' + valuenow;
} else if (40 <= valuenow && valuenow < 60) {
  progressBarEle.classList.add('bg-info');
  evalEle.innerHTML = '抵抗力は普通です ' + valuenow;
} else if (60 <= valuenow && valuenow < 80) {
  progressBarEle.classList.add('bg-success');
  evalEle.innerHTML = '抵抗力が高めです ' + valuenow;
} else {
  evalEle.innerHTML = '抵抗力が高いです ' + valuenow;
}


const ctx = document.getElementById('resistansChart');
const resistansChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['オレオレ詐欺', '架空請求詐欺', '還付金等詐欺', '融資保証金詐欺'],
    datasets: [
      {
        data: [
          Math.round(resistans['オレオレ詐欺']),
          Math.round(resistans['架空請求詐欺']),
          Math.round(resistans['還付金等詐欺']),
          Math.round(resistans['融資保証金詐欺']),
        ],
        label: '抵抗力',
        backgroundColor: 'rgba(0, 0, 0, 1)',
        borderCapStyle: 'butt',
        borderColor: 'rgba(0, 0, 255, 1)',
        borderWidth: 3,
        fill: false,
        order: 0,
      },
    ],
  },
  options: {
    scales: {
      r: {
        min: 0,
        max: 100,
        backgroundColor: 'white',
        grid: {
          color: 'grey',
        },
        angleLines: {
          color: 'green',
        },
        pointLabels: {
          color: 'black',
        },
      },
    },
  },
});
