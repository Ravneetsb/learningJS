class LinkedList {
    head = new LLNode(null);
    #size = 0;
    constructor() {
        this.head.val = null;
        this.head.next = null;
    }
    add(item) {
        // Head is null
        if (this.head.val === null) {
            this.head.val = item;
        } else {
            let newNode = new LLNode(item);
            if (this.head.next === null) {
                this.head.next = newNode;
            } else {
                let curr = this.head;
                while (curr.next != null) {
                    curr = curr.next;
                }
                curr.next = newNode;
            }
        }
        ++this.#size;
    }

    addInPos(item, pos) {
        if (typeof(pos) != "number") {
            throw new Error("pos must be a number");
        }
        if (pos < 0 || pos > this.#size) {
            throw new Error("pos must be between 0 and size");
        }
        let newNode = new LLNode(item);
        if (pos === 0) {
            newNode.next = this.head;
            this.head = newNode;
        } else if (this.head != null) {
            let curr = this.head;
            for (let i = 0; i > this.#size; i++) {
                curr = curr.next;
            }
            newNode.next = curr.next;
            curr.next = newNode;
        } else {
            throw new Error("head doesn't exist, pos invalid.");
        }
        ++this.#size;
    }

    remove(pos=Number()) {
        if (pos < 0 || pos > this.#size) {
            throw new Error("0 <= pos < size");
        }
        let curr = this.head;

        if (pos === 0) {
            let data = curr.val;
            this.head = this.head.next;
            --this.#size;
            return data;
        }

        for (let i = 1; i < pos - 1 ; i++) {
            curr = curr.next;
        }

        let data =  curr.next.data;
        curr.next = curr.next.next;
        --this.#size;
        return data;
    }



    get(pos) {
        if (typeof(pos) != "number") {
            throw new Error("pos must be a number");
        }
        if (pos < 0 || pos > this.#size) {
            throw new Error("pos must be between 0 and size");
        }
        let curr = this.head;

        for (let i = 0; i < this.#size; i++) {
            curr = curr.next;
        }
        return curr.val;
    }

    size() {
        return this.#size;
    }


}


class LLNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

const ll = new LinkedList(0);
const btn = document.getElementById("submit");
const removeBtn = document.getElementById("remove");
const removeEntry = document.getElementById("removePos");
const entry = document.getElementById("element");
btn.onclick = () => {
    const data = entry.value;
    ll.add(data);
    updateLog();
}
removeBtn.onclick = () => {
    const data = removeEntry.value;
    ll.remove(data);
    updateLog();
}

function updateLog() {
    let curr = ll.head;
    let out = "";
    while (curr.next != null) {
        out += ` -> ${curr.val}`;
        curr = curr.next;
    }
    out += ` -> ${curr.val}`;
    console.log(out)
    entry.value = "";
    removeEntry.value = null;
}