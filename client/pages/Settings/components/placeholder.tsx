import { MessageCircleIcon } from "lucide-react";
import { Empty, EmptyDescription, EmptyMedia, EmptyTitle } from "../../../components/ui/empty";

export function Placeholder() {
  return (
    <Empty>
      <EmptyMedia variant="icon">
        <MessageCircleIcon />
      </EmptyMedia>
      <EmptyTitle>Coming soon</EmptyTitle>
      <EmptyDescription>This feature is not available yet</EmptyDescription>
    </Empty>
  );
}
