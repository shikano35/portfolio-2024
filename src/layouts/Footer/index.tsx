import { LinksNav } from "@/components/LinksNav";

export function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col border-t border-border pb-16 pt-8 md:pb-10">
          <div className="w-full flex justify-center md:justify-start">
            <LinksNav activeClassName="font-medium text-primary" />
          </div>
          <p className="mt-16 text-xs text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Shin Takemura
          </p>
        </div>
      </div>
    </footer>
  );
}
