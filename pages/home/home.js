// pages/home/home.js
import { getMultiData,getProduct } from '../../service/home.js'
import {
  POP,
  SELL,
  NEW,
  BACK_TOP_POSITION
} from '../../utils/const.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    banners:[],
    recommends:[],
    goods:{
      [POP]:{page:0,list:[]},
      [NEW]:{page:0,list:[]},
      [SELL]:{page:0,list:[]},
    },
    currentType: 'pop',
    titles:["流行","新款","爆款"],
    loadingShow:true,
    showBackTop:false,
    topPosition:0,
    tabControlTop:0,
    isFixed:false
=======
    name:'Hello World'
>>>>>>> f8e71013eac84f098d47d6f4f34802b8396365b5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getData()  
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return{
      title:'购物挖'
    }
  },
  //--------tab-control商品分类--------
  tabClick(event){
    const index = event.detail.index;
    let current = '';
    switch(index){
      case 0:
        current = POP;
        break
      case 1:
        current = NEW;
        break
      case 2:
        current = SELL;
        break
    }
    this.setData({
      currentType:current
    })
    //this.selectComponent('.tab-control').setCurrentIndex(index)
  },
  //-------------上拉加载更多-------------
  scrollPosition(event){
    const position = event.detail.scrollTop;
    this.setData({
      showBackTop: position > BACK_TOP_POSITION
    })
    const flag = position >= this.data.tabControlTop;
    if(flag != this.data.isFixed){
      this.setData({
        isFixed:flag
      })
    }
  },
  onImageLoad(){
    wx.createSelectorQuery().select('#tab-control').boundingClientRect((rect) => {
     //console.log(rect)
      this.setData({
        tabControlTop: rect.top
      })
    }).exec()
  },
  /**onPageScroll(options){
  },**/
  //加载更多
  loadMore(){
    this.setData({
      loadingShow:false
    })
    setTimeout(() => {
      this.setData({
        loadingShow: true
      })
      this._getProductData(this.data.currentType)
    },2000)
  },
  //返回顶部
  onBackTop(){
    this.setData({
      showBackTop: false,
      topPosition: 0,
    })
  },
  //------------------网络请求获取数据---------------------
  // 网络请求相关方法
  _getData() {
    this._getMultiData(); // 获取上面的数据
    this._getProductData(POP);
    this._getProductData(NEW);
    this._getProductData(SELL);
  },
  //------------------网络请求获取数据---------------------
  _getMultiData(){
    getMultiData().then(res => {
      const banners = res.data.banner.list.map(item => {
        return item.image
      });
      const recommends = res.data.recommend.list;

      this.setData({
        banners: banners,
        recommends: recommends
      })
    })
  },
  _getProductData(type) {
    const page = this.data.goods[type].page + 1;
    getProduct(type, page).then(res => {
      const list = res.data.list;
      const goods = this.data.goods;
      goods[type].list.push(...list);
      goods[type].page += 1;

      this.setData({
        goods: goods
      })
    })
  }
})