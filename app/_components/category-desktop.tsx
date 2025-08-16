import Link from "next/link";

import { Button } from "@/components/ui/button";

import { categoryTable } from "../_db/schema";

interface CategoryDesktopProps {
  categories: (typeof categoryTable.$inferSelect)[];
}

const CategoryDesktop = ({ categories }: CategoryDesktopProps) => {
  return (
    <div className="flex w-full items-center justify-between">
      {categories.map((category) => (
        <Button
          key={category.id}
          variant="ghost"
          className="rounded-full bg-white text-xs font-semibold"
          asChild
        >
          <Link href={`/category/${category.slug}`}>{category.name}</Link>
        </Button>
      ))}
    </div>
  );
};

export default CategoryDesktop;
