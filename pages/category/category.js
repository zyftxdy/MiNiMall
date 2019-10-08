<<<<<<< HEAD
import { getCategory, getSubcategory, getCategoryDetail } from '../../service/category.js'
import {
  POP,
  SELL,
  NEW
} from '../../utils/const.js'
// pages/category/category.js
=======
<<<<<<< HEAD:pages/profile/profile.js
// pages/profile/profile.js
=======
// pages/category/category.js
>>>>>>> f8e71013eac84f098d47d6f4f34802b8396365b5:pages/category/category.js
>>>>>>> f8e71013eac84f098d47d6f4f34802b8396365b5
Page({

  /**
   * 页面的初始数据
   */
  data: {
<<<<<<< HEAD
    titles:[],
    categoryData:{},
    currentIndex:0
=======

>>>>>>> f8e71013eac84f098d47d6f4f34802b8396365b5
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
<<<<<<< HEAD
    this._getCategory()
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  //-------------页面数据获取-------------
  //请求分类数据
  _getCategory(){
    getCategory().then(res => {
      // 1.获取categories
      const categories = res.data.category.list;
      // 2.初始化每个类别的子数据
      const categoryData = {}
      for (let i = 0; i < categories.length; i++){
        categoryData[i]={
          subcategories: [],
          categoryDetail: {
            [POP]:[],
            [NEW]:[],
            [SELL]:[]
          }
        }
      }
      this.setData({
        titles: res.data.category.list,
        categoryData: categoryData
      })
      this._getSubcategory(0);
      console.log(this.data.categoryData)
    })
  },
  //请求分类详情是数据
  _getSubcategory(currentIndex){
    const maitKey = this.data.titles[currentIndex].maitKey;
    getSubcategory(maitKey).then(res => {
      const tempCategoryData = this.data.categoryData;
      tempCategoryData[currentIndex].subcategories = res.data.list
      this.setData({
        categoryData: tempCategoryData
      })
      this._getCategoryDetail(currentIndex,POP);
      this._getCategoryDetail(currentIndex, NEW);
      this._getCategoryDetail(currentIndex, SELL);
    })
  },
  //请求分类详情类别数据
  _getCategoryDetail(currentIndex,type){
    const miniWallKey = this.data.titles[currentIndex].miniWallkey;
    getCategoryDetail(miniWallKey,type).then( res => {
      const tempCategoryData = this.data.categoryData;
      tempCategoryData[currentIndex].categoryDetail[type] = res;
      const categoryData = {...tempCategoryData}
      this.setData({
        categoryData: categoryData
      })
    })
  },
  //---------切换分类---------
  handleMenuClick(e){
    const currentIndex = e.detail.currentIndex;
    this.setData({
      currentIndex
    })

    this._getSubcategory(currentIndex);
=======

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

>>>>>>> f8e71013eac84f098d47d6f4f34802b8396365b5
  }
})