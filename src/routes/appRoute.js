'use strict';

const Joi = require('joi'),
    appHandler = require('../handlers/appHandler');

module.exports = function (server) {
    // read
    server.route({
        method: 'get',
        path: '/v1/feeds',
        config: {
            handler: appHandler.getFeeds,
            description: 'GET all available feeds',
            notes: 'Returns a list of feeds',
            tags: ['api'],
            validate: {
                //No input to validat 
            }
        }
    });
    //read
    server.route({
        method: 'get',
        path: '/v1/feeds/{feedId}',
        config: {
            handler: appHandler.getFeed,
            description: 'GET feed for given id',
            notes: 'Returns a feed',
            tags: ['api'],
            validate: {
                params: {
                    feedId: Joi.string()
                }
            }
        }
    });
    //write 
    server.route({
        method: 'post',
        path: '/v1/feed',
        config: {
            handler: appHandler.createFeed,
            description: 'Create a new feed',
            notes: 'Returns a newly created feed',
            tags: ['api'],
            validate: {
                payload: Joi.object({
                    feedId: Joi.string(),
                    feedDesc: Joi.string()
                }),
            }
        }
    });

    server.route({
        method:'post',
        path:'/client/reg',
        config:{
            handler:appHandler.userReg
        }
    })
    server.route({
        method:'post',
        path:'/userExsisted',
        config:{
            handler:appHandler.userExsisted
        }
    })
    server.route({
        method:'post',
        path:'/client/login',
        config:{
            handler:appHandler.userExsisted
        }
    })
    server.route({
        method:'post',
        path:'/order/find',
        config:{
            handler:appHandler.queryOrderList
        }
    })
    server.route({
        method:'post',
        path:'/queryClientList',
        config:{
            handler:appHandler.queryClientList
        }
    })
    server.route({
        method:'post',
        path:'/saveOrderBase',
        config:{
            handler:appHandler.saveOrderBase
        }
    })
    server.route({
        method:'post',
        path:'/getSizeBase',
        config:{
            handler:appHandler.getSizeBase
        }
    })
    server.route({
        method:'post',
        path:'/saveOrderSizes',
        config:{
            handler:appHandler.saveOrderSizes
        }
    })
    server.route({
        method:'post',
        path:'/order/add',
        config:{
            handler:appHandler.orderAdd
        }
    })
    server.route({
        method:'post',
        path:'/order/basic/saves',
        config:{
            handler:appHandler.orderAdd
        }
    })
    server.route({
        method:'post',
        path:'/order/size/save',
        config:{
            handler:appHandler.orderAdd
        }
    })
    server.route({
        method:'post',
        path:'/comm/upload',
        config:{
            handler:appHandler.upload
        }
    })
    server.route({
        method:'post',
        path:'/order/img/save',
        config:{
            handler:appHandler.saveImg
        }
    })
    server.route({
        method:'post',
        path:'/order/colth/save',
        config:{
            handler:appHandler.saveImg
        }
    })
    server.route({
        method:'post',
        path:'/order/submaterial/save',
        config:{
            handler:appHandler.saveImg
        }
    })
}