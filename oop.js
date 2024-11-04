/* Task 1: Compile Participant Details with Shorthand Property Names */
// TODO: Construct an object named `participant` with properties for `name`, `age`, and `studyField`. Utilize shorthand property names to simplify your code.
const name = "Alice";
const age = 30;
const studyField = "Computer Science";

const participant = { name, age, studyField };
console.log(participant);
// Prints: { name: 'Alice', age: 30, studyField: 'Computer Science' }

/* Task 2: Implement a Shorthand Function for Participant Info */
// TODO: Copy the `participant` object by adding a shorthand method named `displayInfo` that prints the participant's details using `this` and a template string.
const participantWithMethod = {
    ...participant,
    displayInfo() {
        console.log(`Participant: ${this.name}, Age: ${this.age}, Field: ${this.studyField}`);
    }
};
participantWithMethod.displayInfo();
// Prints: Participant: Alice, Age: 30, Field: Computer Science

/* Task 3: Implement a Same Shorthand Arrow Function for Participant Info */
// TODO: Echo the above task with an arrow function. Observe the behavior of `this` and explain your findings.
const participantWithArrowMethod = {
    ...participant,
    displayInfo: () => {
        console.log(`Participant: ${participantWithArrowMethod.name}, Age: ${participantWithArrowMethod.age}, Field: ${participantWithArrowMethod.studyField}`);
    }
};

participantWithArrowMethod.displayInfo();
/*
 * Observations:
 * Arrow functions don't have their own `this` context; they inherit `this` from the surrounding lexical context.
 * In this case, using `this` inside an arrow function doesn't work as expected because `this` refers to the global context or undefined in strict mode.
 */

/* Task 4: Using Computed Property Names */
// TODO: Implement a function named `updateParticipantInfo` that takes a property name and value as arguments alongside an object and returns a new object with that property dynamically set.
function updateParticipantInfo(obj, propName, value) {
    return { ...obj, [propName]: value };
}
const updatedParticipant = updateParticipantInfo(participant, "status", "Active");
console.log(updatedParticipant);
// Prints: { name: 'Alice', age: 30, studyField: 'Computer Science', status: 'Active' }
