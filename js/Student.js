'use strict';

function Student(firstName,lastName,yearBirth,grade) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.yearBirth = yearBirth;
    this.grade = grade;
    this.visiting = new Array(25);
    this.currentValue = 0;

    const CONSTANT_GPA = 90;
    const AVERAGE_VISIT = 0.9;
    const MAX_VISIT = 25;

    Student.prototype.getAge = function() {
        return new Date().getFullYear() - this.yearBirth;
    }

    Student.prototype.getGPA = function() {
        if(!Array.isArray(this.grade)) throw new Error('You should send an array');

        const {sum, count} = this.grade.reduce((accumulator, currentValue) => {
            accumulator.sum += currentValue;
            accumulator.count++;
            return accumulator;
        }, { sum: 0, count: 0 });

        return (sum/count).toFixed(2);
    }

    Student.prototype.present = function() {
        this.checkMaxVisited();
        this.visiting[this.currentValue] = true;
        this.currentValue++;
    }

    Student.prototype.absent = function() {
        this.checkMaxVisited();
        this.visiting[this.currentValue] = false;
        this.currentValue++;
    }

    Student.prototype.summary = function () {
        const {visited, classes} = this.visiting.reduce((accumulator, currentValue) => {
            if (currentValue === true) {
                accumulator.visited += currentValue;
                accumulator.classes++;
                return accumulator;
            } else {
                accumulator.classes++;
                return accumulator;
            }
        }, { visited: 0, classes: 0 });

        const average_visit = visited/classes;
        const GPA = this.getGPA();
        console.log('Середнє відвідування ' + visited/classes);
        if(GPA > CONSTANT_GPA && average_visit > AVERAGE_VISIT) {
            return 'Молодець!';
        }else if(GPA < CONSTANT_GPA && average_visit < AVERAGE_VISIT){
            return 'Редиска!';
        }else if(GPA < CONSTANT_GPA || average_visit < AVERAGE_VISIT){
            return 'Добре, але можна краще';
        }
    }

    Student.prototype.checkMaxVisited = function() {
        if(this.currentValue >= MAX_VISIT) throw new Error('You can only attend 25 classes.');
    }
}

export default Student;