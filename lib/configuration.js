/**
 * CirklePayLib
 *
 * This file is a Copyright of CirklePay.
 */

'use strict';

const servers = require('./Servers');
const environments = require('./Environments');
const apiHelper = require('./APIHelper');

const environmentsMap = [];

environmentsMap[environments.PRODUCTION] = [];
environmentsMap[environments.DEVELOPMENT] = [];

environmentsMap[environments.PRODUCTION][servers.MDEFAULT] =
    'https://livepg.cirklepay.com/v1/process';
environmentsMap[environments.DEVELOPMENT][servers.MDEFAULT] =
    'https://stagepg.cirklepay.com/v1/process';

var Configuration = {
    /**
     * Merchant's Key
     * @type {string}
     */
    mKey: '',

    /**
     * Merchant's Salt
     * @type {string}
     */
    salt: '',

    /**
     * Redirect URL
     * @type {string}
     */
    redirectUrl: '',


    /**
     * Current API environment
     * @type {string}
     */
    currentEnvironment: environments.PRODUCTION,

    /**
     * Get base URI for a server in the current API environment
     * @param  {string|null} server Server name
     * @return {string}             Base URI for server
     */
    configure(mKey,salt,redirectUrl){
        this.mKey=mKey;
        this.salt=salt;
        this.redirectUrl=redirectUrl;
    },
    getBaseUri(server) {
        const url = environmentsMap[this.currentEnvironment][server || servers.MDEFAULT];
        const urlParams = {
            mKey: this.mKey,
            salt: this.salt,
        };
        return apiHelper.appendUrlWithTemplateParameters(url, urlParams);
    },
};

module.exports = Configuration;
