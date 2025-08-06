class Student{
    #firstName = null;
    #lastName = null;
    #yearBirth = null;
    #MAX = 25;
    #visiting = [];
    #marks = [];
    #currentValue = 1;

    #MIN_MARK = 0;
    #MAX_MARK = 90;

    #AVERAGE_VISITED = 0.9;

    constructor(firstName,lastName,yearBirth) {
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#yearBirth = yearBirth;
    }

    getFirstName() {
        return this.#firstName;
    }
    setFirstName(str) {
        if(typeof str !== 'string' || str.trim.length < 2) throw new Error(`Cannot set ${str} as student firstName`);
        this.#firstName = str;
    }

    getLastName() {
        return this.#lastName;
    }
    setLastName(str) {
        if(typeof str !== 'string' || str.trim.length < 2) throw new Error(`Cannot set ${str} as student lastName`);
        this.#lastName = str;
    }

    getYearBirth(year) {
        return this.#yearBirth;
    }
    setYearBirth(year) {
        if(typeof year !== 'number' || year.toString().length < 4) throw new Error(`Cannot set ${year} as student yearBirth`);
        return this.#yearBirth;
    }

    getAge() {
        return new Date().getFullYear() - this.#yearBirth;
    }

    present() {
        this.setPresent(true);
    }

    absent = function() {
        this.setPresent(false);
    }

    setPresent(present) {
        if(this.#currentValue > this.#MAX) throw new Error('You can only attend 25 classes.');
        this.#visiting[this.#currentValue - 1] = present;
        this.#currentValue++;
        this.setMark(0);
    }

    isPresent(currentLesson) {
        return this.#visiting[currentLesson]??false;
    }
    setMark(mark) {
        if(typeof mark !== 'number' || mark < this.#MIN_MARK || mark > this.#MAX_MARK) throw new Error('You set wrong mark');
        if(this.isPresent(this.#currentValue - 2))
            this.#marks[this.#currentValue - 2] = mark;
        else{
            this.#marks[this.#currentValue - 2] = 0;
        }
    }

    averageMark() {
        const {sum, count} = this.#marks.reduce((accumulator, currentValue) => {
            accumulator.sum += currentValue;
            accumulator.count++;
            return accumulator;
        }, { sum: 0, count: 0 });

        return (sum/count).toFixed(2);
    }
    countVisited() {
         return this.#visiting.reduce((visited, currentValue) => {
             return currentValue === true ? visited + 1 : visited;
        }, 0);
    }
    countLessons() {
        return this.#visiting.length;
    }
    summary() {
        const averageVisited = (this.countVisited()/this.countLessons()).toFixed(2);
        console.log('Середнє відвідування ' + averageVisited);
        const averageMark = this.averageMark();
        console.log('Середій бал ' + averageMark);
        if(averageMark > this.#MAX_MARK && averageVisited > this.#AVERAGE_VISITED) {
            return 'Молодець!';
        }else if(averageMark < this.#MAX_MARK && averageVisited < this.#AVERAGE_VISITED){
            return 'Редиска!';
        }else if(averageMark < this.#MAX_MARK || averageVisited < this.#AVERAGE_VISITED){
            return 'Добре, але можна краще';
        }
    }
}

export default Student