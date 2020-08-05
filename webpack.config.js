const webpack = require("webpack");

const path=require('path');

module.exports={
    name : 'word-rlay-setting',
    mode : 'development', //실서비스 : production
    devtool: 'eval',
    
    entry: {
        
    }, //입력
    output: {
        path : path.join(__dirname,'dist'),
        
    }, //출력
};
