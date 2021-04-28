let tmpdata={
	"code":1,
	"msg":"",
	"data":[
		{
			"title":"早班",
			"value":0
		},
		{
			"title":"晚班",
			"value":1
		}
	]
}

module.exports = {
  data: tmpdata       //前一个data是将后一个tmpdata对象数组暴露出去的命名的名字，自己定义的
}