var request = require('request');

module.exports = TeamworkPM;

function TeamworkPM(company, token) {
    this.company = company;
    this.token = token;
    this.base64 = new Buffer(token + ":xxx").toString("base64");
}

TeamworkPM.prototype.getProjects = function(callback) {
    var url = 'http://' + this.company + '.teamworkpm.net/projects.json';
    this.call(url, 'GET', function(error, response, body) {
        callback(error, response, body);
    });
};

TeamworkPM.prototype.getProject = function(projectID, callback) {
    var url = 'http://' + this.company + '.teamworkpm.net/projects/' + projectID + '.json';
    this.call(url, 'GET', function(error, response, body) {
        callback(error, response, body);
    });
};

TeamworkPM.prototype.getAllTasksinTasklist = function(tasklistID, callback) {
    var url = 'http://' + this.company + '.teamworkpm.net/tasklists/' + tasklistID + '/tasks.json';
    this.call(url, 'GET', function(error, response, body) {
        callback(error, response, body);
    });
}

TeamworkPM.prototype.getAllTaskListsForProject = function(projectID, callback) {
    var url = 'http://' + this.company + '.teamworkpm.net/projects/' + projectID + '/todo_lists.json';
    this.call(url, 'GET', function(error, response, body) {
        callback(error, response, body);
    });
}

TeamworkPM.prototype.getTask = function(taskID, callback) {
    var url = 'http://' + this.company + '.teamworkpm.net/tasks/' + taskID + '.json';
    this.call(url, 'GET', function(error, response, body) {
        callback(error, response, body);
    });
}

// Makes an api call.
TeamworkPM.prototype.call = function(url, method, callback) {
    var options = {
        url: url,
        method: method,
        headers: {
            'Authorization': 'BASIC ' + this.base64
        }
    };

    request(options, function(error, response, body) {
        callback(error, response, body);
    });
}
