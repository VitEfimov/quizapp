import os

def append_questions():
    questions_file = 'src/data/questions.js'
    new_questions_file = 'transformed_questions.js'

    try:
        with open(questions_file, 'r', encoding='utf-8') as f:
            content = f.read()

        # Find the last occurrence of ']'
        last_bracket_index = content.rfind(']')
        if last_bracket_index == -1:
            print("Error: Could not find closing bracket ']' in questions.js")
            return

        # Check content after the last bracket to ensure it's just semicolon or whitespace
        suffix = content[last_bracket_index+1:].strip()
        if suffix and suffix != ';':
            print(f"Warning: Unexpected content after last bracket: '{suffix}'")

        # Prepare the content before the last bracket
        # We want to insert before the last ']'
        # We need to ensure there is a comma after the previous object
        
        # Look backwards from last_bracket_index to find the last non-whitespace char
        i = last_bracket_index - 1
        while i >= 0 and content[i].isspace():
            i -= 1
        
        if i >= 0 and content[i] != ',':
            # Need to insert a comma
            insertion_point = i + 1
            prefix = content[:insertion_point] + ","
            # We might want to keep the original whitespace or just add a newline
            # simpler to just add newline
            middle = "\n"
        else:
            # Already has a comma (or empty array which is unlikely given the file size)
            insertion_point = last_bracket_index
            prefix = content[:insertion_point]
            middle = ""

        with open(new_questions_file, 'r', encoding='utf-8') as f:
            new_questions = f.read()

        # Construct new content
        # prefix includes everything up to the last object (with comma added if needed)
        # new_questions is the list of new objects (without enclosing [] if I generated it right? 
        # Wait, my transform script generated objects separated by commas, but not wrapped in [].
        # Let's verify transformed_questions.js content.
        # It starts with "  {\n" and ends with "  },\n".
        # So it's a sequence of objects.
        
        new_content = prefix + middle + new_questions + "];"
        
        with open(questions_file, 'w', encoding='utf-8') as f:
            f.write(new_content)
            
        print("Successfully appended questions.")

    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    append_questions()
