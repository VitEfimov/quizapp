import json

def transform_questions():
    try:
        with open('temp_new_questions.json', 'r') as f:
            data = json.load(f)

        transformed_questions = []

        for block in data:
            for category, questions in block.items():
                for q in questions:
                    # Adjust correct_index to be 0-based if it's 1-based, 
                    # but looking at the data, it seems to be 1-based in some cases and 0-based in others?
                    # Let's check the examples.
                    # "correct_index": 2 for options length 4. options[2] is the 3rd element.
                    # Example: "What is the output of `print(f'{2+2=}')` in Python 3.8+?"
                    # Options: ["4", "2+2=4", "2+2=", "Error"]
                    # correct_index: 2 -> "2+2="
                    # Wait, 2+2=4 is the correct answer for f'{2+2=}'. That would be index 1.
                    # Let's re-examine the user request.
                    # User provided: "correct_index": 2
                    # Options: ["4", "2+2=4", "2+2=", "Error"]
                    # If index is 1-based, 2 is "2+2=4".
                    # If index is 0-based, 2 is "2+2=".
                    # Python f-string with =: f'{2+2=}' -> '2+2=4'.
                    # So correct_index 2 implies 1-based indexing if the answer is "2+2=4".
                    # Let's check another one.
                    # "What is the result of `type(1,)`?"
                    # Options: ["<class 'int'>", "<class 'tuple'>", "<class 'list'>", "Error"]
                    # correct_index: 2.
                    # type(1,) is a tuple. So "<class 'tuple'>" is correct.
                    # Index 1 is tuple. Index 2 is list.
                    # If 1-based, 2 is tuple.
                    # So it seems the input data uses 1-based indexing.
                    
                    # Let's check another one.
                    # "Which method adds an element to a set?"
                    # Options: ["append()", "push()", "add()", "insert()"]
                    # correct_index: 3.
                    # add() is the correct one.
                    # Index 0: append, 1: push, 2: add, 3: insert.
                    # If 1-based, 3 is add().
                    
                    # Conclusion: The input data uses 1-based indexing for correct_index.
                    
                    idx = q['correct_index'] - 1
                    if 0 <= idx < len(q['options']):
                        answer = q['options'][idx]
                    else:
                        print(f"Warning: Invalid index {idx} for question: {q['question']}")
                        answer = ""

                    new_q = {
                        "category": category,
                        "question": q['question'],
                        "options": q['options'],
                        "answer": answer
                    }
                    transformed_questions.append(new_q)

        # Generate JS code
        js_output = ""
        for q in transformed_questions:
            js_output += "  {\n"
            js_output += f'    "category": "{q["category"]}",\n'
            js_output += f'    "question": "{q["question"]}",\n'
            js_output += '    "options": [\n'
            for i, opt in enumerate(q["options"]):
                comma = "," if i < len(q["options"]) - 1 else ""
                js_output += f'      "{opt}"{comma}\n'
            js_output += '    ],\n'
            js_output += f'    "answer": "{q["answer"]}"\n'
            js_output += "  },\n"

        # Remove last comma and newline
        if js_output.endswith(",\n"):
            js_output = js_output[:-2] + "\n"
            
        with open('transformed_questions.js', 'w') as f:
            f.write(js_output)
            
        print(f"Successfully transformed {len(transformed_questions)} questions.")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    transform_questions()
