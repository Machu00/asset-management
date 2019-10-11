const catalogue = require('../models/models');

exports.createAsset = (req,res,next) => {
    newasset = new catalogue ({
        name: req.body.name,
        class: req.body.class,
        asset_date: req.body.date ,
        SKU: req.body.SKU,
        description: req.body.description
    })
    newasset.save((err,asset) => {
        if(err)
        res.send(err);

        res.status(200).json({
            message: "Asset saved",
            asset: asset
        });
    })
};

exports.getAssets = (req,res) => {
catalogue.find({},'-_id',(err,assets) => {
    if(assets.length <= 0 ){
        res.json('No data found');
    }
    else{res.status(200).json(assets)}  
})
};

 exports.getAsset = (req,res) => {
    console.log('params',req.params.name);
     catalogue.find({name: {$regex: '.*' +  req.params.name + '.*'}},'-_id',(err,asset) => {
         if(err)
            res.send(err);
            if(asset.length <= 0 ){
                res.json('No data found');
            }
            else{res.status(200).json(asset)}           
       })
    };

 exports.deleteAsset = (req,res) => {
    catalogue.remove({
        name: req.params.name}, (err, asset)=> {
        if (err){res.send(err)}
        else{
            res.json({ message: 'Asset successfully deleted' });
            console.log('Asset',asset);
            console.log('params:',req.params.name);
        }
      });
    };

 exports.updateAsset = (req,res) => {
        catalogue.findOneAndUpdate({name: req.body.name},req.body, {new:true}, (err,asset) => {
            if(err)
            res.send('Error...',err);
            res.status(200).json(asset);
        })

    };