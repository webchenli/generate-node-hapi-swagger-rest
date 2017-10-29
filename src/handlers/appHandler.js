'use strict';

const log = require('../config/logger'),
    Regist = require('../models/userReg'),
    QueryOrderList = require('../models/queryOrderList'),
    QueryClientList = require('../models/queryClientList'),
    SaveOrderBase = require('../models/saveOrderBase'),
    GetSizeBase = require('../models/getSizeBase'),
    OrderAdd = require('../models/orderAdd'),
    SaveOrderSizes = require('../models/saveOrderSizes'),
    Feed = require('../models/feed');

//exports
module.exports = {

    getFeeds: function (request, reply) {
        const resultFeed = {};
        resultFeed.data = [];
        for (var i = 0; i < 5; i++) {
            const feed = new Feed;
            feed.feedId = "ABC" + Math.round(Math.random() * 1000);
            feed.feedDesc = "this is feed description for " + feed.feedId;
            resultFeed.data.push(feed);
        }
        log.debug({
            resultFeed: resultFeed
        }, 'feeds result');
        reply(resultFeed);
    },
    getFeed: function (request, reply) {
        const feedId = request.params.feedId;
        const feed = new Feed;
        feed.feedId = feedId;
        feed.feedDesc = "this is feed description";
        reply(feed);
    },
    createFeed: function (request, reply) {
            const reqData = request.payload;
            const feed = new Feed;
            feed.feedId = reqData.feedId;
            feed.feedDesc = reqData.feedDesc;
            reply(feed);
        }, //end of handler methods

    userReg:function(request, reply){
        const regist  =  Regist ;
        reply(regist)

    },
    userExsisted:function(request,reply){
        const regist  =  Regist ;
        reply(regist)
    },
    queryOrderList:function(request,reply){
        const queryOrder = QueryOrderList
        reply(queryOrder)
    },
    queryClientList:function(request,reply){
        const queryClient = QueryClientList;
        reply(queryClient)
    },
    saveOrderBase:function(request,reply){
        const saveOrder = SaveOrderBase;
        reply(saveOrder)
    },
    getSizeBase:function(request,reply){
        const getSizeBase = GetSizeBase;
        reply(getSizeBase)
    },
    saveOrderSizes:function(request,reply){
        const getSizeBase = SaveOrderSizes;
        reply(getSizeBase)
    },
    orderAdd:function(request,reply){
        const add = OrderAdd ;
        reply(add)
    }


}; //end of module exports