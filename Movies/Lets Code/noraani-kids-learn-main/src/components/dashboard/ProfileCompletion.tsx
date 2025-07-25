import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";

const ProfileCompletion = () => {
  const [completion, setCompletion] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    const fetchProfileCompletion = async () => {
      if (!user) return;

      const { data } = await supabase
        .from('profiles')
        .select('profile_completion')
        .eq('user_id', user.id)
        .single();

      if (data) {
        setCompletion(data.profile_completion || 0);
      }
    };

    fetchProfileCompletion();
  }, [user]);

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="text-primary">Profile Completion</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-muted-foreground">
            Your profile is almost complete, click here to complete your profile.
          </span>
          <span className="text-lg font-bold text-primary">{completion}%</span>
        </div>
        <Progress value={completion} className="mb-4" />
        <Button variant="outline" size="sm">
          Complete Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCompletion;