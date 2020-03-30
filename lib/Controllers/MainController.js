/**
 * CirklePayLib
 *
 * This file is a Copyright of CirklePay.
 */

'use strict';

var crypto = require('crypto');


class MainController {
  
    static getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
      }
    static createTransaction(amount,
        firstName,
        email,
        phone,
        orderInfo,
        _configuration
    ) {
      
        var txnId ="TSTTXNCKLPG" + this.getRandomInt(1111111111,9999999999);
        var mKey = _configuration.mKey;
        var redirectUrl = _configuration.redirectUrl;
        console.log(_configuration);
        var string = mKey + '|' + txnId + '|' +amount + '|'+firstName+ '|' +email+ '|'+ phone + '|'+orderInfo +'|' + redirectUrl+ '|'+ _configuration.salt;
        console.log(string);
        var hash = (crypto.createHash('sha512').update(string).digest('hex')).toLowerCase();
        return new Promise(function(resolve,reject){
            var result={
                url:_configuration.getBaseUri()+'/transaction/',
                txnId:txnId,
                mKey:mKey,
                redirectUrl:redirectUrl,
                hash:hash,
                firstName:firstName,
                email:email,
                phone:phone,
                orderInfo:orderInfo,
                amount:amount
            }
            console.log(result);
            resolve(result);

        });
        
       
        }
}
module.exports = MainController;
