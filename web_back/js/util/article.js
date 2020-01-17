// 把所有与文章相关的操作写在这里

var article = {
    // 获取
    // page 就是当前要取出来的第几页的数据
    // type 就是当前文章的类型编号
    // status 就是当前文章的状态
    get:function(page,type,status){
        return $.get(APILIST.article_get,{'page': page,'type':type, 'state': status})
    },
    // 删除文章
    del:function(id){
        return $.get(APILIST.article_del,{'id': id})
    }

}