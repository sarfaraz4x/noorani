import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { BookOpen } from "lucide-react";

interface Course {
  id: string;
  title: string;
  description: string;
}

const MyCourses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    const fetchMyCourses = async () => {
      if (!user) return;

      const { data } = await supabase
        .from('user_courses')
        .select(`
          courses (
            id,
            title,
            description
          )
        `)
        .eq('user_id', user.id);

      if (data) {
        setCourses(data.map(item => item.courses).filter(Boolean));
      }
      setLoading(false);
    };

    fetchMyCourses();
  }, [user]);

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="flex items-center">
          <BookOpen className="h-5 w-5 mr-2" />
          My Courses
        </CardTitle>
        <Button variant="outline" size="sm">
          View Course Catalog
        </Button>
      </CardHeader>
      <CardContent>
        {loading ? (
          <p className="text-muted-foreground">Loading courses...</p>
        ) : courses.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-muted-foreground mb-4">
              You are not currently enrolled in any courses. Check out our{" "}
              <Button variant="link" className="p-0 h-auto text-primary">
                course catalog
              </Button>{" "}
              for all available courses!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {courses.map((course) => (
              <div key={course.id} className="border rounded-lg p-4">
                <h3 className="font-semibold text-foreground">{course.title}</h3>
                <p className="text-sm text-muted-foreground">{course.description}</p>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MyCourses;