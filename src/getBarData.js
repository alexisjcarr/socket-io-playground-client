function getBarData(data_) {
  const count = {};

  function setBarData(data = data_) {
    switch (true) {
      case data.value <= -90:
        count["[-100, -90]"] += 1;
        break;
      case data.value <= -80:
        count["(-90, -80]"] += 1;
        break;
      case data.value <= -70:
        count["(-80, -70]"] += 1;
        break;
      case data.value <= -60:
        count["(-70, -60]"] += 1;
        break;
      case data.value <= -50:
        count["(-60, -50]"] += 1;
        break;
      case data.value <= -40:
        count["(-50, -40]"] += 1;
        break;
      case data.value <= -30:
        count["(-40, -30]"] += 1;
        break;
      case data.value <= -20:
        count["(-30, -20]"] += 1;
        break;
      case data.value <= -10:
        count["(-20, -10]"] += 1;
        break;
      case data.value <= 0:
        count["(-10, 0]"] += 1;
        break;
      case data.value <= 10:
        count["(0, 10]"] += 1;
        break;
      case data.value <= 20:
        count["(10, 20]"] += 1;
        break;
      case data.value <= 30:
        count["(20, 30]"] += 1;
        break;
      case data.value <= 40:
        count["(30, 40]"] += 1;
        break;
      case data.value <= 50:
        count["(40, 50]"] += 1;
        break;
      case data.value <= 60:
        count["(50, 60]"] += 1;
        break;
      case data.value <= 70:
        count["(60, 70]"] += 1;
        break;
      case data.value <= 80:
        count["(70, 80]"] += 1;
        break;
      case data.value <= 90:
        count["(80, 90]"] += 1;
        break;
      case data.value <= 100:
        count["(90, 100]"] += 1;
        break;
      default:
        break;
    }
  }

  const result = setBarData(data_);
  const barData = [];

  let i;
  for (i in result) {
    barData.push({
      name: Object.keys(result)[i],
      value: Object.values(result)[i]
    });
  }

  return barData;
}

export default getBarData;
