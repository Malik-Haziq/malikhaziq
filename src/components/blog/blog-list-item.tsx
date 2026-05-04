import { formatDate } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import {Blog as BlogListItemProps} from "@/data/blogs"

export function BlogListItem({ blog }: { blog: BlogListItemProps }) {
  return (
    <article className="group py-8 border-b border-border/40 last:border-b-0">
      <div className="grid grid-cols-1 gap-4 md:gap-8">
        {/* Left side - Date and Reading time */}
        <div className="flex md:flex-col gap-3 md:gap-1 text-sm text-muted-foreground">
          <time dateTime={blog.publishedAt} className="whitespace-nowrap">
            {formatDate(blog.publishedAt)}
          </time>
        </div>

        {/* Right side - Content */}
        <div className="space-y-3">
          <div className="space-y-2">
            <h2 className="text-lg md:text-xl font-bold leading-tight group-hover:text-primary transition-colors duration-200">
              {blog.title}
            </h2>

            <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
              {blog.summary}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all duration-200">
              <span>Read article</span>
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
