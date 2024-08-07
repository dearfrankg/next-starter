import courses from "./data.json";
import { SelectCoursesLayout } from "./layout";

export default async function SelectCourses() {
  return <SelectCoursesLayout {...{ courses }} />;
}
