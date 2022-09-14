/******
个人所用，暂无教程

******/
async function getInfo() {
  let result = await $http.get({url: "https://m.client.10010.com//mobileserviceimportant/home/queryUserInfoSeven",header: {"User-Agent": "ChinaUnicom.x CFNetwork iOS/16.0 unicom{version:iphone_c@9.0400}","Cookie": $cache.get('CUcookie')}})
  return result
}
let data = await getInfo()
console.info(data)
let fee = data.data.data.dataList[1].number
let cellular = data.data.data.dataList[0].number
let call = data.data.data.dataList[2].number
$widget.setTimeline({
  entries: [
    {
      date: new Date(),
      info: {}
    }
  ],
  policy: {
    atEnd: true
  },
  render: ctx => {
    return {
      type: "vstack",
      props: {
        alignment: $widget.horizontalAlignment.leading,
        spacing: 8,
        frame: {
          maxWidth: Infinity,
          maxHeight: Infinity,
          alignment: $widget.alignment.leading
        }
      },
      views: [
        {
          type: "text",
          props: {
            text: "💴: " + fee,
            font: $font("bold", 13)
          }
        },
        {
          type: "text",
          props: {
            text: "📶: " + cellular + "  📞: " + call,
            font: $font("bold", 13)
          }
        }
      ]
    }
  }
});