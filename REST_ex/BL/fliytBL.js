const allData = require("../DL/flyDL");

const printData = async (ICAO) => {
    try{
        const { data } = await allData.getData();
        const checkArrive = data.pilots.filter((elem) => {
          if (elem.flight_plan) {
            return elem.flight_plan.arrival == ICAO;
          }
        });
        return checkArrive;
    }catch{
       throw "something wrong"
    }

};

module.exports = { printData };
