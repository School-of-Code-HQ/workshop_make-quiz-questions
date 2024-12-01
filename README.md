# Week 1 Quiz Creator

## The Task

Your task is to create quiz questions about what you learned in Week 1 while practicing JavaScript object/array skills.

You'll be creating an array of question objects that follow a specific schema, which will allow your questions to be added to the School of Code quiz database!

## Learning Objectives

- Practice working with JavaScript objects and arrays
- Reinforce Week 1 concepts by creating questions about them
- Learn about data schema and how to structure data consistently
- Practice JSON formatting

## Instructions

1. Clone this repository
2. Navigate to the `questions.js` file
3. Create at least 10 multiple choice questions about concepts from Week 1
4. Your questions should be added to the `questions` array as objects following the schema below

## Question Schema

Each question should be an object with the following properties:

1. **question_text**: This is a string that contains the text of the question you want to ask.
2. **question_type**: This should always be the string "multiple_choice" for this task.
3. **options**: This is an array of strings, where each string is a possible answer to the question. You should provide four options.
4. **correct_option**: This is a number that represents the index of the correct answer in the options array. The index is 0-based, meaning the first option is 0, the second is 1, and so on.
5. **correct_explanation**: This is a string that explains why the correct answer is correct. This helps learners understand the reasoning behind the answer.

## Getting Started

1. Your `questions.js` file already has this starter code in it
2. Add your questions as objects in the array, following the schema above
3. Make sure your questions:
   - Are about Week 1 content
   - Have 4 options each
   - Have clear explanations for the correct answers
   - Follow the exact schema format

## Tips

- This is great retrieval and spaced repetitions for your Week 1 learning to create meaningful questions
- Make sure your JSON is properly formatted (commas, brackets, etc.)
- Be creative with your questions while staying focused on Week 1 content

Good luck! Your questions might end up being used to help future bootcampers review their learning!
