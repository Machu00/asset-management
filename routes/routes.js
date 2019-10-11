const Asset = require('../controllers/assetcont');

module.exports = (app) => {
app.post('/asset',Asset.createAsset);
app.put('/asset/:name',Asset.updateAsset);
app.get('/assets',Asset.getAssets);
app.get('/asset/:name',Asset.getAsset);
app.delete('/asset/:name',Asset.deleteAsset);
}