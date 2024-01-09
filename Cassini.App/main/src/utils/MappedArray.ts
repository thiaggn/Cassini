class ListItem<T> {
    public readonly value: T;
    public readonly key: number;
    private static counter: number = 0;

    constructor(value: T) {
        this.value = value;
        this.key = ListItem.counter++;
    }
}

export class MappedArray<T>{

    // Depois ver se é mais rapido com Sets
    private items: Array<ListItem<T>> = [];
    constructor(array?: Array<T> | MappedArray<T>) {

        if(array) {

            if(array instanceof Array) {
                this.items = new Array<ListItem<T>>(array.length);

                for(let i = 0; i < array.length; i++) {
                    this.items[i] = new ListItem<T>(array[i]);
                }
            }

            else if(array instanceof MappedArray<T>) {
                this.items = array.items;
            }
        }
    }

    public map<K>(callback: (value: T, key: number, index?: number) => K): K[] {
        return this.items.map((v: ListItem<T>, i: number) => callback(v.value, v.key, i));
    }

    public remove(index: number): MappedArray<T> {
        if(index > this.items.length || index < 0) {
            return new MappedArray<T>(this);
        }

        else if(index === 1) {
            this.items.shift();
        }

        else if(index === this.items.length - 1){
            this.items.pop();
        }

        else {
            this.items = this.items.splice(index, 1);
        }

        return new MappedArray<T>(this);
    }

    public replace(index: number, value: T): MappedArray<T> {
        this.items[index] = new ListItem<T>(value);
        return new MappedArray<T>(this);
    }
}