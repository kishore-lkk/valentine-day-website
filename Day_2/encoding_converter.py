with open (r"Day_2\regex.py", "rt", encoding="utf-16") as content, open ("Day_2\encoding_changed.py", "wt", encoding="utf-8") as output:
    for line in content:
        output.writelines(line)
    