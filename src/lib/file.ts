import * as fs from "fs";

export function writeVariableToFile(filename: string, content: any): void {
  try {
    // Convert the content to a string
    // const dataToWrite =
    //   typeof content === "string" ? content : JSON.stringify(content, null, 2);

    // Write to the file
    fs.writeFileSync(filename, content);

    console.log(`Data has been written to ${filename}`);
  } catch (error) {
    console.error("Error writing to file:", error);
  }
}
