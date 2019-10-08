// pages/detail/detail.js
import { getDetail, getRecommends, GoodsBaseInfo,ShopInfo,ParamInfo, } from '../../service/detail.js'
var time = require('../../utils/utils.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    topImages:[],
    baseInfo:{},
    shopInfo:{},
    detailInfo:{},
    paramInfo:{},
    commentInfo:{},
    recommends:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.iid
    })
    this._getDetail();
    this._getRecommeds()
  },
  _getDetail(){
    const id = this.data.id;
    getDetail(id).then(res => {
      //console.log(res)
      const data = res.result;
      const topImages = data.itemInfo.topImages;
      //商品详细数据
      const baseInfo = new GoodsBaseInfo(data.itemInfo, data.columns, data.shopInfo.services);
      //创建ShopInfo对象
      const shopInfo = new ShopInfo(data.shopInfo);
      //获取detailInfo信息
      const detailInfo = data.detailInfo;
      //创建ParamInfo对象
      const paramInfo = new ParamInfo(data.itemParams.info, data.itemParams.rule);
      //创建评论对象
      let commentInfo = {}
      if (data.rate && data.rate.cRate > 0) {
        commentInfo = data.rate.list[0]
        data.rate.list[0].created = time.formatTime(data.rate.list[0].created)
      }
      this.setData({
        topImages:topImages,
        baseInfo:baseInfo,
        shopInfo:shopInfo,
        detailInfo:detailInfo,
        paramInfo:paramInfo,
        commentInfo:commentInfo
      })
    })
  },
  _getRecommeds(){
    getRecommends().then(res => {
      this.setData({
        recommends:res.data.list
      })
    })
  },
  addCart(){
    // 1.获取商品对象
    const obj = {}
    obj.iid = this.data.id;
    obj.imageURL = this.data.topImages[0];
    obj.title = this.data.baseInfo.title;
    obj.desc = this.data.baseInfo.desc;
    obj.price = this.data.baseInfo.realPrice;

    // 2.加入到购物车列表
    app.addToCart(obj)

    // 3.加入成功提示
    wx.showToast({
      title: '加入购物车成功',
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})