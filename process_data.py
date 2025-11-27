
import json
import os
import re

def format_code(text, category):
    # Simple formatter for Java/JS/C-like languages
    if category in ["Java", "JavaScript", "Spring Boot", "SQL"]:
        # Check if it looks like code (has braces or semicolons)
        if "{" in text or ";" in text:
            # If it's already multi-line, assume it's somewhat formatted, but we can try to improve it
            # if text.count('\n') > 2: return text 

            # Heuristic: Split into lines based on braces and semicolons
            formatted = ""
            indent_level = 0
            indent_str = "    " # 4 spaces
            
            # Tokenize simply by replacing delimiters with themselves + newline
            # We want to break on '{', '}', ';'
            # But we need to be careful not to break inside strings (too complex for regex? let's try simple first)
            
            # First, normalize: remove existing weird spacing if it's a one-liner
            if text.count('\n') < 2:
                 # It's likely a one-liner. Let's try to break it up.
                 # We want to split after '{', '}', ';'
                 # But usually the question text comes first, e.g. "What is output?\n public class..."
                 
                 parts = text.split('\n')
                 header = parts[0]
                 code = "\n".join(parts[1:]) if len(parts) > 1 else text
                 
                 # If the whole text is the code (no newline separator initially)
                 if len(parts) == 1 and ("class " in text or "int " in text):
                     header = ""
                     code = text
                 elif len(parts) == 1:
                     # Maybe it's just text
                     return text

                 # Now format the 'code' part
                 # Insert newlines around braces and after semicolons
                 code = code.replace('{', '{\n').replace('}', '\n}\n').replace(';', ';\n')
                 
                 lines = code.split('\n')
                 new_code_lines = []
                 for line in lines:
                     line = line.strip()
                     if not line: continue
                     
                     if line.startswith('}'):
                         indent_level = max(0, indent_level - 1)
                     
                     new_code_lines.append((indent_str * indent_level) + line)
                     
                     if line.endswith('{'):
                         indent_level += 1
                 
                 return header + "\n" + "\n".join(new_code_lines)
            
    return text

def process_questions():
    all_questions = []
    seen_questions = set()

    # 1. Process Legacy Data
    try:
        with open('legacy_vanilla/data.js', 'r', encoding='utf-8') as f:
            content = f.read()
            # Extract JSON part: remove "export const quizData = " and trailing ";"
            json_str = re.search(r'\[.*\]', content, re.DOTALL).group(0)
            legacy_data = json.loads(json_str)
            
            for q in legacy_data:
                if "question" in q and q["question"] not in seen_questions:
                    # Apply formatting
                    q["question"] = format_code(q["question"], q.get("category", ""))
                    all_questions.append(q)
                    seen_questions.add(q["question"])
            print(f"Loaded {len(legacy_data)} legacy questions.")
    except Exception as e:
        print(f"Error processing legacy data: {e}")

    # 2. Process New Data (Java Part 1)
    try:
        with open('data_java_part1.json', 'r', encoding='utf-8') as f:
            java_part1 = json.load(f)
            for q in java_part1:
                if q["question"] not in seen_questions:
                    formatted_q = format_code(q["question"], "Java")
                    all_questions.append({
                        "category": "Java",
                        "question": formatted_q,
                        "options": q["options"],
                        "answer": q["options"][q["correct_index"] - 1]
                    })
                    seen_questions.add(q["question"]) # Add original or formatted? Better formatted to avoid dupes if re-run
                    seen_questions.add(formatted_q)
    except Exception as e:
        print(f"Error processing Java Part 1: {e}")

    # 3. Process New Data (Java Part 2)
    try:
        with open('data_java_part2.json', 'r', encoding='utf-8') as f:
            java_part2 = json.load(f)
            for q in java_part2:
                if q["question"] not in seen_questions:
                    formatted_q = format_code(q["question"], "Java")
                    all_questions.append({
                        "category": "Java",
                        "question": formatted_q,
                        "options": q["options"],
                        "answer": q["options"][q["correct_index"] - 1]
                    })
                    seen_questions.add(q["question"])
                    seen_questions.add(formatted_q)
    except Exception as e:
        print(f"Error processing Java Part 2: {e}")

    # 4. Process other new topics
    files = ['data_python.json', 'data_js.json', 'data_sql.json', 'data_springboot.json']
    
    for filename in files:
        try:
            with open(filename, 'r', encoding='utf-8') as f:
                data = json.load(f)
                topic = data["topic"]
                for q in data["questions"]:
                    if q["question"] not in seen_questions:
                        formatted_q = format_code(q["question"], topic)
                        all_questions.append({
                            "category": topic,
                            "question": formatted_q,
                            "options": q["options"],
                            "answer": q["options"][q["correct_index"] - 1]
                        })
                        seen_questions.add(q["question"])
                        seen_questions.add(formatted_q)
        except Exception as e:
             print(f"Error processing {filename}: {e}")

    # 5. Process Additional Data
    try:
        with open('data_additional.json', 'r', encoding='utf-8') as f:
            additional_data = json.load(f)
            for category, questions in additional_data.items():
                for q in questions:
                    if q["question"] not in seen_questions:
                        formatted_q = format_code(q["question"], category)
                        all_questions.append({
                            "category": category,
                            "question": formatted_q,
                            "options": q["options"],
                            "answer": q["options"][q["correct_index"] - 1]
                        })
                        seen_questions.add(q["question"])
                        seen_questions.add(formatted_q)
            print(f"Loaded additional questions from data_additional.json")
    except Exception as e:
        print(f"Error processing data_additional.json: {e}")

    # Write to src/data/questions.js
    with open('src/data/questions.js', 'w', encoding='utf-8') as f:
        f.write("export const quizData = ")
        json.dump(all_questions, f, indent=2)
        f.write(";")

    print(f"Successfully processed {len(all_questions)} total questions.")

if __name__ == "__main__":
    process_questions()
