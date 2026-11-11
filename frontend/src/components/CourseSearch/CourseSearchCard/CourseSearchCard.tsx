import type { Course } from "../../../types/course";

interface CourseSearchCardProps {
  course: Course;
  onSelect: (course: Course) => void;
}

export const CourseSearchCard = ({
  course,
  onSelect,
}: CourseSearchCardProps) => {
  return (
    <div>
      <h3>{course.courseCode}</h3>
      <p>{course.title}</p>
      <p>({course.credits})</p>
      <button
        type="button"
        onClick={() => {
          onSelect(course);
        }}
      >
        Add course
      </button>
    </div>
  );
};
