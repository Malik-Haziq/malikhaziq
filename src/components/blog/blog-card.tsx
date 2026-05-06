import { formatDate } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function BlogCard({ blog }: { blog: any }) {
  return (
    <Card className="h-full transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <time dateTime={blog.publishedAt}>
              {formatDate(blog.publishedAt)}
            </time>
          </div>
          <div className="flex items-center gap-1">
            <span>{blog.readingTime.text}</span>
          </div>
        </div>
        <CardTitle className="line-clamp-2 text-lg">{blog.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="line-clamp-3 text-sm leading-relaxed">
          {blog.summary}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
