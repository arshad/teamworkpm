var keys = require('./keys')
,   company = keys.company
,   token = keys.token
,   TeamworkPM = require('./lib/teamworkpm')
;

var app = new TeamworkPM(company, token);
app.getProject(81834);
