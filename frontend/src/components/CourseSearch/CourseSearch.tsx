import { useState } from "react";
import { useCourses } from "../../contexts/CourseContext";
import type { Course } from "../../types/course";
import { CourseSearchCard } from "./CourseSearchCard/CourseSearchCard";

interface CourseSearchProps {
  onSelect: (course: Course) => void;
}

export const CourseSearch = ({ onSelect }: CourseSearchProps) => {
  const { allCourses, isLoading, error } = useCourses();
  const [searchQuery, setSearchQuery] = useState<string>("");
  if (isLoading) {
    return <h1>LOADING</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }

  const normalizedSearchQuery = searchQuery.trim().toLowerCase();
  const filteredCourses =
    normalizedSearchQuery === ""
      ? []
      : allCourses.filter((course) => {
          const courseCode = course.courseCode.trim().toLowerCase();
          const courseTitle = course.title.trim().toLowerCase();
          return (
            courseCode.includes(normalizedSearchQuery) ||
            courseTitle.includes(normalizedSearchQuery)
          );
        });

  return (
    <section>
      <input
        type="searchQuery"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search courses..."
      />

      {normalizedSearchQuery === "" ? (
        <p>Start typing to search.</p>
      ) : filteredCourses.length === 0 ? (
        <p>No courses match the search.</p>
      ) : (
        <div>
          {filteredCourses.map((course) => {
            return (
              <CourseSearchCard
                key={course.id}
                course={course}
                onSelect={onSelect}
              />
            );
          })}
        </div>
      )}
    </section>
  );
};
