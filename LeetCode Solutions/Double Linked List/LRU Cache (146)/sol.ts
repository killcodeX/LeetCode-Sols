// Double Linked-List Node structure
class MyListNode {
    key: number;
    val: number;
    prev: MyListNode | null;
    next: MyListNode | null;

    constructor(key: number, value: number) {
        this.key = key;
        this.val = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    private capacity: number;
    private map: Map<number, MyListNode>;
    private head: MyListNode;
    private tail: MyListNode;

    constructor(capacity: number) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new MyListNode(0, 0);
        this.tail = new MyListNode(0, 0);
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key: number): number {
        if (this.map.has(key)) {
            const node = this.map.get(key)!;
            this.moveToHead(node);
            return node.val;
        }
        return -1;
    }

    put(key: number, value: number): void {
        if (this.map.has(key)) {
            const node = this.map.get(key)!;
            node.val = value;
            this.moveToHead(node);
        } else {
            const newNode = new MyListNode(key, value);
            if (this.map.size >= this.capacity) {
                // Remove the least recently used item
                const lru = this.tail.prev!;
                this.removeNode(lru);
                this.map.delete(lru.key);
            }
            this.map.set(key, newNode);
            this.addToHead(newNode);
        }
    }

    private moveToHead(node: MyListNode): void {
        this.removeNode(node);
        this.addToHead(node);
    }

    private addToHead(node: MyListNode): void {
        node.next = this.head.next;
        node.prev = this.head;
        this.head.next!.prev = node;
        this.head.next = node;
    }

    private removeNode(node: MyListNode): void {
        node.prev!.next = node.next;
        node.next!.prev = node.prev;
    }
}