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
        path:'/user/login',
        config:{
            handler:appHandler.loginBox
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
        path:'/order/size/default',
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
    server.route({
        method:'post',
        path:'/order/selfwork/save',
        config:{
            handler:appHandler.common
        }
    })
    server.route({
        method:'post',
        path:'/order/outtech/save',
        config:{
            handler:appHandler.common
        }
    })

    server.route({
        method:'post',
        path:'/worker/add',
        config:{
            handler:appHandler.common
        }
    })

    server.route({
        method:'post',
        path:'/work/add',
        config:{
            handler:appHandler.common
        }
    })
    server.route({
        method:'post',
        path:'/salary/add',
        config:{
            handler:appHandler.common
        }
    })
    server.route({
        method:'post',
        path:'/income/add',
        config:{
            handler:appHandler.common
        }
    })
    server.route({
        method:'post',
        path:'/income_client/add',
        config:{
            handler:appHandler.common
        }
    })
    server.route({
        method:'post',
        path:'/order/client/all',
        config:{
            handler:appHandler.queryClientList
        }
    })
    server.route({
        method:'post',
        path:'/outfactory/find',
        config:{
            handler:appHandler.outfactory
        }
    })
    server.route({
        method:'post',
        path:'/outtech/find',
        config:{
            handler:appHandler.outtech
        }
    })
    server.route({
        method:'post',
        path:'/outfactory/item/find',
        config:{
            handler:appHandler.outfactoryItem
        }
    })
    server.route({
        method:'post',
        path:'/worker/all',
        config:{
            handler:appHandler.workerAll
        }
    })
    server.route({
        method:'post',
        path:'/work/all',
        config:{
            handler:appHandler.workAll
        }
    })
    server.route({
        method:'post',
        path:'/income/find',
        config:{
            handler:appHandler.incomeFind
        }
    })
    server.route({
        method:'post',
        path:'/order/detail',
        config:{
            handler:appHandler.orderDetail
        }
    })



}