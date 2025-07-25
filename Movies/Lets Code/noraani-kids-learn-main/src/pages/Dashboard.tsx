import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import ProfileCompletion from "@/components/dashboard/ProfileCompletion";
import MyCourses from "@/components/dashboard/MyCourses";
import UpcomingEvents from "@/components/dashboard/UpcomingEvents";
import QuickActions from "@/components/dashboard/QuickActions";
import { useAuth } from "@/contexts/AuthContext";
import { Bell, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import dashboardBanner from "@/assets/dashboard-banner.jpg";

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <SidebarProvider>
      <div className="min-h-screen w-full flex">
        <DashboardSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <SidebarTrigger />
              <div className="hidden md:flex items-center space-x-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search..."
                    className="pl-10 w-64"
                  />
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
              <div className="text-sm">
                <p className="font-medium">Salaam, {user?.email?.split('@')[0] || 'User'}</p>
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 p-6 space-y-6">
            {/* Hero Banner */}
            <div 
              className="rounded-xl p-8 text-white relative overflow-hidden"
              style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${dashboardBanner})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="relative z-10">
                <h1 className="text-3xl font-bold mb-2">Welcome to Your Dashboard</h1>
                <p className="text-lg opacity-90">Continue your Islamic learning journey</p>
              </div>
            </div>

            {/* Profile Completion */}
            <ProfileCompletion />

            {/* Quick Actions */}
            <QuickActions />

            {/* Courses and Events Grid */}
            <div className="grid lg:grid-cols-2 gap-6">
              <MyCourses />
              <UpcomingEvents />
            </div>

            {/* Recently Viewed Courses */}
            <div className="bg-card rounded-lg p-6 border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Recently Viewed Courses</h2>
                <Button variant="link" className="text-primary">
                  View Course Catalog
                </Button>
              </div>
              <p className="text-muted-foreground">No recently viewed courses yet.</p>
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;