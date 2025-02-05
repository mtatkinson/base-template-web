import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ProfilePage() {
  return (
    <div className="space-y-6">
      <div className="space-y-0.5">
        <h2 className="text-2xl font-bold tracking-tight">Profile</h2>
        <p className="text-muted-foreground">
          View and manage your profile information.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center">
                <span className="text-2xl">JD</span>
              </div>
              <Button variant="outline">Change Avatar</Button>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Name</p>
              <p className="text-sm text-muted-foreground">John Doe</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Email</p>
              <p className="text-sm text-muted-foreground">john@example.com</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">Role</p>
              <p className="text-sm text-muted-foreground">Administrator</p>
            </div>
            <Button>Edit Profile</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Account Statistics</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              <div className="space-y-2">
                <p className="text-sm font-medium">Member Since</p>
                <p className="text-2xl font-bold">January 2024</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Last Login</p>
                <p className="text-2xl font-bold">Today at 10:30 AM</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Total Projects</p>
                <p className="text-2xl font-bold">15</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm font-medium">Completed Tasks</p>
                <p className="text-2xl font-bold">127</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Updated profile picture", time: "2 hours ago" },
                { action: "Completed Project X", time: "1 day ago" },
                { action: "Added new team member", time: "3 days ago" },
                { action: "Created new project", time: "1 week ago" },
              ].map((activity, index) => (
                <div key={index} className="flex justify-between items-center">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-sm text-muted-foreground">{activity.time}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
} 