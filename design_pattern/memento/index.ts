interface UserState {
    name: string;
    age: number;
    email: string;
}
interface UserStateMemento<T> {
    type: string;
    object: T
    memento: (data: T) => void
}
class UserStateMementoImpl<T> implements UserStateMemento<T> {
    type: string;
    object: T
    state: string
    constructor(type: string, object: T) {
        this.type = type;
        this.state = ''
        this.object = object
    }
    memento(data: T) {
        this.type = typeof data
        this.state = JSON.stringify(data)
    }
}

class UserMoMento implements UserState {
    name: string;
    age: number;
    email: string;
    constructor(name: string, age: number, email: string) {
        this.name = name;
        this.age = age;
        this.email = email
    }

    CrateMemento(): UserStateMemento<UserState> {
        return new UserStateMementoImpl<UserState>(typeof this, this)
    }

    RestoreMemento(memento: UserStateMemento<UserState>) {
        this.name = memento.object.name
        this.age = memento.object.age
        this.email = memento.object.email
    }

}

class CareTaker<T> {
    private mementoList: UserStateMemento<T>[] = []
    private lastIndex;
    constructor() {
        this.lastIndex = -1
    }
    pushMemento(memento: UserStateMemento<T>) {
        for (let i = this.mementoList.length - 1; i > this.lastIndex; i--) {
            this.mementoList.slice(i, 1)
        }
        this.mementoList.push(memento)
        this.lastIndex++
    }
    undoMemento(): UserStateMemento<T> | null {
        if (this.lastIndex < 0) return null
        const memento = this.mementoList[this.lastIndex] || null
        this.lastIndex--
        return memento
    }
    redoMemento(): UserStateMemento<T> | null {
        if (this.lastIndex >= this.mementoList.length - 1) return null
        this.lastIndex++
        const memento = this.mementoList[this.lastIndex] || null
        return memento
    }
}
function test() {
    const careTaker = new CareTaker<UserState>()
    let user = new UserMoMento("Aston", 20, "at@g")
    const state = user.CrateMemento()
    careTaker.pushMemento(state)
    user = new UserMoMento("Aston1", 2, "at@g")
    careTaker.pushMemento(user.CrateMemento())
    user = new UserMoMento("Aston122", 220, "at@g2222")
    careTaker.pushMemento(user.CrateMemento())
    const data = careTaker.undoMemento()
    user.RestoreMemento(data!)
    console.log(user)
}
export default test 
