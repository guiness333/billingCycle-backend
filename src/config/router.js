const express = require('express');
const auth = require('./auth');

module.exports = function (server) {
    // Definir ULR base para todas as rotas
    /*const router = express.Router();
    server.use('/api', router);

    //Rotas de ciclo de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(router, '/billingCycles');*/

    /**
     * Rotas protegidas.
     */
    const protectedApi = express.Router();
    server.use('/api', protectedApi);
    protectedApi.use(auth);
    const BillingCycle = require('../api/billingCycle/billingCycleService');
    BillingCycle.register(protectedApi, '/billingCycles');


    /**
    * Rotas Abertas
    */
    const openApi = express.Router();
    server.use('/oapi', openApi);

    const AuthService = require('../api/user/authService');
    openApi.post('/login', AuthService.login);
    openApi.post('/signup', AuthService.signup);
    openApi.post('/validateToken', AuthService.validateToken);
}