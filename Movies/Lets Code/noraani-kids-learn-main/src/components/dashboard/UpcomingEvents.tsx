import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/contexts/AuthContext";
import { format } from "date-fns";

interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
}

const UpcomingEvents = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const today = new Date();

  useEffect(() => {
    const fetchUpcomingEvents = async () => {
      if (!user) return;

      const { data } = await supabase
        .from('events')
        .select('*')
        .eq('user_id', user.id)
        .gte('event_date', today.toISOString())
        .order('event_date', { ascending: true })
        .limit(5);

      if (data) {
        setEvents(data);
      }
      setLoading(false);
    };

    fetchUpcomingEvents();
  }, [user]);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <CalendarIcon className="h-5 w-5 mr-2" />
          Upcoming Events
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4">
          <h3 className="font-semibold text-foreground">Today</h3>
          <p className="text-sm text-muted-foreground">
            {format(today, 'EEEE, MMMM d')}
          </p>
        </div>
        
        {loading ? (
          <p className="text-muted-foreground">Loading events...</p>
        ) : events.length === 0 ? (
          <div className="text-center py-4">
            <p className="text-muted-foreground mb-4">
              No upcoming events for this date
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {events.map((event) => (
              <div key={event.id} className="border rounded-lg p-3">
                <h4 className="font-medium text-foreground">{event.title}</h4>
                <p className="text-sm text-muted-foreground">{event.description}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  {format(new Date(event.event_date), 'MMM d, yyyy h:mm a')}
                </p>
              </div>
            ))}
          </div>
        )}
        
        <Button variant="link" className="w-full mt-4 text-primary">
          View Calendar
        </Button>
      </CardContent>
    </Card>
  );
};

export default UpcomingEvents;