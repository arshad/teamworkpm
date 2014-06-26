TeamworkPM
===
A node wrapper for the TeamworkPM API.

### Installation

Create a file keys.json and add your keys as follows:

    {
        "company": "COMPANY",
        "token": "TOKEN"
    }

### Usage

    app.getTasklist(TASK_ID, function(error, response, body) {
        console.log(body);
    });
