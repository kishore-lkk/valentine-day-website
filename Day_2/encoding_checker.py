import chardet

def detect_encoding(input):
    with open(input, "rb") as file:
        detector = chardet.universaldetector.UniversalDetector()
        for line in file:
            detector.feed(line)
        detector.close()  
    return detector.result



print(detect_encoding("Day_2/encoding_changed.py"))