import { Card, CardContent } from "@/components/ui/card";
import { Plus, UserPlus, Share, CreditCard } from "lucide-react";

const QuickActions = () => {
  const actions = [
    {
      icon: Plus,
      title: "Add a New Course",
      color: "text-primary"
    },
    {
      icon: UserPlus,
      title: "Add a Child Account",
      color: "text-islamic-teal"
    },
    {
      icon: Share,
      title: "Invite Your Friends",
      color: "text-islamic-green"
    },
    {
      icon: CreditCard,
      title: "Add Payment Method",
      color: "text-accent"
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {actions.map((action, index) => (
        <Card key={index} className="hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1">
          <CardContent className="p-6 text-center">
            <action.icon className={`h-8 w-8 mx-auto mb-3 ${action.color}`} />
            <p className="text-sm font-medium text-foreground">{action.title}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuickActions;