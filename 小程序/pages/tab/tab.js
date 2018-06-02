// pages/tab/tab.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tablist:[],
    tabchild:[],
    box:[],
    isseat: false,
    isshow :false,
    showtext:'hahahha',
    modalHidden: true,
    haha:0,
    ismore:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var res= {
        "extend": {
          "dayTimeAllow": [
            {
              "day": "2018-05-18",
              "times": [
                {
                  "time": "11:00",
                  "allow": 1
                },
                {
                  "time": "12:00",
                  "allow": 0
                },
                {
                  "time": "13:00",
                  "allow": 1
                },
                {
                  "time": "14:00",
                  "allow": 0
                },
                {
                  "time": "15:00",
                  "allow": 0
                },
                {
                  "time": "16:00",
                  "allow": 0
                }
              ]
            },
            {
              "day": "2018-05-25",
              "times": [
                {
                  "time": "11:00",
                  "allow": 0
                },
                {
                  "time": "11:00",
                  "allow": 1
                },
                {
                  "time": "11:00",
                  "allow": 1
                },
                {
                  "time": "11:00",
                  "allow": 1
                },
                {
                  "time": "11:00",
                  "allow": 1
                },
                {
                  "time": "11:00",
                  "allow": 1
                }
              ]
            }
          ]
        },
      }
      const that = this;
      that.setData({ tablist: res.extend.dayTimeAllow })
      that.data.tablist.forEach(function (k) {
        that.setData({ tabchild: that.data.tablist[0].times })
      })
      console.log(this.data.tabchild)
  },
  bindViewTap: function () {
    this.setData({
      modalHidden: !this.data.modalHidden
    })

  },
  //确定按钮点击事件  
  modalBindaconfirm: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
    })
  },
  //取消按钮点击事件  
  modalBindcancel: function () {
    this.setData({
      modalHidden: !this.data.modalHidden,
    })
  },  
  listclick: function(i){
    this.setData({ tabchild: i.target.dataset.list.times,box: i.target.dataset.list,haha:i.target.dataset.id})
    var newtab = this.data.tablist
    i.target.dataset.list.times.forEach(function (h, index) {
      h.makeno = false;
    })
    console.log(i.target.dataset.list)
  },
  childclick:function(l){
    const that = this;
    console.log(l)
    const allow = l.target.dataset.item.allow;
    var index = l.target.dataset.index;
    
    if (allow == 1){
      console.log(l.target.dataset.item.allow)
      that.setData({ modalHidden: false })
    }
    else{
      var ismore = this.data.tabchild;
      ismore[index].allow = 1;
      that.setData({ tabchild: ismore })
      
    }
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
  
  }
})