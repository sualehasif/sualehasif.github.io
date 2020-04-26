axios.get('https://covidapi.info/api/v1/country/PAK/latest')
    .then(function (res) {
        var result = res && res.data && res.data.result;
        var date = result && Object.keys(result)[0];     // result has only 1 key, the date of the last update
        var cases = result && result[date];

        if (date) {
            var dateParts = date.split('-');
            if (dateParts.length === 3) {
                document.getElementById('estimated-infections-date').innerText = `${dateParts[1]}/${dateParts[2]}/${dateParts[0]}`;
            }
        }

        if (cases.confirmed) {
            document.getElementById('confirmed-cases-num').innerText = cases.confirmed;
        }

        if (cases.deaths) {
            document.getElementById('confirmed-deaths-num').innerText = cases.deaths;
        }

        if (cases.recovered) {
            document.getElementById('confirmed-recovered-num').innerText = cases.recovered;
        }
    })
    .catch(function () {
        console.error('Error fetching data from covidapi.info');
    });

axios.get('https://storage.googleapis.com/static-covid/static/data-main-v4.json')
    .then(function (res) {
        var pakistanData = res && res.data && res.data.regions && res.data.regions.PK;
        var estimatedCases = pakistanData && pakistanData.CurrentEstimate;

        if (estimatedCases) {
            document.getElementById('estimated-infections-num').innerText = estimatedCases;
        }
    })
    .catch(function () {
        console.error('Error fetching data from epidemicforecasting.org');
    });