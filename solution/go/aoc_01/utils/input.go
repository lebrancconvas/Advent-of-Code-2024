package utils

import (
	"bufio"
	"fmt"
	"os"
)

func GetInput(problem string) string {
	file, err := os.Open("../../../input/aoc_01/input.txt")
	if err != nil {
		fmt.Println("Error Opening File: ", err)
		return ""
	}
	defer file.Close()

	scanner := bufio.NewScanner(file)

	for scanner.Scan() {
		line := scanner.Text()
		fmt.Println(line)
	}

	if err := scanner.Err(); err != nil {
		fmt.Println("Error reading File: ", err)
	}

	return ""
}
