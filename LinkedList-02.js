function LinkedList() {

	// Node類別
	const Node = function(element) {
		this.element = element;
		this.next = null;
	}
    
    // 存放 LinkedList 長度
	let length = 0;
    
    // 第一個節點的指標
	let head = null;
    
	// 在尾部新增一個節點
	this.append = function(element) {
		const node = new Node(element)
		let current

		// 情況1:串列為空，新增的是第一個元素
		if (head === null){
			head = node
		}else{
			// 情況2:串列不為空，新增元素進去
			// current輔助搜尋，從頭開始找，如果指向next不是空的，繼續往下找
			current = head
			while (current.next) {
				current = current.next
			}
			// 找到空的後，在尾巴新增一個node
			current.next = node
		}

		length++
	};
    
    // 在特定位置新增一個元素節點
	this.insert = function(position, element) {};
    
    // 從串列中移除一個元素節點
	this.remove = function(element) {};
    
    // 從串列中移除一個特定的節點
	this.removeAt = function(position) {};
    
    // 回傳元素在串列的元素節點 index，若無則回傳 -1
	this.indexOf = function(element) {};
    
    // 判斷串列是否為空，是回傳 true，反之 false
	this.isEmpty = function() {};
    
    // 回傳串列元素個數
	this.size = function() {};
    
    // 由於 Node 是一個物件，所以運用 toString 方法將資料值輸出
	this.toString = function() {
		let current = head
		let str = ''
		while (current) {
			str += current.element + '-->'

			// 指到下一個
			current = current.next
		}
		return str
	};
    
    // 列印出值
	this.print = function() {};
}


const ls = new LinkedList()
ls.append('Mark');
ls.append('Jack');
console.log(ls.toString())