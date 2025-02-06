class MyNode {
    key: number
    val: number
    freq: number
    next: MyNode | null
    prev: MyNode | null

    constructor(key: number, value: number) {
        this.key = key
        this.val = value
        this.freq = 1
        this.next = null
        this.prev = null
    }
}

class MyList {
    size: number
    head: MyNode
    tail: MyNode

    constructor() {
        this.head = new MyNode(0, 0)
        this.tail = new MyNode(0, 0)
        this.head.next = this.tail
        this.tail.prev = this.head
        this.size = 0
    }

    addToHead(node: MyNode) {
        node.next = this.head.next
        node.prev = this.head
        this.head.next!.prev = node
        this.head.next = node
        this.size++
    }

    delNode(node: MyNode) {
        node.prev!.next = node.next!;
        node.next!.prev = node.prev!;
        this.size--;
    }
}

class LFUCache {
    cache: Map<number, MyNode>
    freqList: Map<number, MyList>
    minFreq: number
    capacity: number
    constructor(capacity: number) {
        this.cache = new Map()
        this.freqList = new Map()
        this.capacity = capacity
        this.minFreq = 0
    }

    updateFreqListMap(node: MyNode) {
        let currList: MyList = this.freqList.get(node.freq)!
        currList.delNode(node)

        if (node.freq === this.minFreq && currList.size === 0) {
            this.minFreq++
        }

        node.freq++
        if (!this.freqList.has(node.freq)) {
            this.freqList.set(node.freq, new MyList())
        }
        let newFreqList: MyList = this.freqList.get(node.freq)!
        newFreqList.addToHead(node)
        this.freqList.set(node.freq, newFreqList)
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            let node: MyNode = this.cache.get(key)!
            this.updateFreqListMap(node)
            return node.val
        }
        return -1
    }

    put(key: number, value: number): void {
        if (this.capacity === 0) return; // Do nothing if the cache capacity is zero
        if (this.cache.has(key)) {
            let node: MyNode = this.cache.get(key)!
            node.val = value
            this.updateFreqListMap(node)
        } else {
            if (this.cache.size >= this.capacity) {
                let currList: MyList = this.freqList.get(this.minFreq)!
                let lastElement = currList.tail.prev!
                this.cache.delete(lastElement.key)
                currList.delNode(lastElement)
            }
            let newNode: MyNode = new MyNode(key, value)
            this.cache.set(key, newNode)
            this.minFreq = 1
            if (!this.freqList.has(this.minFreq)) {
                this.freqList.set(this.minFreq, new MyList())
            }
            let newList = this.freqList.get(this.minFreq)!
            newList.addToHead(newNode)
        }
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */