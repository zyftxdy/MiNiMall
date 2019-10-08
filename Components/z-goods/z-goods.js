// Components/z-goods/z-goods.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsList:{
      type:Object,
      value:{}
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    itemClick(e) {
      // 1.获取iid
      const iid = e.currentTarget.dataset.id;
      // 2.跳转到对应的路径
      wx.navigateTo({
        url: '/pages/detail/detail?iid=' + iid,
      })
    }
  }
})
