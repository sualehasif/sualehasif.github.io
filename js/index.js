axios.get('https://storage.googleapis.com/static-covid/static/data-main-v4.json')
    .then(function (res) {
        var pakistanData = res && res.data && res.data.regions && res.data.regions.PK;
        var estimatedCases = pakistanData && pakistanData.CurrentEstimate;
        if (estimatedCases) {
            document.getElementById('estimated-infections-num').innerText = estimatedCases.toLocaleString('en-pk');
            if (res.data.created){
                document.getElementById('estimated-infections-date').innerText = new Date(res.data.created).toLocaleString('en-PK',{year: 'numeric', month: '2-digit', day: '2-digit'});
            }
        }
    })
    .catch(function () {
        console.error('Error fetching data from epidemicforecasting.org');
    });

axios.get('files/gov_data.json')
    .then(function (res) {
        var pakistanData = res && res.data;

        for (var t of ["cases", "deaths", "recovered"]){
            if (pakistanData[t]["total"]){
                document.getElementById('confirmed-'+t+'-num').innerText = pakistanData[t]["total"].toLocaleString('en-pk');
            }
        }

        for (var p of ["sindh", "punjab", "kp", "balochistan"]){
            if (pakistanData["cases"][p]){
                document.getElementById('confirmed-'+p).innerText = pakistanData["cases"][p].toLocaleString('en-pk');
            }
        }

        if (res.data.lastupdated){
            document.getElementById('confirmed-infections-date').innerText = new Date(res.data.lastupdated).toLocaleString('en-PK',{year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute:'2-digit'});
        }
    })
    .catch(function () {
        console.error('Error fetching province data');
    });