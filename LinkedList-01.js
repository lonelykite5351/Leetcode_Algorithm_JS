// 初始化LinkedList，包含head和tail
function LinkedList(){
    this.head = null
    this.tail = null
    this.length = 0
}

// node包含要連接到下一個，與上一個node，值是什麼
function Node() {
    this.next = null
    this.prev = null
    this.content = null
}

// 新增node
LinkedList.prototype.add = function (_content) {
    let node = new Node()
    node.content = _content

    // 第一個元素是空的時候
    if(this.head == null){
        this.head = node
        this.length = 1
        return node
    }

    // 最尾端是空的時候
    if(this.tail == null){
        this.tail == node
        this.tail.prev = this.head
        this.head.next = this.tail
        this.length = 2
        return node
    }

    this.tail.next = node
    node.prev = this.tail
    this.tail = node
    this.length++
    return node
}

LinkedList.prototype.print = function () {
    if(this.head == null){
        return "Empty List"
    }
    let s = ''
    let node = this.head
    while (node != null){
        s += node.content + "     "
        node = node.next
    }
    return s
}
