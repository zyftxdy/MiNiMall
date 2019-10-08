// Components/z-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    titles:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick(event){
      const index = event.currentTarget.dataset.index
      this.setData({
        currentIndex: index
      })
      //事件传递父容器
      this.triggerEvent('tabClick',{index},{})
    },
    setCurrentIndex(index) {
      console.log(index)
      this.setData({
        currentIndex: index
      })
    }
  }
})
