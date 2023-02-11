import sys
import os

for line in sys.stdin:
    try:
        slug, number, image, thumb, extension = tuple(line.strip().split(","))

        os.makedirs(slug, exist_ok=True)
        os.system(f"wget {thumb} -O {slug}/{number}t.{extension}")
        os.system(f"wget {image} -O {slug}/{number}.{extension}")
    except ValueError as error:
        print(error)
        continue
