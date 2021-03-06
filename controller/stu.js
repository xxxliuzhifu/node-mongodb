const { createModal } = require(process.cwd() + '/models/stu')

const create = async (req, res) => {
    // res.send('这是stu')
    // 1、接收数据
    const postData = req.body
    // 2、过滤
    // 3、操作数据库
    const data = await createModal(postData)
    console.log('data', data)
    // 4、判断返回
    if (data) {
        res.send({
            meta: {
                state: 200,
                msg: '添加成功'
            },
            data: null
        })
    } else {
        res.send({
            meta: {
                state: 500,
                msg: '添加失败'
            },
            data: null
        })
    }
}

module.exports = {
    create
}