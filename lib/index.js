/**
  * @module CirklePayLib
  *
  * The easiest way to accept, process and disburse digital payments for businesses.
  */

'use strict';

const Configuration = require('./configuration');
const Environments = require('./Environments');
const Logger = require('./Logger');
const MainController = require('./Controllers/MainController');
const APIException = require('./Exceptions/APIException');

const initializer = {
    // functional components of CirklePayLib
    Configuration,
    Environments,
    Logger,
    // controllers of CirklePayLib
    MainController,
    // models of CirklePayLib
    // exceptions of CirklePayLib
    APIException,
};

module.exports = initializer;
