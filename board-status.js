(() => {
  const statusByBoard = {
    '01': ['partial', '部分实现'],
    '02': ['partial', '部分实现'],
    '03': ['history', '局部历史参考'],
    '04': ['history', '局部历史参考'],
    '05': ['partial', '部分实现'],
    '06': ['partial', '部分实现'],
    '07': ['partial', '部分实现'],
    '08': ['partial', '部分实现'],
    '09': ['partial', '部分实现'],
    '10': ['partial', '部分实现'],
    '11': ['partial', '部分实现'],
    '12': ['partial', '部分实现'],
    '13': ['confirm', '含待确认项'],
    '14': ['partial', '部分实现'],
    '15': ['partial', '部分实现'],
    '16': ['partial', '部分实现'],
    '17': ['partial', '部分实现'],
    '18': ['partial', '部分实现'],
    '19': ['partial', '部分实现'],
    '20': ['partial', '部分实现'],
    '21': ['confirm', '待业务确认'],
    '22': ['snapshot', '实施快照'],
    '23': ['snapshot', '实施演进快照']
  };

  for (let board = 24; board <= 38; board += 1) {
    statusByBoard[String(board)] = ['design', '线上融合目标'];
  }

  document.querySelectorAll('figure').forEach((figure) => {
    const number = figure.querySelector('figcaption b')?.textContent?.trim();
    const status = statusByBoard[number];
    const caption = figure.querySelector('figcaption');
    if (!status || !caption || caption.querySelector('.board-state')) return;
    const chip = document.createElement('span');
    chip.className = `status-chip board-state ${status[0]}`;
    chip.textContent = status[1];
    caption.appendChild(chip);
  });
})();
