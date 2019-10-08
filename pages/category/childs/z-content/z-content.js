// pages/category/childs/z-content/z-content.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    subcategories: {
      type: Array,
      value:[]
    },
    categoryDetail: {
      type: Object,
      value:{}
    }   
  },

  /**
   * 组件的初始数据
   */
  data: {
    titles:["流行","综合","销量"],
    currentType:'pop',
    topPosition:0,
    showBackTop:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tabClick(e){
      const index = e.detail.index;
      let current = "";
      switch(index){
        case 0:
          current = 'pop';
          break
        case 1:
          current = "new";
          break
        case 2:
          current = "sell";
          break
      }
      this.setData({
        currentType:current
      })
    },
    scrollPosition(e){
      const position = e.detail.scrollTop;
      this.setData({
        showBackTop: position > 1000
      })
    },
    onBackTop(){
      this.setData({
        topPosition:0
      })
    }
  }
})
