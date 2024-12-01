// tests/questions.test.js

const questions = require("./questions.js");

describe("Question format validation", () => {
  test("questions should be an array", () => {
    expect(Array.isArray(questions)).toBe(true);
  });

  test("should have at least 10 questions", () => {
    expect(questions.length).toBeGreaterThanOrEqual(10);
  });

  questions.forEach((question, index) => {
    describe(`Question ${index + 1}`, () => {
      test("should have required properties", () => {
        expect(question).toHaveProperty("question_text");
        expect(question).toHaveProperty("question_type");
        expect(question).toHaveProperty("options");
        expect(question).toHaveProperty("correct_option");
        expect(question).toHaveProperty("correct_explanation");
      });

      test("question_text should be a non-empty string", () => {
        expect(typeof question.question_text).toBe("string");
        expect(question.question_text.length).toBeGreaterThan(0);
      });

      test('question_type should be "multiple_choice"', () => {
        expect(question.question_type).toBe("multiple_choice");
      });

      test("options should be an array of 4 strings", () => {
        expect(Array.isArray(question.options)).toBe(true);
        expect(question.options.length).toBe(4);
        question.options.forEach((option) => {
          expect(typeof option).toBe("string");
          expect(option.length).toBeGreaterThan(0);
        });
      });

      test("correct_option should be a number between 0 and 3", () => {
        expect(typeof question.correct_option).toBe("number");
        expect(question.correct_option).toBeGreaterThanOrEqual(0);
        expect(question.correct_option).toBeLessThanOrEqual(3);
      });

      test("correct_explanation should be a non-empty string", () => {
        expect(typeof question.correct_explanation).toBe("string");
        expect(question.correct_explanation.length).toBeGreaterThan(0);
      });
    });
  });
});
