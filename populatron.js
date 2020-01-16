const fs = require("fs");

module.exports = {
  totalPopulation(onFinished) {
    const getTotalPopulation = async () => {
      await fs.readFile("cities.csv", "utf8", (err, data) => {
        if (err) throw err;
        let sum = 0;
        let splitFile = data.split("\n").slice(1);
        for (let line of splitFile) {
          sum += parseInt(line.split(",")[2]);
        }
        onFinished(sum);
      });
    };
    getTotalPopulation();
  },
};
