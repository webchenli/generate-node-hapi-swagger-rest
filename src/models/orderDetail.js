const orderDetail ={
    "result":0,
    'order_id':'123445',
    'factory':{'id':'1',name:'112'},
    'base':{
        'state':1,
        contract_code:'9999',
        sku_code:'123',
        num:'88',
        price:'100.0',
        order_ts:"2017-10-01",
        order_type:2,
        deliver_ts:'2017-10-09',
        pay_ts:'2019-10-20',
        client:{
            id:1,
            name:'chenli'
        }


    },
    size:{
        state:1,
        sizes:[{size:'ss',num:13},{size:'xl',num:53}]
    },
    img:{
        state:1,
        imgs:[{name:123,url:'http://p0.so.qhimgs1.com/bdr/326__/t01a02f2cb5e0bdddcc.jpg'},{name:'萨摩耶',url:'http://p4.so.qhmsg.com/bdr/326__/t01ce7aebacda2ce019.jpg'}]
    },
    cloth:{
        state:1,
        coloths:[
            {id:1,money:'12',sub_ts:'2017-10-02',url:'http://p0.so.qhimgs1.com/bdr/326__/t01a02f2cb5e0bdddcc.jpg'},
            {id:2,money:'78',sub_ts:'2017-12-02',url:'http://p0.so.qhimgs1.com/bdr/326__/t01a02f2cb5e0bdddcc.jpg'},
        ]
    },
    submaterial:{
        state:1,
        submaterials:[
            {id:1,money:'12',sub_ts:'2017-10-02',url:'http://p1.so.qhmsg.com/bdr/326__/t01d429423ec1142676.jpg'},
            {id:2,money:'78',sub_ts:'2017-12-02',url:'http://p0.so.qhimgs1.com/bdr/326__/t01a02f2cb5e0bdddcc.jpg'},
        ]
    },
    tech:{
        id:1,
        num:1,
        url:'http://p0.so.qhimgs1.com/bdr/326__/t01a02f2cb5e0bdddcc.jpg',
        finish_ts:'2018-01-02'
    },
    selfworks:{
        state:1,
        id:1,
        money:'222',
        num:1
    },
    outwork:{
        state:1,
        outworks:[
            {id:1,outfactory:{id:1,name:'外发工厂'},outitem:{id:3,name:'外发项目'},money:'23.56',num:85},
            {id:1,outfactory:{id:1,name:'外发工厂2'},outitem:{id:3,name:'外发项目3'},money:'25',num:66},
        ]
    },
    outtech:{
        state:1,
        outtechs:[
            {id:1,outfactory:{id:1,name:'外发工厂'},outitem:{id:3,name:'外发项目'},money:'23.56',num:85},
            {id:1,outfactory:{id:1,name:'外发工厂2'},outitem:{id:3,name:'外发项目3'},money:'25',num:66},
        ]
    },
    deliver:{
        state:1,
        delivers:[
            {id:2,num:2,deliver_ts:'2017-10-05'},
            {id:2,num:5,deliver_ts:'2017-10-09'}
        ]
    }

}
module.exports = orderDetail;