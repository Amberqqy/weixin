Page({

  /**
   * 页面的初始数据
   */
  data: {
    houselist:{},
    tablist:{},
    isall: true,
    make:null,
    tab_id:0,
    testshow:false,
    tabtal: ["四室", "三室", "二室"],
    all: '全文'
  },
  allclick: function () {
    const isshow = this.data.isall;
    // if(!isshow == true){
    //   this.setData({ all: '全文'});
    // }else{
    //   this.setData({ all: '收起' });
    // }
    this.setData({ isall: !isshow })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    that.lala();
    that.setData({make:options.id})
    wx.request({
      url: 'http://47.93.220.17/Home/Bk/xinfang',
      data: '',
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function(res) {
        that.setData({houselist:res.data})
        for (var i = 0; i < res.data.data.comments.comment.length; i++){
          console.log(res.data.data.comments.comment[i].user_comment.length)
          if (res.data.data.comments.comment[i].user_comment.length <= 55) {
            that.setData({ testshow: false})
          }else{
            that.setData({ testshow: true })
            
          }
        }
      },
      fail: function(res) {},
      complete: function(res) {},
    })
  },
  lala:function(){
    const that = this;
    wx.request({
      url: 'http://47.93.220.17/Home/Bk/getListsByType',
      data: {
        'type_id': 1,
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res.data);
        that.setData({ tablist: res.data })
      },
    })
  },
  tablist:function(event){
    console.log(event)
    console.log()
    const that = this;
    var tab_id = event.target.id;
    wx.request({
      url: 'http://47.93.220.17/Home/Bk/getListsByType',
      data: {
        'type_id': tab_id,
      },
      header: {},
      method: 'GET',
      dataType: 'json',
      responseType: 'text',
      success: function (res) {
        console.log(res.data);
        that.setData({tablist: res.data })
      },
    })
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