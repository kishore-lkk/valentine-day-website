seen = set()
with open("input.txt") as input_file, open("output.txt", "w") as output_file :
    for line in input_file:
        if line not in seen:
            seen.add(line)
            if not line.isspace():
                line = line.strip()
                if line.startswith("https") or line.startswith("http"):
                    output_file.write(line)
                    output_file.write("\n")
                
    print("==========SUCCESS===========")