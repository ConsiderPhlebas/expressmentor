var OdysseyController = require('./odyssey.controller');
function setupRoutes(app) {
  app.get('/open-doors', OdysseyController.openDoors);
  app.get('/disconnect-hal', OdysseyController.disconnectHal);
}
module.exports = setupRoutes;